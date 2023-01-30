<template>
  <div class="add-user-container">
    <div class="add-user-header">
      <div class="user-header-left">
        <h2>Настройки</h2>
        <div class="add-user-route">
          <router-link tag="span" class="setting-span-one" to="/settings">Настройки</router-link>
          <img class="add-user-img-one" src="@/assets/src/Vector (1).png" alt="" />
          <router-link tag="span" class="setting-span-two" to="/user-settings">Пользователи системы</router-link>
          <img src="@/assets/src/Vector (1).png" alt="">
          <span>Создать профиль</span>
        </div>
      </div>
      <div class="user-profile-img">
         <person-menu />
      </div>
     
    </div>
    <div class="add-user-content">
      <div class="add-user-form">
        <div class="add-user-password new-user">
          <p class="add-user-title">Пароль</p>
          <input type="text" placeholder="Введите пароль" />
        </div>
        <div class="add-user-department new-user">
          <p class="add-user-department">Ведомство</p>
          <img
            class="user-department-img"
            src="@/assets/src/Vector (Stroke).png"
            alt=""
          />
          <v-container fluid>
            <v-app>
            <v-row justify="center" class="ma-2">
              <v-col sm="6"
                ><v-select label="Выберите ведомство" :items="items"></v-select
              ></v-col>
            </v-row>
          </v-app>
          </v-container>
          
        </div>

        <div class="add-user-role new-user">
          <p class="add-user-title">Роль</p>
          <img
            class="user-role-img"
            src="@/assets/src/Vector (Stroke).png"
            alt=""
          />
          <v-container fluid>
            <v-row justify="center" class="ma-2">
              <v-col class="d-flex" sm="6">
                <v-select :items="items1" label="Выберите роль"></v-select>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <div class="add-user-login new-user">
          <p class="add-user-title">Логин</p>
          <span>ecobot123</span>
        </div>

        
      </div>
      <div class="add-footer-image">
        <img src="@/assets/src/Icons/profil-icon.svg" alt="" />
        <div class="add-user-btn new-user">
          <button class="user-btn-exit">Отмена</button>
          <button class="user-btn-save">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PersonMenu from "../PersonMenu.vue";
export default {
  components: { PersonMenu },
  name: "add-new-user",
  data() {
    return {
      items: ["Инспекция по экологии", "Тоза Худуд", "Экопрокуратура", "Тур Полиция", "ТРЗ  <<Чарвак>>", "МВД", "Лесное хозяйство", "Комитет по автомобильным дорогам"],
      items1: ["admin", "moderator"],
    };
  },
};
</script>
<style>
.add-user-header .personal-keys {
  display: none;
}



</style>
