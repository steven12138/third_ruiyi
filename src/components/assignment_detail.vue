<template>
  <v-card>
    <v-card-title>{{ item_info.title }}</v-card-title>
    <v-card-subtitle>{{ item_info.teacherName }}</v-card-subtitle>
    <div id="card-body">
      <v-expansion-panels v-model="step_id" accordion>
        <v-expansion-panel v-for="(step, i) in steps" :key="i">
          <v-expansion-panel-header>
            <h3>{{ step.stepName }}</h3>
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content style="padding-top: 10px">
            <!--            依次循环渲染每一步骤中的每一项-->
            <div
              v-for="(detail, j) in step.step_detail"
              v-bind:key="detail.contentIndex"
            >
              <!--              非试题类内容-->
              <div v-if="detail.type === 0">
                <!--              渲染内容-->
                <div v-if="detail.content" v-html="detail.content"></div>
                <!--              渲染文件-->
                <v-list-item
                  v-for="file in detail.attachmentResources"
                  :key="file.guid"
                  @click="open_file(file.extension, file.title, file.guid)"
                >
                  <v-list-item-avatar>
                    <v-icon
                      class="amber white--text"
                      v-if="file.extension === '.mp4'"
                    >mdi-video
                    </v-icon>
                    <v-icon class="blue white--text" v-else>mdi-file</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="file.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="file.extension"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </div>
              <!--              试题类内容-->
              <div v-if="detail.type === 1">
                <v-card style="margin: 30px 0; transition: all 0.25s">
                  <v-card-subtitle>
                    {{ detail.contentIndex }}.
                    {{ detail.question.questionType }}
                  </v-card-subtitle>
                  <div class="card-body" style="padding: 20px">
                    <div
                      v-html="detail.question.content"
                      style="margin: 10px 0"
                    ></div>
                    <v-row>
                      <v-btn
                        style="
                          transition: all 0.25s;
                          margin-bottom: 10px;
                          margin-left: 5%;
                        "
                        :small="clip && !is_small"
                        :x-small="!clip || is_small"
                        color="warning"
                        @click="show_ans(i, j)"
                      >查看答案
                      </v-btn>
                    </v-row>
                    <v-expand-transition>
                      <v-card
                        style="
                          margin-top: 10px;
                          margin-left: 10px;
                          margin-right: 10px;
                        "
                        v-show="detail.show_ans"
                      >
                        <!--                        渲染答案-->
                        <v-card-subtitle
                          style="padding-top: 8px; padding-bottom: 8px"
                        >答案
                        </v-card-subtitle>
                        <v-divider
                        ></v-divider>
                        <div
                          style="padding: 8px 8px 8px 15px"
                          v-for="(ans, k) in detail.question.answer"
                          :key="k"
                          v-html="ans"
                        ></div>
                        <div v-if="detail.question.answer[0] === ''"
                          style="padding: 0 8px 8px 15px; margin-top: -10px"
                        >
                          这里空空如也!
                        </div>
                        <!--                        渲染解析-->
                        <v-divider
                          v-if="
                            detail.question.analysis !== '<p><br></p>'
                          "
                        ></v-divider>
                        <v-card-subtitle
                          v-if="detail.question.analysis !== '<p><br></p>'"
                          style="padding-top: 8px; padding-bottom: 8px"
                        >解析
                        </v-card-subtitle>
                        <v-divider
                          v-if="detail.question.analysis !== '<p><br></p>'"
                        ></v-divider>
                        <div
                          style="padding: 8px 8px 8px 15px"
                          v-if="detail.question.analysis !== '<p><br></p>'"
                          v-html="detail.question.analysis"
                        ></div>
                        <!--                        渲染文件-->
                        <v-divider
                          v-if="detail.attachmentResources.length"
                        ></v-divider>
                        <v-card-subtitle
                          v-if="detail.attachmentResources.length"
                          style="padding-top: 8px; padding-bottom: 8px"
                        >附件
                        </v-card-subtitle>
                        <v-divider
                          v-if="detail.attachmentResources.length"
                        ></v-divider>
                        <v-list-item
                          v-for="file in detail.attachmentResources"
                          :key="file.guid"
                          @click="
                            open_file(file.extension, file.title, file.guid)
                          "
                        >
                          <v-list-item-avatar>
                            <v-icon
                              class="amber white--text"
                              v-if="file.extension === '.mp4'"
                            >mdi-video
                            </v-icon>
                            <v-icon class="blue white--text" v-else
                            >mdi-file
                            </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title
                              v-html="file.title"
                            ></v-list-item-title>
                            <v-list-item-subtitle
                              v-html="file.extension"
                            ></v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-card>
                    </v-expand-transition>
                  </div>
                </v-card>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "assignment_detail",
  data: () => {
    return {
      steps: [],
      step_id: -1
    };
  },
  methods: {
    open_file: function(ext, title, guid) {
      if (ext === "") return;
      if (ext != ".mp4") {
        window.open(
          "https://bdfzres.lexuewang.cn:5002/ResourceCenter/Resource/ResourcContent/" +
          guid +
          "." +
          ext
        );
      } else {
        let url = this.$router.resolve({
          path: "/video_viewer",
          query: {
            guid: guid,
            name: title
          }
        });
        window.open(url.href, "_blank");
      }
    },
    show_ans: function(i, j) {
      let newitem = this.steps[i];
      newitem.step_detail[j].show_ans = !newitem.step_detail[j].show_ans;
      Vue.set(this.steps, i, newitem);
    }
  },
  props: ["item_info", "clip", "is_small"],
  mounted: async function() {
    let self = this;
    this.info = this.item_info;
    this.token = window.localStorage.getItem("token");
    let config = {
      method: "get",
      url:
        "https://bdfzres.lexuewang.cn:5002/SeniorThreeExercise/StudentSystem/TeacherAssignmentStep/" +
        this.item_info.guid +
        "?teacherAssignmentType=1",
      headers: {
        Authorization: "Bearer " + this.token
      }
    };

    try {
      self.steps = await axios(config);
      self.steps = self.steps.data.data;
      for (let i = 0; i < self.steps.length; i++) {
        let step_i = self.steps[i];
        self.steps[i]["step_detail"] = [];
        let max_page = 1;
        let qst_length = 10;
        while (qst_length >= 10) {
          var data =
            "{\"number\":\"10\",\"page\":\"" +
            max_page +
            "\",\"teacherAssignmentStepId\":\"" +
            step_i.id +
            "\"}";

          let config1 = {
            method: "post",
            url: "https://bdfzres.lexuewang.cn:5002/SeniorThreeExercise/StudentSystem/GetGetLessonContent",
            headers: {
              Authorization: "Bearer " + self.token,
              "Content-Type": "application/json;charset=utf-8"
            },
            data: data
          };

          //获取试题
          let step_i_detail = await axios(config1);
          step_i_detail = step_i_detail.data.data;
          for (let j = 0; j < step_i_detail.length; j++) {
            step_i_detail[j]["show_ans"] = false;
            if (step_i_detail[j].content) {
              step_i_detail[j].content = step_i_detail[j].content.replaceAll(
                "src=\"",
                "src=\"https://bdfzres.lexuewang.cn:5002"
              );
            }
            if (step_i_detail[j]["question"] != null) {
              step_i_detail[j]["question"].content = step_i_detail[j][
                "question"
                ].content.replaceAll(
                "src=\"",
                "src=\"https://bdfzres.lexuewang.cn:5002"
              );
              step_i_detail[j]["question"].analysis = step_i_detail[j][
                "question"
                ].analysis.replaceAll(
                "src=\"",
                "src=\"https://bdfzres.lexuewang.cn:5002"
              );

              //替换答案
              for (
                let k = 0;
                k < step_i_detail[j]["question"].answer.length;
                k++
              ) {
                step_i_detail[j]["question"].answer[k] = step_i_detail[j][
                  "question"
                  ].answer[k].replaceAll(
                  "src=\"",
                  "src=\"https://bdfzres.lexuewang.cn:5002"
                );
              }
            }
          }
          self.steps[i]["step_detail"] =
            self.steps[i]["step_detail"].concat(step_i_detail);
          max_page += 1;
          qst_length = step_i_detail.length;
        }
      }
      this.$forceUpdate();
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped></style>
