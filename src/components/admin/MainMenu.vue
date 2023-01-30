<template>
<div class="menu-container">
   <Sidebar/>
</div>
</template>
<script>
import Sidebar from './Sidebar.vue';
export default {
    name: 'main-menu',
    components:{
        Sidebar
    },
    data(){
        return{
            isActive: false,
            elem: null,

            beforeElem: null,

        }
    },
    mounted(){
        this.getBeforeClass();
    },
    methods:{
        menuActive(){
            this.isActive = !this.isActive
        //     if(this.isActive){
        //     this.elem = document.getElementById('request-elem')
            
        //      this.elem.classList.toggle("active-request-element")
        //     // console.log(this.isActive)    
        //     }
        //    else{
        //     this.elem = document.getElementById('request-elem')
        //     // console.log(this.isActive)   
        //    }
        },
        getBeforeClass(){
                this.beforeElem = document.getElementsByClassName('router-link-active')
        }
    }
}
</script>
<style>
.menu-container{
    width: 316px;
    background: #F4F5FA;
    height: calc(100% -50px);
    position: fixed;
}
</style>