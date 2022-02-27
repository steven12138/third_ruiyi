<template>
  <v-container style="flex-direction: column">
    <v-avatar size="300" style="margin: 30px">
      <img src="../assets/GLaDOShd_Portal_2.webp" alt="steven12138" />
    </v-avatar>
    <span>Steven12138 @ 2022 Design and Develop</span>
    <br />
    <v-btn color="primary" @click="open_ruiyi">查看大考成绩</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "About",
  methods: {
    open_ruiyi: function () {
      let guid = window.localStorage.getItem("guid");
      if (guid === null) {
        this.$message.error("请先登录");
        return;
      }
      let gradeGuid = window.localStorage.getItem("gradeGuid");
      let name = window.localStorage.getItem("name");
      let ev = document.createEvent("CustomEvent");
      ev.initCustomEvent("Open_ruiyi", false, false, {
        guid: guid,
        gradeGuid: gradeGuid,
        name: name,
      });
      document.dispatchEvent(ev);
    },
  },
};
</script>
