<template>
  <div class="sentenses-blog-container">
    <div class="sentenses-blog-header">
      <div class="sentenses-item-left">
        <h1>Заявки</h1>
        <div class="sentenses-blog-route">
          <span>Заявки</span>
          <img src="@/assets/src/Vector (1).png" alt="" />
          <router-link tag="span" to="/opened-requests" class="item-route-span"
            >Открытые заявки</router-link
          >
          <img src="@/assets/src/Vector (1).png" alt="" />
          <span>{{ sentense_id }}</span>
        </div>
      </div>
      <div class="sentenses-item-right">
        <person-menu/>
      </div>
    </div>
    <div class="sentenses-blog-content">
        <div class="sentenses-content-header">
            <div class="sentenses-blog-one item-row">
            <h3>Заявитель</h3>
            <span>{{sentense_data?.name}}</span>
        </div>
        <div class="sentenses-blog-two item-row">
            <h3>Категория нарушения</h3>
            <span>{{sentense_data?.category}}</span>
        </div>
        <div class="sentenses-blog-three item-row">
            <h3>Время отправки</h3>
            <span>-</span>
        </div>
        </div>
        
        <div class="sentenses-blog-four">
            <h3>Описание</h3>
            <span>{{sentense_data?.description}}</span>
        </div>
    </div>
  </div>
</template>
<script>
import PersonMenu from '../PersonMenu.vue';
export default {
  components: { PersonMenu },
  name: "sentenses-blog-item",
  data() {
    return {
      sentense_id: this.$route.params.id,
      sentense_data: null
    };
  },
  mounted(){
    this.getSentensesItem()
  },
  methods:{
    getSentensesItem(){
        this.$api.get(`complaintAndProposals/${this.sentense_id}`)
        .then(response =>{
            this.sentense_data = response.data
            console.log(response.data)
        })
    }
  }
};
</script>
<style>
.sentenses-blog-container .sentenses-blog-header .sentenses-item-right .personal-keys {
  display: none;
}


</style>
