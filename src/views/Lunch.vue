<template>
  <v-row no-gutters>
    <v-navigation-drawer
      class="fill-height"
      permanent
      :style="'transition: all .25s;' + (!clips ? 'width:56px' : '')"
    >
      <v-row class="fill-height" no-gutters>
        <v-navigation-drawer mini-variant mini-variant-width="56" permanent>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-avatar
                color="indigo"
                size="36"
                @click="clips = !clips"
                style="cursor: pointer"
              >
                <span class="white--text">
                  {{ name.substring(1, name.length) }}
                </span>
              </v-avatar>
            </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item-group v-model="subject_id" color="primary">
              <v-list-item
                v-for="item in subject"
                :key="item.id"
                @click="handle_switch_subject(item.id)"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <h2 style="margin-top: 2px; margin-left: 2px">
                      {{ item.text }}
                    </h2>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <v-col>
          <v-row
            v-show="clips"
            align="center"
            style="padding-top: 10px; padding-left: 30px; margin-bottom: -8px"
          >
            <v-switch v-model="show_test" @click="switch_test"></v-switch>
            <span>查看考试</span>
          </v-row>
          <v-divider v-show="clips"></v-divider>
          <v-list
            v-show="clips"
            @scroll="handle_scroll($event)"
            class="grow fill-height"
            ref="scrolling"
            style="
              transition: all 0.25s;
              max-width: 200px;
              max-height: calc(100vh - 121px);
              overflow: auto;
              padding-top: 0;
            "
          >
            <v-list-item-group v-model="sidebar_id" color="primary">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="get_detail(item)"
              >
                <v-list-item-title
                  v-text="item.title"
                  style="text-overflow: ellipsis"
                  :title="item.title"
                ></v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-main style="margin: 0; padding: 0">
      <v-slider
        style="margin: 14px 20px -12px 20px"
        v-model="show_width"
        min="5"
        max="100"
        @click="set_limit"
        @end="set_limit"
        @mousedown="set_limit"
        @mouseup="set_limit"
      ></v-slider>
      <v-divider></v-divider>
      <v-main
        ref="main_view"
        :style="
          'margin: 0; padding: 10px; max-width: calc(100vw - ' +
          (clips ? '280px' : '73px') +
          '); max-height: calc(100vh - 138px); overflow: auto;'
        "
      >
        <assignment_detail
          :style="'max-width:' + show_width + '%;'"
          v-if="current_assignment != null"
          :key="current_assignment.guid"
          :item_info="current_assignment"
          :clip="clips"
          :small="show_width <= 20"
          :is_exam="show_test"
        ></assignment_detail>
      </v-main>
    </v-main>
  </v-row>
</template>
<script>
import assignment_detail from "../components/assignment_detail";
import axios from "axios";

export default {
  name: "lunch",
  components: {
    assignment_detail,
  },
  data: () => {
    return {
      show_test: false,
      show_width: 100,
      clips: true,
      name: "",
      current_assignment: null,
      is_end: false,
      token: "",
      subject_id: -1,
      sidebar_id: 10,
      max_id: 1,
      subject: [
        { text: "语", id: "01" },
        { text: "数", id: "02" },
        { text: "英", id: "03" },
        { text: "物", id: "04" },
        { text: "化", id: "05" },
        { text: "生", id: "06" },
        { text: "史", id: "07" },
        { text: "地", id: "08" },
        { text: "政", id: "09" },
      ],
      items: [],
    };
  },
  methods: {
    switch_test: function () {
      this.handle_switch_subject("0" + (this.subject_id + 1).toString());
    },
    set_limit: function () {
      this.show_width = this.show_width >= 25 ? this.show_width : 25;
    },
    d: function () {
      console.log("get");
    },
    load_more: function () {
      if (this.is_end) return;
      let id = "0" + (this.subject_id + 1).toString();
      this.max_id += 1;
      let self = this;
      let config = {
        method: "get",
        url:
          this.$api_base +
          "/SeniorThreeExercise/StudentSystem/GetAssignmentBySubject?subjectId=" +
          id +
          "&PageIndex=" +
          self.max_id +
          "&PageNum=20&teacherAssignmentType=" +
          (this.show_test ? "2" : "1"),
        headers: {
          Authorization: "Bearer " + this.token,
        },
      };

      axios(config)
        .then(function (response) {
          if (response.data.data.length < 20) {
            self.is_end = true;
          }
          self.items = self.items.concat(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handle_switch_subject: function (id) {
      this.$refs.scrolling.$el.scrollTo(0, 0);
      this.is_end = false;
      this.sidebar_id = 0;
      this.max_id = 1;
      let self = this;
      let config = {
        method: "get",
        url:
          this.$api_base +
          "/SeniorThreeExercise/StudentSystem/GetAssignmentBySubject?subjectId=" +
          id +
          "&PageIndex=" +
          self.max_id +
          "&PageNum=20&teacherAssignmentType=" +
          (this.show_test ? "2" : "1"),
        headers: {
          Authorization: "Bearer " + this.token,
        },
      };

      axios(config)
        .then(function (response) {
          self.items = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    get_detail: function (item) {
      this.current_assignment = item;
    },
    handle_scroll: function (e) {
      if (
        parseInt(e.target.scrollTop + e.target.clientHeight) ===
        e.target.scrollHeight
      ) {
        this.load_more();
      }
    },
  },
  mounted() {
    this.$refs.scrolling.$el.addEventListener("scroll", this.handle_scroll);
    this.token = window.localStorage.getItem("token");
    this.name = window.localStorage.getItem("name");
    this.subject_id = -1;
    this.sidebar_id = -1;
  },
};
</script>
