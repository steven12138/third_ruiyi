<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="2">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>登录</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Username"
                name="uid"
                prepend-icon="mdi-account"
                type="text"
                v-model="uid"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">确认</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import qs from "qs";

export default {
  name: "HelloWorld",

  data: () => ({
    uid: ""
  }),
  methods: {
    login: function() {
      let self = this;
      var data = qs.stringify({
        userName: this.uid.toString(),
        password:
          "MBH5uB8g9LXq+AVdru085UU1HPDgmZpvsPFhZrhKfLq5wSkyfL3xpg5bgrS/AsVoNMYlch/vfOzl bsZ0dRbWf2fU34vWD2g0KHb7zodzATkMugT0+3LUyri/dr3hZgC+km0ANWSakKpPYtiE+Ywra+W1 z4PaOTFVZhqMdu2G4po=",
        passwordType: "0"
      });
      var config = {
        method: "post",
        url: "/api/Login/StudentLogin",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJHdWlkIjoiYjg5MThhZTcyNGE3NDIwN2EzZDYzN2Q2MmZjZTA2NDciLCJOYW1lIjoi5L2V5aSp6ZizIiwibmJmIjoxNjI4NzMxNDIwLCJleHAiOjE2Mjg4MTc4MjAsImlzcyI6IlJ1aVlpWXVuIiwiYXVkIjoiU3R1ZGVudHMifQ.uAKgpmdsBzZ3A-X2c31W1cUYBrM18gNcwneOhfzBpJ8",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: data
      };

      axios(config)
        .then(function(response) {
          if (response.data.statusCode != 200) {
            console.error("unknown error");
            self.$message.error("未知的用户");
          }
          window.localStorage.setItem("token", response.data.data.tokenString);
          window.localStorage.setItem("guid", response.data.data.guid);
          window.localStorage.setItem("name", response.data.data.name);
          window.localStorage.setItem(
            "gradeGuid",
            response.data.data.gradeGuid
          );
          self.$message.success("你好，" + response.data.data.name);
          self.$router.push("/lunch");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
