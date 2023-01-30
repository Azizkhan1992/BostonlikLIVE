<template>
  <div>
    <router-link tag="span" to="/${this.routes}">Настройки</router-link>
    <img src="@/assets/src/Vector (1).png" alt="" />
    <p>Пользователи системы</p>
  </div>
</template>
<script>
export default {
    name: 'app-breadcrumbs',
    data(){
        return{
            routes: null
        }
    },
    props:{
        pageRoute: {
            type: Array,
            default: ()=> []
        }
    },
    mounted(){
        this.setPageRoute()
    },
    methods:{
        setPageRoute(){
            // console.log(this.pageRoute)
            if(this.pageRoute){
                this.routes = this.pageRoute
                console.log(this.routes)
            }
        }
    },
    // watch:{
    //      pageRoute: function (val) {
    //         console.log(val)
    //         this.routes()
    //     }
    // }
}
</script>
