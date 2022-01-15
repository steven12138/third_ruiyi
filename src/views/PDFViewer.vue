<template>
  <v-container fluid style="flex-direction: column">
    <v-card style="width: 100%; height: 100%">
      <v-col style="height: 100%">
        <v-card-title>
          <span>文件预览</span>
          <v-spacer></v-spacer>
          <v-btn @click="full_screen" fab small class="btn" color="success">
            <v-icon>mdi-fullscreen</v-icon>
          </v-btn>
          <v-btn @click="handle_download" fab small class="btn" color="primary">
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>{{ name }}</v-card-subtitle>
        <iframe
          style="width: 100%; height: calc(100% - 105px)"
          :src="src"
          frameborder="0"
        ></iframe>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
// import pdf from "vue-pdf";

export default {
  name: "PDFViewer",
  components: {
    // pdf
  },
  data: () => {
    return {
      src: "",
      name: "",
    };
  },
  methods: {
    full_screen: function () {
      window.open(this.src, "_blank");
    },
    handle_download: function () {
      let url = this.src.replace(
        "https://bdfzres.lexuewang.cn:5002",
        this.$api_base
      );
      let title = this.name.replaceAll(" ", "") + ".pdf";
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          const a = document.createElement("a");
          const objectUrl = window.URL.createObjectURL(blob);
          a.download = title;
          a.href = objectUrl;
          a.click();
          window.revokeObjectURL(objectUrl);
        });
    },
  },
  mounted() {
    this.name = this.$route.query.name;
    this.src = this.$route.query.src;
    this.$forceUpdate();
  },
};
</script>

<style scoped>
.btn {
  margin: 5px;
}
</style>
