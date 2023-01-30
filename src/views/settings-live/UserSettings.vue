<template>
  <div class="user-settings-container">
    <div class="user-settings-header">
      <div class="settings-header-left">
        <h2>Настройки</h2>
        <div class="header-route">
          <router-link tag="span" to="/settings">Настройки</router-link>
          <img src="@/assets/src/Vector (1).png" alt="" />
          <p>Пользователи системы</p>
        </div>
      </div>
      <div class="settings-header-right">
        <person-menu />
      </div>
    </div>
    <div class="user-settings-table">
      <table>
        <tr class="table-header">
          <th class="th-one">ФИО</th>
          <th class="th-two">Ведомство</th>
          <th class="th-two">Статус</th>
          <th class="th-two">Дата создания аккоунта</th>
          <th class="th-two">Последная активность</th>
        </tr>
        <hr />
        <router-link
          tag="tr"
          v-for="(user, idx) in list"
          :key="idx"
          :to="`/user-setting-item/${user._id}`"
          class="settings-table"
        >
          <td class="td-one">{{ user.firstName }}</td>
          <td class="td-two">{{ user.department }}</td>
          <td class="td-two">{{ user?.status == true ? "Активирован" : 'Деактивирован' }}</td>
          <td class="td-two">{{ user?.createdDate|userSettingsFilter }}</td>
          <td class="td-two">{{ user?.lastActiveDate|userSettingsFilter }}</td>
        </router-link>
        <hr />
      </table>
    </div>
    <div class="user-add">
      <div class="request-footer">
        <app-pagination
          @paginate="setPaginationData"
          :data="Users"
          :limit="4"
        ></app-pagination>
      </div>
      <div class="add-user-item">
        <router-link tag="button" to="/add-new-user">Создать профиль</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import PersonMenu from "../PersonMenu.vue";
import AppPagination from "@/components/common/AppPagination";
export default {
  components: { PersonMenu, AppPagination },
  name: "user-profil",
  data() {
    return {
      Users: [],
      route: null,
      list: [],
      static: {
        true: "Активный",
        false: "Неактивный",
      },
    };
  },
  created() {
    this.getRoute();
  },
  mounted() {
    this.getUsers();
    // this.getRoute()
    // this.getRoute()
  },
  filters:{
    userSettingsFilter(data){
      let prettyDate = data?.split('T')
      return prettyDate && prettyDate[0]
    }
  },
  methods: {
    getRoute() {
      this.route = this.$route.name;
      console.log(this.route);
    },
    getUsers() {
      this.$api.get("users").then(
        (response) => {
          // console.log(response.data)
          this.Users = response.data;
          this.list = this.Users.slice(0, 4);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    setPaginationData(data) {
      this.list = data;
    },
  },
};
</script>
<style>
.user-settings-header .settings-header-right .personal-keys {
  display: none;
}

</style>
