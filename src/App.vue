<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>睿易云</h2>
      </div>
      <v-spacer />
      <h3 style="cursor: pointer; margin-right: 20px" @click="about">
        Steven Present
      </h3>
      <v-btn color="success" fab small @click="back">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view class="fill-height" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
    item: 1,
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
  methods: {
    back: function () {
      this.$router.back(-1);
    },
    about: function () {
      this.$router.push("/about");
    },
  },
};
</script>
