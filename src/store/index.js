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
    async getUsers() {
      const response = await axios.get(`${apiUrl}/users`);
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
    async editFrame(_, payload) {
      // convert payload object to url query
      const query = Object.keys(payload)
        .map((key) => `${key}=${payload[key]}`)
        .join("&");
      const response = await axios.get(`${apiUrl}/edit-monster?${query}`);
      return response.data;
    },
    async signup(_, payload) {
      const response = await axios.post(`${apiUrl}/signup`, payload);
      return response.data;
    },
    async login(_, payload) {
      const response = await axios.post(`${apiUrl}/login`, payload);
      return response.data;
    },
    async getMonster(_, id) {
      const response = await axios.get(`${apiUrl}/monsters/${id}`);
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
