import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import apiUrl from "@/assets/api-url.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getMonsters() {
      const response = await axios.get(`${apiUrl}/monsters`);
      return response.data;
    },
    async createFrame(_, payload) {
      // convert payload object to url query
      const query = Object.keys(payload)
        .map((key) => `${key}=${payload[key]}`)
        .join("&");
      const response = await axios.get(`${apiUrl}/create-monster?${query}`);
      return response.data;
    },
    async deleteFrame(_, payload) {
      const response = await axios.delete(
        `${apiUrl}/delete-monster/${payload}`
      );
      return response.data;
    },
  },
  modules: {},
});
