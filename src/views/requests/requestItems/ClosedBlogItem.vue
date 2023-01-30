<template>
  <div class="request-item-container" @click="deactiveImages">
    <div class="request-item-header">
      <div class="item-header-left">
        <h2>Заявки</h2>
        <div class="item-header-titles">
          <router-link tag="span" to="/closed-requests">Закрытые заявки</router-link>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            class="request-item-svg"
          >
            <path
              d="M1.5 9L5.5 5L1.5 1"
              stroke="#1C9E3C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="item-id">#{{ userData?.idNumber }}</p>
        </div>
      </div>
      <div class="item-header-right">
        <person-menu />
      </div>
    </div>
    <div class="request-item-content">
      <div class="item-content-header">
        <div class="content-item">
          <h4>Заявитель</h4>
          <span>{{ userData?.phoneNumber }}</span>
        </div>
        <div class="content-item">
          <h4>Категория нарушения</h4>
          <span>{{
            userData?.category == "spontaneous"
              ? "Стихийная свалка"
              : userData?.category == "ejectionCarbage"
              ? "Выброс мусора в неположенном месте"
              : userData?.category == "breedingFire"
              ? "Разведение огня в неположенном месте"
              : userData?.category == "industrialWsate"
              ? "Выброс промышленных стоков/мусора в реку"
              : userData?.category == "other"
              ? "Прочее"
              : userData?.category == "complaints"
              ? "Жалобы"
              : userData?.category == "cuttingDownTrees"
              ? "Вырубка деревьев"
              : "&#x334;"
          }}</span>
        </div>
        <div class="content-item">
          <h4>Время отправки</h4>
          <span>{{ userData?.receivedDate|getReceivedDate }}</span>
        </div>
        <div class="content-item item-select">
          <h4>Статус заявки</h4>
          <img
            src="@/assets/src/Icons/chevron-down.svg"
            :class="
              isRequestStatus === true
                ? 'active-request-svg'
                : 'deactive-request-svg'
            "
            class="item-dropdown-svg"
          />

          <v-app>
            <v-row
              @click.stop="showStatusRequest"
              justify="center"
              class="ma-2"
            >
              <v-col sm="6"
                ><v-select label="В обработке" :items="items"></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div class="content-item">
          <h4>Ответственное ведомство</h4>
          <span v-for="(user, idx) in userData?.department" :key="idx">{{
            user
          }}</span>
        </div>
        <div class="content-item">
          <h4>Ответственный сотрудник</h4>
          <span>{{ userData?.responsiblePerson }}</span>
        </div>
      </div>
      <div class="item-content-center">
        <div class="request-content-title">
          <h4>Описание</h4>
          <p>
            Какой-то не законопослушный человек решил выбросить мусор в
            неположенном месте. Но, я как АБСОЛЮТНО ЗАКОНОПОСЛУШНЫЙ гражданин
            заявляю вам об этом случае и прошу принять соответственные меры!
          </p>
        </div>
        <div class="request-content-date">
          <h4>Время на решение заявки</h4>
          <span>До 17.06.2022 14:37</span>
        </div>
      </div>
      <div class="item-content-footer">
        <div class="item-footer-images">
          <p>Файлы</p>
          <div
           
            class="fields-images"
          >
            <img :src="`http://192.168.10.16:5000/images/${closed_img}`" alt="" />
          </div>
        </div>
        <div class="location-request">

          <div v-if="isGoogleAddress == false" class="closed-address-text">
            <p>Местоположение случившегося нарушения</p>
            <div class="closed-address-content">
              <span
            >Ташкентская область, Бостанликский район</span
          >

          <img src="@/assets/src/Vector (4).png" alt="" />
            </div>
          
          </div>
          
          <div v-else class="closed-address-google">
            <iframe
            width="750"
            height="550"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            :src="`https://maps.google.com/maps?q='${latitude}','${longitude}+  '&hl=es;z=14&amp;output=embed`"
          >
          </iframe>
          </div>

          
          

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PersonMenu from "@/views/PersonMenu.vue";
export default {
  name: "closed-blog-item",
  components: { PersonMenu },
  data() {
    return {
      longitude: null,
      latitude: null,
      isGoogleAddress: false,
      request_item_id: null,
      items: ["Решена", "Ложная информация"],
      isRequestStatus: false,
      userData: null,
      closed_img: null
    };
  },
  mounted() {
    this.getRequestItem_id();
    this.getRequestItem();
    this.getUserGeolocation();
  },
  filters:{
    getReceivedDate(date){
      if(date){
        let prettyReceivedDate = date.split('T')
        return prettyReceivedDate[0]
      }
    }
  },
  methods: {
    getUserGeolocation() {
      if(this.longitude){
        this.$getLocation(this.longitude, this.latitude)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      }
      
    },
    setClosed_img(image){
      image.forEach(element => {
        // console.log(1, element)
        let image_url1 = element.split(':')
        if(image_url1[0] == 'C'){
          let image_url2 = element.split('\\')
          this.closed_img = image_url2[8]
          // console.log(2, image_url2)
        }
        else if(image_url1[1] == '80//images/AgACAgIAAxkBAAIFQmK9QWIzqdsrk62qmna0Kxy92NZGAAIkuzEbYUPwST9OwV_v5VlKAQADAgADeAADKQQ.jpg'){
          let image_url3 = element.split('/')
          this.closed_img = image_url3[3]
          // console.log(3, image_url3)
        }else{
          let image_url4 = element.split('/')
          this.closed_img = image_url4[3]
          // console.log(4, image_url4)
        }
        
      });
    },
    getRequestItem() {
      this.$api
        .get(`applications/${this.request_item_id}`)
        .then((response) => {
          if (response) {
            this.userData = response.data;
            this.longitude = response.data.long;
            this.latitude = response.data.lat;
            if(response.data.long > 0 && response.data.lat > 0){
              this.isGoogleAddress = true
            }
            else{
              this.isGoogleAddress = false
            }
            this.setClosed_img(response.data.documentPath)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showStatusRequest() {
      this.isRequestStatus = !this.isRequestStatus;
      // console.log(this.isRequestStatus)
    },
    deactiveImages() {
      this.isRequestStatus = false;
    },
    getRequestItem_id() {
      this.request_item_id = this.$route.params.id;
      // console.log(this.request_item_id)
    },
  },
};
</script>
<style>
.request-item-header .personal-keys {
  display: none;
}
</style>
