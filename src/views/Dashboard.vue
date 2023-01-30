<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
        <span>Панел графиков</span>
        <person-menu />
    </div>

    <div v-if="can(['admin', 'moderator'])" class="dashboard-block-one">
        <div class="inner-flex-block">
             <div class="inner-block">

            <img src="@/assets/src/svg-icons/dashboard_avatar.svg" alt="">
            <div class="title-block">
                <span>Всего</span>
                <P class="title-text">{{applications.applications}}</P>
            </div>
        </div>
        <div class="inner-block">
            <img src="@/assets/src/svg-icons/dashboard_avatar.svg" alt="">
            <div class="title-block">
                <span>Новые заявки</span>

                <p>{{applications.newApplications}}</p>

            </div>
        </div>
        <div class="inner-block">
            <img src="/src/svg-icons/dashboard_avatar2.svg" alt="">
            <div class="title-block">
                <span>Заявки в обработке</span>

                <p>{{applications.applicationsOnProcess}}</p>

            </div>
        </div>




            <div class="inner-block-one">
            <img src="@/assets/src/svg-icons/dashboard_avatar3.svg" alt="">
            <div class="title-block-one">
                <span>Закрытие заявки</span>

                <p>{{applications.completedApplications}}</p>

            </div>
        </div>
        <div v-if="checkFire" class="inner-block-one dashboard-one">
            <img src="@/assets/src/svg-icons/dashboard_avatar2.svg" alt="">
            <div class="title-block-one">
                <span>Ложные заявки</span>

                <p>{{applications.falseApplications}}</p>

            </div>
        </div>
    

        <div class="inner-block-two">

            <img src="@/assets/src/svg-icons/dashboard_avatar4.svg" alt="">
            <div class="title-block-two">
                <span>Стихийная свалка</span>
                <p>{{applications.spontaneous}}</p>

            </div>
        </div>
        <div v-if="checkEjection" class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar5.svg" alt="">
            <div class="title-block-two">
                <span>Скопления мусора</span>

                <p>{{applications.clusterGarbage}}</p>

            </div>
        </div>
        <div v-if="checkGarbage" class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar6.svg" alt="">
            <div class="title-block-two">
                <span>Выброс мусора в неположённом месте</span>

                <p>{{applications.ejectionCarbage}}</p>

            </div>
        </div>
        <div v-if="checkCompanyRole" class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar7.svg" alt="">
            <div class="title-block-two">
                <span>Вырубка деревьев</span>

                <p>{{applications.cuttingDownTrees}}</p>
            </div>
        </div>
    
        <div   class="inner-block-three">

            <img class="block-img" src="@/assets/src/svg-icons/dashboard_avatar8.svg" alt="">
            <div class="title-block-three">
                <span class="title-span">Разведение огня в неположённом месте</span>
                <p>{{applications.breedingFire}}</p>

            </div>
        </div>
        <div v-if="checkIndustrial" class="inner-block-three">
            <img class="block-img-item" src="@/assets/src/svg-icons/dashboard_avatar9.svg" alt="">
            <div class="title-block-three">
                <span class="title-span">Выброс промишленных стоков/мусора в реку</span>

                <p>{{applications.industrialWaste}}</p>

            </div>
        </div>
        <div v-if="checkSpontan" class="inner-block-three">
            <img class="img-item-one" src="@/assets/src/svg-icons/dashboard_avatar2.svg" alt="">
            <div class="title-block-three">
                <span class="title-span-item">Прочее</span>

                <p>{{applications.other}}</p>

            </div>
        </div>
        </div>
        
    </div>
    
    <div v-if="can(['admin', 'moderator'])" class="dashboard-block-five">
        <div class="inner-table">
            <span>Поцент решения случаев</span>
            <div class="inner-table-block-one">
                <table cell-spacing="0" cellpadding="0">

                    <tr>
                        <th>Ведомство</th>
                        <th>Кол-во заявок</th>
                        <th>% решения случаев</th>
                    </tr>
                    <tr class="category-content-tr">
                        <td>Инспекция по экологии</td>
                        <td>{{applications.ecologyDepartment}}</td>
                        <td>{{applications && applications.solutions && applications.solutions.ecologySolutions}}</td>
                    </tr>

                </table>
            </div>
        </div>
        <div class="inner-table">
            <span>Среднее время обработки заявок ( за месяц )</span>
            <div class="inner-table-block-one">
                <table cell-spacing="0" cellpadding="0">

                    <tr>
                        <th>Ведомство</th>
                        <th>Среднее время обработки (нынешный месяц)</th>
                        <th>Среднее время обработки (прошлый месяц)</th>
                    </tr>
                    <tr>
                        <td>Инспекция по экологии</td>
                        <td>{{applications&& applications.stat && applications.stat.currentEcologyStat}}</td>
                        <td>{{applications && applications.stat && applications.stat.currentEcologyStat}}</td>
                    </tr>

                </table>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
  name: "dashboard-app",

  data() {
    return {
      applications: {},
      userDepartment: null,
      
      checker: false,
    };
  },
  computed: {
    checkCompanyRole(){
      let department = this.$store.getters?.getDepartmentRoles;
    //   console.log(this.userDepartment)
      this.$store.getters?.getCheckRoles && this.$store.getters.getCheckRoles?.cuttingDownTrees && this.$store.getters.getCheckRoles.cuttingDownTrees.forEach((element) => {
        if(element == department){
          this.checker = true
        }
        // console.log(this.checker)
      })
      return this.checker;
    },
    checkIndustrial(){
        let department = this.$store.getters?.getDepartmentRoles;
        this.$store.getters?.getCheckRoles && this.$store.getters.getCheckRoles?.industrialWaste && this.$store.getters.getCheckRoles.industrialWaste.forEach((element) => {
            if(element == department){
                this.checker =true
            }
        })
        return this.checker
    },
    checkEjection(){
        let department = this.$store.getters?.getDepartmentRoles;
        this.$store.getters?.getCheckRoles && this.$store.getters.getCheckRoles?.ejectionCarbage && this.$store.getters.getCheckRoles.ejectionCarbage.forEach((element) =>{
            if(element == department){
                this.checker = true
            }
        })
        return this.checker
    },
    checkSpontan(){
        let department = this.$store.getters?.getDepartmentRoles;
        this.$store.getters?.getCheckRoles && this.$store.getters.getCheckRoles?.spontaneous && this.$store.getters.getCheckRoles.spontaneous.forEach((element) => {
            if(element == department){
                this.checker = true
            }
        })
        return this.checker
    },
    checkFire(){
        let department = this.$store.getters?.getDepartmentRoles;
        this.$store.getters?.getCheckRoles && this.$store.getters.getCheckRoles?.breedingFire && this.$store.getters.getCheckRoles.breedingFire.forEach((element) => {
            if(element == department){
                this.checker = true
            }
        })
        return this.checker
    },
  checkGarbage(){
    let department = this.$store.getters?.getDepartmentRoles;
    this.$store.getters?.getCheckRoles && this.$store.getters.getCheckRoles?.clusterGarbage && this.$store.getters.getCheckRoles.clusterGarbage.forEach((element) => {
        if(element == department){
            this.checker = true
        }
    })
    return this.checker
  },
  },
  mounted() {
    this.getDashboardContent();
    this.getCurrentUser()
  },
  methods: {
    getCurrentUser(){
      this.$store.dispatch('getCurrentUsers',{
        data: 123
      })
      .then(response=>{
        console.log(response, 123)
      })
    },
    // checkCompanyRole(roleName) {
    //   // console.log(roleName);
    //   let checker = false;
    //   let department = this.$store.getters?.getDepartmentRoles;
    //   this.$store.getters?.getCheckRoles[roleName] &&
    //     this.$store.getters.getCheckRoles[roleName].forEach((element) => {
    //       element == department ? checker = true : checker = false;
    //     });
    //   return checker;
    // },
    
    getDashboardContent() {
      this.$api.get("dashboard").then(
        (response) => {
          this.applications = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
    },
    
  },
};
</script>

<style>

.dashboard-header .personal-keys {
  display: none;
}


</style>
