<template>
<div class="main-container">
    <main-menu/>
    <div class="main-content">
            <router-view></router-view>
        </div>
</div>
</template>
<script>
import MainMenu from './MainMenu.vue'
export default {
    name: 'main-dashboard',
    components:{
        MainMenu
    },
    data(){
        return{
            users_permissions: null,
            solvedRequests: null
        }
    },
    mounted(){
        this.getUser()
        this.getCheckRoles()
        this.getNews()
        this.getSolvedRequests()
        this.getCurrentUser()
    },
    methods:{
      getCurrentUser(){
      this.$store.dispatch('getCurrentUsers')
      // .then(response=>{
      //   console.log(response)
      // })
    },
      getSolvedRequests(){
        this.$store.dispatch('getSolvedRequests')
        .then(response => {
          this.solvedRequests = response.data
        })
      },
      getNews() {
      // console.log(this.$store)
      this.$store.dispatch('getNews').then(response=>{
        this.news = response.data
      })
    },
        getUser() {
      this.$api
        .get("currentUser")

        .then(
          (response) => {
            if (response?.data?.user?.role) {
              this.$store.dispatch("role", response.data.user.role);
            }
            if (response?.data?.user?.department) {
              this.$store.dispatch("department", response.data.user.department);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },
    getCheckRoles() {
      this.$api.get("settings/check").then(
        (response) => {
          if (response?.data?.categories) {
            const checkroles = response.data.categories;
            this.users_permissions = checkroles;
            this.$store.dispatch("CHECK_ROLES", checkroles);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    }
}
</script>
<style>




</style>