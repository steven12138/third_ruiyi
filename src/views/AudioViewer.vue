<template>
  <v-container fluid style="flex-direction: column">
    <v-card
      style="width: 30%; padding: 10px; min-width: 400px; margin-top: 10px"
    >
      <v-card-title>
        <span>音频预览</span>
        <v-spacer></v-spacer>
        <v-btn small fab color="primary" @click="handle_download">
          <v-icon>mdi-download</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>{{ audio.name }}</v-card-subtitle>
      <aplayer :audio="audio" autoplay="false" volume="1" loop="one" />
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AudioViewer",
  data: () => {
    return {
      audio: {
        theme: "#1976d2",
        name: "加载中",
        artist: "未知",
        url: "http://music.163.com/song/media/outer/url?id=317151.mp3",
        cover: "https://source.unsplash.com/300x300/?music",
      },
    };
  },
  methods: {
    handle_download: function () {
      let url = this.audio.url.replace(
        "https://bdfzres.lexuewang.cn:5002",
        this.$api_base
      );
      let title = this.audio.name.replaceAll(" ", "");
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
    this.audio.name = this.$route.query.name;
    this.audio.url = this.$route.query.src;
    this.audio.artist = this.$route.query.artist;
  },
};
</script>

<style scoped></style>
