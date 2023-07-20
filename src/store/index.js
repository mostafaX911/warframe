import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import apiUrl from "@/assets/api-url.js";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    islogin: false,
    token: null,
    user: null,
  },
  getters: {},
  mutations: {
    logout(state) {
      state.islogin = false;
      localStorage.removeItem("islogin");
      state.user = null;
      alert("Logged out");
    },
    login(state, islogin) {
      state.islogin = true;
      localStorage.setItem("islogin", islogin);
      alert("Logged in");
    },
    resetState(state) {
      state.islogin = false;
      state.token = null;
      state.user = null;
    },
    loginRequest(state, user) {
      state.islogin = true;
      state.token = null;
      state.user = user;
    },
    loginSuccess(state, user) {
      state.islogin = true;
      state.token = null;
      state.user = user;
      localStorage.setItem("islogin", true);
    },
    loginFailure(state) {
      state.islogin = false;
    },
  },
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
    async login({ commit }, payload) {
      const response = await axios.post(`${apiUrl}/login`, payload);
      if (response.status === 200) {
        commit("loginSuccess", response.data);
        console.log("login success");
      }
    },
    logout({ commit }) {
      commit("resetState");
      router.push("/");
    },
    clearState({ commit }) {
      commit("resetState");
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
