<template>
<div class="login-container">
    <div class="login-left-content">
         <img class="login-header-img" src="@/assets/src/Icons/left-icon.svg" alt="">
         <div class="left-center">
            <div class="left-header">
                 <span class="left-header-span">Информационная система по экологическому мониторингу раёна Бостанлыка</span>
            </div>
           <div class="login-form">
            <div class="login-input">
                <label for="item-input">Логин</label>

                <input class="item-input" type="text" v-model="user.name" placeholder="введите логин">
            </div>
            <div class="login-input">
                <label for="">Пароль</label>
                <input class="item-input" type="text" v-model="user.password" placeholder="введите парол">
            </div>
            <button class="left-btn" @click="login"><p>вход</p></button>

           </div>
           <div class="left-footer">
            <span>Разработка сайта:</span>
            <img :src="`./src/DAC site logo 1.png`" alt="">
           </div>
         </div>    
    </div>
    <div class="login-right-content">
        <img src="@/assets/src/Icons/log-page.svg" alt="">
    </div>
</div>
</template>
<script>

import TokenService from '@/services/TokenService'
// import setAuthHeader from '@/utils/setAuthHeader'
export default {
    name: 'login-app',
    data(){
        return{
            user: {
                name: 'akobir1605',
                password: 'kimdir123'
            }
        }
    },
    
    methods:{
        login(){
             this.$api.post('login',{
                login: this.user.name,
                password: this.user.password
            })
            .then(response=> {
                // console.log(response)
                if (response?.data) {
                    // console.log(response.data)
                    TokenService.saveToken(response.data?.token)
                    // setAuthHeader(response.data?.token)
                    this.$router.push('/dashboard')
                }
            },error=> {console.log(error)})
        },
        
    }

}
</script>
<style>


</style>