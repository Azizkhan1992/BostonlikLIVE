<template>
  <div @click="deactiveAllImg" class="requests-container">
    <div class="requests-header">
      <div class="requests-header-left">
        <span>Заявки</span>
        <p>Заявки</p>
        <!-- <span>{{this.paginationData}}</span> -->
      </div>
      <div class="requests-header-right">
        <div class="request-search-input">
          <input
            type="text"
            v-model="request_message"
            @keydown="getInputValue"
            @keypress="isNumber($event)"
            placeholder="Введите номер заявки"
          />
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
          <img
            :class="
              isActiveImg_one === true ? 'active-img-one' : 'deactive-img-one'
            "
            src="@/assets/src/Icons/chevron-down.svg"
            alt=""
          />
          <v-app>
            <v-row @click.stop="activateImg_one" justify="center" class="ma-2">
              <v-col sm="6"
                ><v-select
                  label="Выберите ведомство"
                  :items="getDepartments"
                  v-model="Departments"
                  @change="getRequestDepartment"
                ></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div class="requests-content-one">
          <label for="request-status">Статус заявки</label>
          <img
            :class="
              isActiveImg_two === true ? 'active-img-two' : 'deactive-img-two'
            "
            src="@/assets/src/Icons/chevron-down.svg"
            alt=""
          />
          <v-app>
            <v-row @click.stop="activeImg_two" justify="center" class="ma-2">
              <v-col sm="6"
                ><v-select
                  label="Все"
                  :items="getRequestsStatus"
                  v-model="requestStatus"
                  @change="getRequestStatus"
                ></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div class="requests-content-one">
          <label for="request-category">Категория нарушения</label>
          <img
            :class="
              isActiveImg_three === true
                ? 'active-img-three'
                : 'deactive-img-three'
            "
            src="@/assets/src/Icons/chevron-down.svg"
            alt=""
          />
          <v-app>
            <v-row @click.stop="activeImg_three" justify="center" class="ma-2">
              <v-col sm="6"
                ><v-select
                  label="Все"
                  :items="getRequestsCategories"
                  v-model="requestCategory"
                  @change="getRequestCategory"
                ></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div @click="showData" class="requests-content-two">
          <label for="request-date">Дата поступления заявки</label>
          <span>Выберите дату</span>
          <img src="@/assets/src/Icons/calendar.svg" alt="" />
          <!-- <input type="text" id="request-date"> -->
          <v-app v-if="isData" class="data-picker">
            <v-row justify="center">
              <v-date-picker
                color="green"
                header-color="primary"
                v-model="picker"
                @change="getRequestData"
              ></v-date-picker>
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
              <th>Ответственный сотрудник</th>
            </tr>
            <hr />
            <router-link
              tag="tr"
              :to="`/request-blog-item/${now._id}`"
              v-for="(now, idx) in list"
              :key="idx"
              class="table-content"
            >
              <td>{{ now.phoneNumber }}</td>
              <td>
                {{
                  now?.category == "spontaneous"
                    ? "Стихийная свалка"
                    : now?.category == "ejectionGarbage"
                    ? "Выброс мусора в неположенном месте"
                    : now?.category == "breedingFire"
                    ? "Разведение огня в неположенном месте"
                    : now?.category == "industrialWaste"
                    ? "Выброс промышленных стоков/мусора в реку"
                    : now?.category == "other"
                    ? "Прочее"
                    : "Вырубка деревьев"
                }}
              </td>
              <td>{{ now.lastDateOfSolving | requestFilter }}</td>
              <td class="td-item">
                {{ now?.status == "timeOver" ? "Старая" : "Новая" }}
              </td>
              <div tag="td" class="department-item">
                <td
                  v-for="(depart, idy) in now.department"
                  :key="idy"
                  class="department"
                >
                  {{ depart }}
                </td>
              </div>

              <td>{{ now.name }}</td>
            </router-link>
          </table>
        </div>
      </div>

      <div class="request-footer">
        <app-pagination
          @paginate="requestPaginationData"
          :data="news"
          :limit="2"
        ></app-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import PersonMenu from "../PersonMenu.vue";
import AppPagination from "@/components/common/AppPagination";
export default {
  components: { PersonMenu, AppPagination },
  name: "request-blog",
  data() {
    return {
      news: null,
      list: [],
      request_message: null,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      isData: false,
      isActiveImg_one: false,
      isActiveImg_two: false,
      isActiveImg_three: false,
      Departments: null,
      requestStatus: null,
      requestCategory: null,
    };
  },
  created() {
    this.getRequestData();
  },
  computed: {
    getRequestsNews() {
      return (
        this.$store?.getters &&
        this.$store.getters?.getRequestsNews &&
        this.$store.getters.getRequestsNews
      );
    },
    getDepartments() {
      const request_departments =
        this.$store?.getters &&
        this.$store.getters?.getRequestDepartments &&
        this.$store.getters.getRequestDepartments;
      return request_departments;
    },
    getRequestsStatus() {
      const requests_status =
        this.$store?.getters &&
        this.$store.getters?.getRequestStatus &&
        this.$store.getters.getRequestStatus;
      return requests_status;
    },
    getRequestsCategories() {
      const request_category =
        this.$store?.getters &&
        this.$store.getters?.getRequestCategories &&
        this.$store.getters.getRequestCategories;
      return request_category;
    },
  },

  methods: {
    requestPaginationData(data) {
      this.list = data;
    },
    getInputValue(e) {
      console.log(e);
      if (this.request_message.length >= 2) {
        setTimeout(() => {
          this.$store
            .dispatch("getRequestInputValue", {
              idNumber: this.request_message,
            })
            .then((response) => {
              // console.log(response)
              this.news = response.data;
            });
        }, 1000);
      }
    },
    isNumber(evt) {
      // console.log(evt)
      const charCode = evt.which ? evt.which : evt.keyCode;
      // console.log(charCode ==46)
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      }
    },
    getRequestData() {
      this.$store
        .dispatch("getRequestData", {
          data: this.picker,
        })
        .then((response) => {
          this.news = response.data;
          this.list = this.news.slice(0, 2);
          console.log(this.news);
        });
    },
    getRequestDepartment() {
      this.$store
        .dispatch("getRequestDepartment", {
          deparment: this.Departments,
        })
        .then((response) => {
          this.news = response.data;
          // console.log(this.news)
        });
    },
    getRequestStatus() {
      this.$store
        .dispatch("getRequestStatus", {
          status: this.requestStatus,
        })
        .then((response) => {
          this.news = response.data;
          console.log(this.news);
        });
    },
    getRequestCategory() {
      this.$store
        .dispatch("getRequestCategories", {
          category: this.requestCategory,
        })
        .then((response) => {
          this.news = response.data;
        });
    },

    activateImg_one() {
      this.isActiveImg_one = !this.isActiveImg_one;
    },
    activeImg_two() {
      this.isActiveImg_two = !this.isActiveImg_two;
    },
    activeImg_three() {
      this.isActiveImg_three = !this.isActiveImg_three;
    },
    deactiveAllImg() {
      (this.isActiveImg_one = false),
        (this.isActiveImg_two = false),
        (this.isActiveImg_three = false);
    },
    showData() {
      this.isData = !this.isData;
    },
    setPaginationData(data) {
      this.list = data;
    },
  },
  filters: {
    requestFilter(data) {
      let filteredDate = data.split("T");
      return filteredDate[0];
    },
  },
};
</script>
<style>
.request-header-img .personal-keys {
  display: none;
}
</style>
