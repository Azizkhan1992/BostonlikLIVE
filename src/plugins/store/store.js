import Vue from "vue";
// import { axios } from "vue/types/umd";
import Vuex from "vuex";
// import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    news: null,
    current_User: null,
    solved_requests: null,
    role: [],
    checkRoles: [],
    requestsDepartments: [
      "Инспекция по экологии",

      "Тоза худуд",

      "Экопрокуратура",

      "Тур Полиция",

      "ТРЗ <<Чарвак>>",

      "МВД",

      "Лесное хозяйство",

      "Комитет по автомобильным дорогам",
    ],
    requestsStatus:[
        "Новая",
        "Процесс",
        "Просрочено"
    ],
    requestsCategories: [
        "Стихийная свалка",
        "Скопление мусора",
        "Выброс мусора в неположенном месте",
        "Вырубка деревьев",
        "Разведение огня в неположенном месте",
        "Выброс промишленных стоков/мусора в реку"
    ],
    departmentRole: "",
  },
  actions: {
    changeStatusUser(_, payload){
      return this.$api.put("users/"+payload.id, {...payload})
      .then(response=> {
        return response
      }).catch(error => {console.log(error)})
    },
    getSolvedRequests({commit}){
      return this.$api.get("applications/solved")
      .then(response => {
        commit('SAVE_SOLVED_REQUESTS', response && response.data)
        return response
      }).catch(error => {console.log(error)})
    },
    getRequestInputValue(_, params){
      return this.$api.get("applications/news", {params})
      .then(response=>{
        return response
      }).catch(error => {console.log(error)})
    },
    getNews({commit}){
        return this.$api.get("applications/news")
        .then(response=>{
            // console.log(66,response)
            commit('SAVE_NEWS', response && response.data)
            return response
        })
        .catch(error=>{console.log(error)})
    },
    getRequestData(_, params){
        return this.$api.get("applications/news", {params})
        .then(response => {
            return response
        }).catch(error=>{console.log(error)})
    },
    getRequestCategories(_, params){
        return this.$api.get("applications/news", {params})
        .then(response=>{
            return response
        }).catch(error=>console.log(error))
    },
    getRequestStatus(_, params){
        return this.$api.get("applications/news", {params})
        .then(response=>{
            return response
        }).catch(error=>{console.log(error)})
    },
    getRequestDepartment(_, params){
        return this.$api.get("applications/news", {params})
        .then(response => {
            // console.log(response)
            return response
        }).catch(error=>console.log(error))
    },
    getCurrentUsers({commit},params){
        return this.$api.get("currentUser",{params})
        .then(response =>{
            // console.log(response.data.user.role);
            const currentUser = response?.data && response.data?.user && response.data.user?.role && response.data.user.role
            commit('SAVE_CURRENT_USER', currentUser)
            return response
        },
        ).catch(error=>{console.log(error)}) 
        
    },
    role(userRole, role) {
      userRole.commit("role", role);
    },
    department(department, departmentRole) {
      department.commit("departmentRole", departmentRole);
    },
    logOut() {
      this.state.role.pop();
      // localStorage.removeItem('token')
      // delete axios.defaults.headers.common['Authorization']
    },
    CHECK_ROLES({ commit }, checkRoles) {
      // console.log(checkRoles);
      commit("check_Roles", checkRoles);
    },
  },
  mutations: {
    SAVE_CURRENT_USER(state, current){
      state.current_User = current
    },
    SAVE_SOLVED_REQUESTS(state, solved){
      state.solved_requests = solved
    },
    SAVE_NEWS(state, news){
      state.news = news
    },
    currentUser(state, data){
        state.currentUser = data
        console.log(data)
    },
    role(state, role) {
      state.role.push(role);
    },
    departmentRole(state, departmentRole) {
      state.departmentRole = departmentRole;
    },
    check_Roles(state, checkRoles) {
      // console.log(checkRoles);
      state.checkRoles = checkRoles;
    },
  },
  getters: {
    getCurrentUser(state){
      return state.current_User
    },
    getSolvedRequests(state){
      return state.solved_requests
    },
    getRequestsNews(state){
      return state.news
    },
    getRole(state) {
      return state.role;
    },
    getCheckRoles(state) {
      return state.checkRoles;
    },
    getDepartmentRoles(state) {
      return state.departmentRole;
    },
    getRequestDepartments(state) {
      return state.requestsDepartments;
    },
    getRequestStatus(state){
        return state.requestsStatus
    },
    getRequestCategories(state){
        return state.requestsCategories
    }
  },
});

export default store;
