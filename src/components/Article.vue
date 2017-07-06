<template>
  <div v-if="index === this.$store.getters.getSelectedArticle">
    <div class="card">      
      <figure class="image">
        <img :src="urlToImage"></image>
        <div class="is-overlay image-info">          
          <button class="button fa fa-arrow-circle-left" @click="prevArticle"></button>          
          <button class="button fa fa-arrow-circle-right" @click="nextArticle"></button>
        </div>
        <div class="panel-block">
          <h1>{{title}}</h1>              
        </div>
      </figure>       
      <button class="button" @click="saveArticle">Save</button>  
      <button class="button" @click="openSite">Read</button>
    </div>    
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import store from '../store/store.js'
export default {
  props: ['title', 'urlToImage', 'url', 'id', 'index'],
  methods: {        
    ...mapActions({
      addToShelf: 'addToShelf',
      prevArticle: 'previousArticle',
      nextArticle: 'nextArticle'         
    }),
    saveArticle() {
      const dataToSave = this.$store.getters.getArticles.find(el => el.title === this.title)      
      this.addToShelf(dataToSave)
      this.$toast.open({
        message: 'Article Added To Your Shelf'        
      })
    },
    openSite() {      
      window.open(this.url)
    }  
  }  
}
</script>

<style scoped>
.image-info {    
  height: 100%;  
  display: flex;  
  justify-content: space-between;  
}
.image-info > button {
  height: 100%;
  width: 10%;
  background: rgba(0, 0, 0, .2);   
}
figure {  
  height: 80vh;  
}
.card {
  overflow: hidden;
}
h1 {
  margin: auto;
  position: absolute;
  top: 0;  
  color: black;
  font-size: 1.4em;
  background: rgba(255, 255, 255, .7);
  
}
.panel-block {  
  justify-content: center;    
}
img {
  height: 100%;
  width: 100%;  
}
</style>
