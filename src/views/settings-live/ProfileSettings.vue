<template>
<div class="settings-container">
    <div class="settings-header">
        <div class="header-left-blog">
            <span>Настройки</span>
        </div>
        
        <person-menu/>
    </div>
    <div  class="settings-route">
        <router-link to="/user-settings">
        <button><img src="@/assets/src/svg-icons/Settings-staff.svg">
        <p>Пользователи системы</p>
        </button>
        </router-link>
    </div>
    <!-- <div v-else class="settings-route">
        <router-link to="/add-new-user">
        <button><img src="@/assets/src/svg-icons/Settings-staff.svg">
        <p>Добавить нового пользователя</p>
        </button>
        </router-link>
    </div> -->
    <div class="settings-content">
        <router-view/>
    </div>
</div>
</template>
<script>
import PersonMenu from '../PersonMenu.vue'

export default {
  components: { PersonMenu },
    name: 'settings-app',
    data(){
        return{
            isSettings: false
        }
    },
    mounted(){
        this.getSettings()
        // this.getProfil()
    },
    methods:{
        getSettings(){
            const routeName = this.$route.name;
            // console.log(routeName)
            if(routeName === 'user-settings'){
                this.isSettings = false
            } else if (routeName === 'user-setting-item') {
                this.isSettings = true
            }
        },
        
    },
    watch: {
        '$route.params': function (val) {
            this.getSettings();
            console.log(val)
        }
    }
}
</script>
<style>
.settings-header .personal-keys{
    display: none;  
}
</style>