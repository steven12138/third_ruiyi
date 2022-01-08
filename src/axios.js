import Vue from "vue";
import axios from "axios";

let instance = {
  timeout: 60 * 1000,
};

const _axios = axios.create([instance]);

_axios.interceptors.request.use(
  function(instance) {
    return instance;
  },
  function(error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(instance) {
    return instance;
  },
  function(error) {
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
