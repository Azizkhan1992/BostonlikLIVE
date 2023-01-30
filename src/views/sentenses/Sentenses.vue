<template>
    <div class="sentenses-container">
        <div class="sentenses-header">
            <div class="sentenses-header-left">
                <h1>Жалобы и предложения</h1>
                <span>Жалобы и предложения</span>
            </div>
            <person-menu/>
        </div>
        <div class="sentenses-content">
            <div class="sentenses-content-header">
                <div class="sentenses-content-one one">

                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <v-app>
            <v-row  justify="center" class="ma-2">
              <v-col sm="6"
              
                ><v-select  label="Все" :items="items"></v-select
              ></v-col>
            </v-row>
          </v-app>
            </div>
            <div class="sentenses-content-one two">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <v-app>
            <v-row  justify="center" class="ma-2">
              <v-col sm="6"
              
                ><v-select  label="Предложения" :items="items1"></v-select
              ></v-col>
            </v-row>
          </v-app>
            </div>
            <div class="sentenses-content-one three">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <v-app>
            <v-row  justify="center" class="ma-2">
              <v-col sm="6"
              
                ><v-select  label="Год" :items="items2"></v-select
              ></v-col>
            </v-row>
          </v-app>
            </div>
            <div class="sentenses-content-one four">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <v-app>
            <v-row  justify="center" class="ma-2">
              <v-col sm="6"
              
                ><v-select  label="Месяц" :items="items2"></v-select
              ></v-col>
            </v-row>
          </v-app>
            </div>
            </div>


            <div class="sentenses-content-content">
                <table>
                    <tr class="table-header">
                        <th class="th-one">ФИО Заявителя</th>
                        <th class="th-two two">номер телефона</th>
                        <th class="th-two">Категория</th>
                        <th class="th-two">Статус</th>
                    </tr>
                    <router-link tag="tr" :to="`/sentenses-blog-item/${sentense._id}`" v-for="(sentense, idx) in sentenses_list" :key="idx" class="table-content">
                        <td class="td-one">{{sentense.name}}</td>
                        <td class="td-two">{{sentense.phoneNumber}}</td>
                        <td class="td-two">{{sentense?.category == "Proposals" ? "Предложения" :sentense?.category == "" ? "-" :  "Жалоба"}}</td>
                        <td class="td-two two">{{sentense?.status == "unread" ? "Непрочитано" : "Прочитано"}}</td>
                    </router-link>
                </table>
            </div>
            <div class="sentenses-footer">
                <app-pagination :data="sentenses" :limit="3" @paginate="sentensesPaginationData"/>
            </div>
        </div>
    </div>
</template>
<script>
import PersonMenu from '../PersonMenu.vue'
import AppPagination from '@/components/common/AppPagination.vue'
export default {
  components: { PersonMenu, AppPagination },
    name: 'sentense-app',
    data(){
        return{
            sentenses: null,
            sentenses_list: [],
            items: ["Инспекция по экологии", "Тоза Худуд", "Экопрокуратура", "Тур Полиция", "ТРЗ  <<Чарвак>>", "МВД", "Лесное хозяйство", "Комитет по автомобильным дорогам"],
            items1: ["Решена", "Ложные"],
            items2: ["Январ", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сунтябр", "Октябр", "Ноябр", "Декабр"],
        }
    },
    mounted(){
        this.getSentenses()
    },
    methods:{
        getSentenses(){
            this.$api.get('complaintAndProposals')
            .then(response =>{
                this.sentenses = response.data
                
                this.sentenses_list = this.sentenses.slice(0, 3);
                console.log(typeof(this.sentenses))
            })
        },
        sentensesPaginationData(data){
            this.sentenses_list = data
        }
    }
}
</script>
<style>
.sentenses-header .personal-keys{
    display: none;  
}



</style>