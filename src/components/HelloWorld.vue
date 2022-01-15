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
              <input style="display: none" />
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
    uid: "",
  }),
  methods: {
    login: function () {
      let self = this;
      let data = qs.stringify({
        userName: this.uid.toString(),
        password:
          "m9rPL8ZJAVjI1hmN7ueCHF3pyNONTNIK2OudSsKZDYDoV+/PeTyl5IuJscjXgDzTbqmff3pgC5nc\nkqim8mZHoMM9JOcC3Ih4u49ew8IXSX1vSfEuFPyFOZT64YwkcEZGpErWXTeq5IAwK+tsQfyfEO8o\nt3UFT866TYxUOobJAEk=\n",
        passwordType: "1",
      });
      let config = {
        method: "post",
        url: self.$api_base + "/Login/StudentLogin",
        headers: {
          "Content-Type": " application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.data.statusCode != 200) {
            console.error("unknown error");
            self.$message.error("未知的用户");
            return;
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
        .catch(function (error) {
          self.$message.warning("跨源异常 " + error);
        });
    },
  },
};
</script>
