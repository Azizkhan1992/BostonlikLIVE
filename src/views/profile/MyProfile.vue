<template>
    <div class="my-profile-container">
        <div class="my-profil-header">
            
                <h2>Мой профиль</h2>
                <person-menu/>
        </div>
        <div class="my-profil-content">
            <div class="profil-content-header">
                <div class="my-profil-left">
                <div class="my-login my-profil-form">
                    <h4>Логин:</h4>
                    <span>{{myData?.login}}</span>
                </div>
                <div class="my-account my-profil-form">
                    <h4>Дата создания аккаунта:</h4>
                    <span>{{myData?.createdDate|myProfilFilter}}</span>
                </div>
                <div class="my-department my-profil-form">
                    <h4>Ведомство</h4>
                    <span>{{myData?.department}}</span>
                </div>
            </div>
            <div class="my-profil-right">
                <img src="@/assets/src/Icons/profil-icon.svg" alt="">
            </div>
            </div>
            
            <div class="my-profil-footer">
                <div class="my-profil-input">
                    <div class="input-left profil">
                        <div class="my-lastname my-row-one">
                            <label for="lastname-input">Фамилия</label>
                            <input type="text" id="lastname-input" v-model="mySendData.lastName" placeholder="Фамилия">
                        </div>
                        <div class="my-firstname my-row-one">
                            <label for="firstname-input">Имя</label>
                            <input type="text" id="firstname-input" v-model="mySendData.firstName" placeholder="Имя"> 
                        </div>
                        <div class="my-patronimic my-row-one">
                            <label for="patronimic-input">Отчество</label>
                            <input type="text" id="patronimic-input" v-model="mySendData.middleName" placeholder="Отчество">
                        </div>
                    </div>
                    <div class="input-right profil">
                        <div class="my-phone-number my-row-one">
                            <label for="phone-input">Номер телефона</label>
                            <input type="text" id="phone-input" v-model="mySendData.phoneNumber" placeholder="+998">
                        </div>
                        <div class="my-email my-row-one">
                            <label for="email-input">Эл. адрес</label>
                            <input type="text" id="email-input" v-model="mySendData.email" placeholder="Email">
                        </div>
                        <div class="my-password my-row-one">
                            <label for="password-input">Пароль</label>
                            <input type="text" id="password-input" v-model="mySendData.password" placeholder="Пароль">
                        </div>
                    </div>
                    <div class="my-profil-btn profil">
                        <button class="my-profil-exit">Отмена</button>
                        <button class="my-profil-save" @click="sendMyData">Сохранить</button>
                    </div>
                </div>
                <div class="my-input-img">
                    <div class="image-input">
                        <label for="my-input-image">
                            <i aria-hidden="true">Прикрепить фото</i>
                            <img src="@/assets/src/Vector (3).png" alt="">
                        </label>
                        <input type="file" id="my-input-image" @change="setProfile_img">
                    </div>
                    <div class="image-shower">
                        <img class="my-own-image" src="@/assets/src/image 5.png" alt="">
                        <button>
                            <img src="@/assets/src/Icons/Vector01.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PersonMenu from '../PersonMenu.vue'
export default{
  components: { PersonMenu },
    name: 'my-profil',
    data(){
        return{
            myData: null,
            mySendData: {
                lastName: null,
                firstName: null,
                middleName: null,
                email: null,
                password: null,
                phoneNumber: null,
                profile_img: null
            },
            isMyData: false
        }
    },
    mounted(){
        this.getMyData()
        // this.sendMyData()
    },
    computed:{
    },
    filters:{
      myProfilFilter(data){
        if(data){
            let prettyDate = data.split('T')
            return prettyDate[0]
        }
        
      }  
    },
    methods:{
        getMyData(){
            this.$api.get('currentUser')
            .then(response =>{
                this.myData = response.data.user
                // console.log(response.data.user)
            }).catch(error => {console.log(error)})
        },
        setProfile_img(e){
            this.mySendData.profile_img = e.target.value
            // console.log(this.mySendData.profile_img)
        },
        sendMyData(){
            const image = this.mySendData.profile_img
            this.mySendData.profile_img = image && Array.isArray(image) && image.length > 0 ? image[0]:null
            const formdata = new FormData()

            for(let item in this.mySendData){
                const elem = this.mySendData[item]
                if(Array.isArray(elem)){
                    for(let i=0; i<elem.length; i++){
                        formdata.append(`${item}[]`, elem[i])
                    }
                }else{
                    formdata.append(item, elem)
                }
                this.isMyData = true
            }
            if(this.isMyData === true){
                this.addMyData(formdata)
            }   
            
            // let data = new FormData()
            // this.$api.post('profile', this.mySendData)
            // .then(response =>{
            //     console.log(response.data)
            // }).catch(error => {console.log(error)})
        },
        addMyData(formdata){
            return this.$api.post('profile', formdata)
            .then(response=>{
                console.log(response)
            })
        }
    }
}
</script>
<style>
.my-profil-header .personal-keys{
    display: none;  
}
    



