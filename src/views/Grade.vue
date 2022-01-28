<template>
  <v-container fluid style="flex-direction: column">
    <v-card style="width: 70%; min-width: 400px; padding: 10px">
      <v-card-title>
        <span>考试得分</span>
      </v-card-title>
      <v-card-subtitle>{{ name }}</v-card-subtitle>
      <div v-if="is_return" style="padding: 0 20px">
        <!--        详情渲染-->
        <v-row style="padding: 10px">
          <v-col>
            <div class="statistic">
              <div class="statistic-title">我的分数</div>
              <div class="statistic-content">
                {{ statistic.myScore }}
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="statistic">
              <div class="statistic-title">平均分</div>
              <div class="statistic-content">
                {{ average }}
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="statistic">
              <div class="statistic-title">最高分</div>
              <div class="statistic-content">
                {{ statistic.maxScore }}
              </div>
            </div>
          </v-col>
        </v-row>
        <!--        得分情况渲染-->
        <div class="statistic statistic-title" style="margin-left: 10px">
          得分详情
        </div>
        <div>
          <v-chip
            v-for="(item, i) in answer_detail"
            v-bind:key="i"
            text-color="white"
            class="ma-1"
            @click.stop="open_detail(item.studentAnswerGuid)"
            :color="
              item.studentAnswerResult === 2
                ? 'green'
                : item.studentAnswerResult === 3
                ? 'orange'
                : 'red'
            "
          >
            <v-avatar
              :class="
                item.studentAnswerResult === 2
                  ? 'green darken-3'
                  : item.studentAnswerResult === 3
                  ? 'orange darken-3'
                  : 'red darken-3'
              "
            >
              {{ item.questionOrder }}
            </v-avatar>
            <span style="margin: 0 5px">{{ item.studentScore }}</span>
          </v-chip>
        </div>
        <v-divider style="margin-top: 10px"></v-divider>
        <div>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">排名</th>
                <th class="text-left">姓名</th>
                <th class="text-left">得分</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in rankings"
                :key="item.studentName"
                :class="item.isMine ? 'blue lighten-5' : ''"
              >
                <td>{{ item.rankingNum }}</td>
                <td>{{ item.studentName }}</td>
                <td>{{ item.score }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
        <div
          class="statistic statistic-title"
          style="margin-left: 10px; margin-top: 10px"
        >
          评语
        </div>
        <div
          v-text="comment"
          style="padding: 0 20px; margin-bottom: 20px"
        ></div>
      </div>
      <div v-else>
        <v-img
          src="https://iconfont.alicdn.com/t/ceb97b38-32c1-4bd4-ba6a-2c7dadd1a45f.png"
          aspect-ratio="1.7"
        ></v-img>
        <h2
          style="
            text-align: center;
            color: rgba(0, 0, 0, 0.6);
            font-weight: 400;
          "
        >
          老师未下发成绩结果
        </h2>
      </div>
    </v-card>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline" primary-title> 作答详情</v-card-title>
        <div style="padding: 10px 20px">
          <v-row style="padding: 10px">
            <v-col>
              <div class="statistic">
                <div class="statistic-title">我的分数</div>
                <div class="statistic-content">
                  {{ question_detail.studentScore }}
                </div>
              </div>
            </v-col>
            <v-col>
              <div class="statistic">
                <div class="statistic-title">试题状态</div>
                <div class="statistic-content">
                  <span v-if="question_detail.answerResult === 2">✔</span>
                  <span v-else-if="question_detail.answerResult === 4">❌</span>
                  <h2 v-else class="orange--text">⍻</h2>
                </div>
              </div>
            </v-col>
            <v-col v-if="question_detail.answer !== ''">
              <div class="statistic">
                <div class="statistic-title">我的选项</div>
                <div class="statistic-content">
                  {{ question_detail.answer }}
                </div>
              </div>
            </v-col>
          </v-row>
          <div v-if="question_detail.answerUrl !== null">
            <v-row>
              <v-col cols="3">
                <v-card
                  max-width="100px"
                  max-height="100px"
                  @click="open_img(0)"
                >
                  <v-img
                    aspect-ratio="1"
                    :src="baseurl + question_detail.answerUrl"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card
                  max-width="100px"
                  max-height="100px"
                  @click="open_img(1)"
                >
                  <v-img
                    aspect-ratio="1"
                    :src="
                      question_detail.answerUrl2
                        ? baseurl + question_detail.answerUrl2
                        : 'https://iconfont.alicdn.com/t/1bc2327b-a835-4efb-8528-c4aa3722dfe2.png'
                    "
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card
                  max-width="100px"
                  max-height="100px"
                  @click="open_img(2)"
                >
                  <v-img
                    aspect-ratio="1"
                    :src="
                      question_detail.answerUrl3
                        ? baseurl + question_detail.answerUrl3
                        : 'https://iconfont.alicdn.com/t/1bc2327b-a835-4efb-8528-c4aa3722dfe2.png'
                    "
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false"> 关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
import "viewerjs/dist/viewer.css";
import { api as viewerApi } from "v-viewer";

export default {
  name: "Grade.vue",
  data: () => {
    return {
      baseurl: "",
      guild: "",
      student_guid: "",
      token: "",
      is_return: true,
      answer_detail: [],
      rankings: [],
      name: "",
      comment: "",
      statistic: {},
      dialog: false,
      question_detail: {},
      total_detail: [],
    };
  },
  computed: {
    average: function () {
      if (this.statistic.averageScore === undefined) return "";
      return this.statistic.averageScore.toFixed(2);
    },
    images: function () {
      let imglst = [];
      if (this.question_detail === {}) return;
      if (
        this.question_detail.answerUrl !== null &&
        this.question_detail.answerUrl !== undefined
      )
        imglst.push(this.baseurl + this.question_detail.answerUrl);
      if (
        this.question_detail.answerUrl2 !== null &&
        this.question_detail.answerUrl !== undefined
      )
        imglst.push(this.baseurl + this.question_detail.answerUrl2);
      if (
        this.question_detail.answerUrl3 !== null &&
        this.question_detail.answerUrl !== undefined
      )
        imglst.push(this.baseurl + this.question_detail.answerUrl3);
      return imglst;
    },
  },
  methods: {
    open_img: function (i) {
      if (i >= this.images.length) return;
      // this.dialog=false;
      const $viewer = viewerApi({
        options: {
          loading: true,
          focus: false,
          initialViewIndex: i,
          button: true,
        },
        images: this.images,
      });
      $viewer.show();
    },
    open_detail: function (answer_guid) {
      if (this.total_detail.length === 0) return;
      for (let item in this.total_detail) {
        if (this.total_detail[item].studentAnswerGuid === answer_guid) {
          this.question_detail = this.total_detail[item];
          break;
        }
      }
      this.dialog = true;
    },
  },
  mounted() {
    this.baseurl = this.$api_base;
    this.token = window.localStorage.getItem("token");
    this.name = this.$route.query.name;
    this.guid = this.$route.query.guid;
    let config = {
      method: "get",
      url: `${this.$api_base}/SeniorThreeExercise/StudentSystem/TestStudentAnswers/${this.guid}`,
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
    let self = this;
    axios(config)
      .then(function (response) {
        if (response.data.statusCode === 500) {
          self.is_return = false;
          return;
        }
        self.answer_detail =
          response.data.data.studentAnswersResultDetailOutputDtos;
        self.rankings = response.data.data.testRankings;
        self.comment = response.data.data.comment;
        self.statistic = response.data.data.scoreStatistic;
        self.$forceUpdate();
      })
      .catch(function (error) {
        console.error(error);
      });
    if (this.is_return) {
      this.student_guid = window.localStorage.getItem("guid");
      let config2 = {
        method: "get",
        url: `${this.$api_base}/SeniorThreeExercise/StudentSystem/StudentAnswersBysceneGuid?studentGuid=${this.student_guid}&sceneGuid=${this.guid}&api-version=2`,
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      axios(config2)
        .then(function (response) {
          self.total_detail = response.data.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  },
};
</script>

<style scoped>
.statistic {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
}

.statistic-title {
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.statistic-content {
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
</style>
