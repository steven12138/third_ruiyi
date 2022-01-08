<template>
  <v-app >
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>睿易云第三方客户端</h2>
      </div>
      <v-spacer />
      <h3>Steven Present</h3>
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
      { text: "Conversions", icon: "mdi-flag" }
    ]
  })
};
</script>