.my-profile-container{
    width: 100%;
    /* display: flex; */
}
.my-profile-container .my-profil-header{
    display: flex;
    width: 100%;
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 15px;
}
.my-profil-header h2{
    display: block;
    margin-left: 25px;
    font-size: 2rem;
    font-weight: 700;
    color: #1E1920;
}
.my-profil-header img{
    position: absolute;
    right: 30px;
}
.my-profile-container .my-profil-content{
    width: 97%;
    background: #FFFFFF;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 25px;
    border-radius: 10px;
}
.my-profil-content .profil-content-header{
    width: 100%;
    display: flex;
    flex: 0 0 auto;
}
.profil-content-header .my-profil-left{
    width: 50%;
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    margin-top: 53px;
    margin-left: 50px;
}
.my-profil-left .my-profil-form{
    width: 33%;
}
.my-profil-form h4{
    font-size: 1rem;
    font-weight: 700;
}
.my-profil-form span{
    font-size: 1rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
}
.my-profil-left .my-account{
    margin-left: 25px;
}
.profil-content-header .my-profil-right{
    width: 50%;
    margin-top: 53px;
    margin-left: 15px;
}
.my-profil-right img{
    display: block;
    width: 90%;
    align-self: center;
}
.my-profil-content .my-profil-footer{
    margin-top: 25px;
    margin-left: 50px;
    width: 100%;
    display: flex;
    flex: 0 0 auto;
}
.my-profil-footer .my-profil-input{
    width: 64%;
    min-width: 150px;
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
}
.my-profil-input .input-left{
    width: 32%;
}
.my-profil-input .input-right{
    width: 32%;
    /* margin-left: 25px; */
}

.my-profil-input .my-row-one{
    position: relative;
    width: 100%;
    margin-top: 50px;
}
.my-row-one label{
    display: block;
    position: absolute;
    top: -35px;
    font-size: 1rem;
    font-weight: 700;
}
.my-row-one input{
    display: block;
    width: 75%;
    height: 35px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 10px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1rem;
    font-weight: 600;
}
.my-row-one input:hover{
    border: 2px solid #1C9E3C;
}
.my-profil-input .my-profil-btn{
    width: 50%;
    min-width: 100px;
    display: flex;
    padding-top: 15px;
    box-sizing: border-box;
    padding-bottom: 15px;
    box-sizing: border-box;
}
.my-profil-btn button{
    display: block;
    width: 50%;
    min-width: 25px;
    /* margin-top: 25px; */
    height: 50px;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 700;
}

.my-profil-btn .my-profil-exit{
    background: rgba(244, 33, 45, 0.48);
    margin-right: 25px;
}
.my-profil-btn .my-profil-exit:hover{
    background: #FFFFFF;
    border: 2px solid rgba(244, 33, 45, 0.48);
    color: rgba(244, 33, 45, 0.48);
}
.my-profil-btn .my-profil-save{
    background: #1C9E3C;
    margin-right: 25px;
}
.my-profil-btn .my-profil-save:hover{
    background: #FFFFFF;
    border: 2px solid #1C9E3C;
    color: #1C9E3C;
}
.my-input-img{
    width: 32%;
    display: flex;
    margin-top: 25px;
    justify-content: center;
}
.my-input-img .image-input{
    width: 45%;
    align-items: center;
    justify-content: center;
    min-width: 75px;
}
.my-input-img .image-shower{
    width: 25%;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
}
.my-input-img .image-input label{
    display: block;
    width: 75%;
    height: 45%;
    min-width: 75px;
    border: 2px dashed #ccc;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    color: #ccc;
    align-items: center;
    justify-content: center;
    padding-top: 25px;
    box-sizing: border-box;
}
.image-input label i{
    position: absolute;
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 600;
    margin-left: 15px;
    bottom: 25px;
}
.image-input label img{
    display: block;
    width: auto;
    margin: auto;
}

.image-input input{
    display: none;
}
.image-shower .my-own-image{
    display: block;
    min-width: 50px;
    margin-top: 5px;
}
.my-input-img .image-shower button{
    display: block;
    margin-top: 15px;
    margin-left: 10px;
    align-self: flex-start;
}

.my-profil-input div.profil{
    margin: auto;
}
</style>