<template>
  <div class="requests-container">
    <div class="requests-header">
      <div class="requests-header-left">
        <span>Заявки</span>
        <p>Заявки</p>
        <!-- <span>{{getSolvedRequests}}</span> -->
      </div>
      <div class="requests-header-right">
        <div class="request-search-input">
          <input type="text" placeholder="Введите номер заявки" />
          <img src="@/assets/src/svg-icons/search.svg" alt="" />
        </div>
        <div class="request-header-img">
          <person-menu />
        </div>
      </div>
    </div>
    <div class="requests-content">
      <div class="requests-content-header">
        <div class="requests-content-one">
          <label for="content-one-select">Ведомство</label>
          <img src="@/assets/src/Icons/chevron-down.svg" alt="" />
          <v-app>
            <v-row justify="center" class="ma-2">
              <v-col sm="6"
                ><v-select label="Все" :items="items"></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div class="requests-content-one">
          <label for="request-status">Статус заявки</label>
          <img src="@/assets/src/Icons/chevron-down.svg" alt="" />
          <v-app>
            <v-row justify="center" class="ma-2">
              <v-col sm="6"
                ><v-select label="Все" :items="items2"></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div class="requests-content-one">
          <label for="request-category">Категория нарушения</label>
          <img src="@/assets/src/Icons/chevron-down.svg" alt="" />
          <v-app>
            <v-row justify="center" class="ma-2">
              <v-col sm="6"
                ><v-select label="Все" :items="items2"></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div @click="showData" class="requests-content-two">
          <label for="request-date">Дата поступления заявки</label>
          <span>Выберите дату </span>
          <img src="@/assets/src/Icons/calendar.svg" alt="" />
          <v-app v-if="isData" class="data-picker">
            <v-row justify="center">
              <v-date-picker></v-date-picker>
            </v-row>
          </v-app>
        </div>
      </div>
      <div class="requests-content-content">
        <span class="request-table-name">Заявки</span>
        <div class="requests-table">
          <table>
            <hr />
            <tr>
              <th>Заявитель</th>
              <th>Категория нарушения</th>
              <th>Время отправки</th>
              <th>Статус заявки</th>
              <th>Ответвление ведомство</th>
              <th>Ответственный сотркдник</th>
            </tr>
            <hr />
            <router-link
              tag="tr"
              :to="`/closed-blog-item/${solved._id}`"
              v-for="(solved, idx) in paginationClosed"
              :key="idx"
              class="table-content"
            >
              <td>{{ solved.phoneNumber }}</td>
              <td>
                {{
                  solved?.category == "spontaneous"
                    ? "Стихийная свалка"
                    : solved?.category == "ejectionGarbage"
                    ? "Выброс мусора в неположенном месте"
                    : solved?.category == "breedingFire"
                    ? "Разведение огня в неположенном месте"
                    : solved?.category == "industrialWaste"
                    ? "Выброс промышленных стоков/мусора в реку"
                    : solved?.category == "other"
                    ? "Прочее"
                    : "Вырубка деревьев"
                }}
              </td>
              <td>{{ solved.lastDateOfSolving | getPrettyDate }}</td>
              <td class="td-item">
                {{ solved?.status == "solved" ? "Решено" : "Не решено" }}
              </td>
              <td class="solved-requests-td">
                <span
                  v-for="(department, idy) in solved.department"
                  :key="idy"
                  >{{ department }}</span
                >
              </td>
              <td>{{ solved.responsiblePerson }}</td>
            </router-link>
          </table>
        </div>
      </div>

      <div class="request-footer">
        <app-pagination
          @paginate="paginationClosedRequests"
          :data="closedRequests"
          :limit="3"
        />
      </div>
    </div>
  </div>
</template>
<script>
import PersonMenu from "../PersonMenu.vue";
import AppPagination from "@/components/common/AppPagination.vue";
export default {
  components: { PersonMenu, AppPagination },
  name: "closed-requests",
  data() {
    return {
      closedRequests: null,
      isData: false,
      prettyTime: null,
      paginationClosed: [],
      items: [
        "Инспекция по экологии",
        "Тоза Худуд",
        "Экопрокуратура",
        "Тур Полиция",
        "ТРЗ  <<Чарвак>>",
        "МВД",
        "Лесное хозяйство",
        "Комитет по автомобильным дорогам",
      ],
      items1: ["Решена", "Ложные"],
      items2: [
        "Стихийная свалка",
        "Скопления мусора",
        "Выброс мусора в неположенном месте",
        "Вырубка деревьев",
        "Разведение огня в неположенном месте",
        "Выброс промышленных стоков/мусора в реку",
      ],
    };
  },
  computed: {
    // getSolvedRequests(){
    //     let requests = this.$store?.getters && this.$store.getters?.getSolvedRequests && this.$store.getters.getSolvedRequests
    //     return requests
    // },
  },
  mounted() {
    this.getClosedRequests();
  },
  methods: {
    //     closedRequestData(data){
    //   this.list = data
    // },
    getClosedRequests() {
      console.log(66, this.$store.getters);
      let closed =
        this.$store?.getters &&
        this.$store.getters?.getSolvedRequests &&
        this.$store.getters.getSolvedRequests;
      if (closed) {
        this.closedRequests = closed;
        if (this.closedRequests) {
          this.paginationClosed = this.closedRequests.slice(0, 3);
        }
      }
    },
    showData() {
      this.isData = !this.isData;
      // console.log(this.isData)
    },
    paginationClosedRequests(data) {
      console.log(data);
      this.paginationClosed = data;
    },
  },
  filters: {
    getPrettyDate(data) {
      if (data) {
        let pretty = data.split("T");
        // console.log(pretty)
        return pretty[0];
      }
    },
  },
};
</script>
<style>
.request-header-img .personal-keys {
  display: none;
}
</style>
