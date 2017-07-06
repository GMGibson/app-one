<template>
  <li :key="title">     
    <div>      
      <img :src="urlToImage"/>              
      <div>
        <p id="sArticle-title">{{titleShort}}</p>        
        <button class="button is-danger" @click="remove">Remove</button>
        <button class="button is-success"@click="openSite">Read</button>
      </div>
    </div> 
    <hr>      
  </li>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  data () {
    return {
      OpenReader: false
    }
  },
  props: ['title','urlToImage','url'],
  methods: {
    ...mapActions({
      removeArticle: 'removeArticle'      
    }),
    remove() {
      const selection = {
        name: this.name,
        timeSaved : this.timeSaved,                
      }
      this.removeArticle(selection)
    },
    openSite() {      
      window.open(this.url)
    }       
  },
  computed: {
    titleShort: function () {
      return this.title.slice(0,20) + '...'
    }         
  }  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
a {
  text-decoration: none;
} 
img {
  max-height: 175px;
  max-width: 175px;
}
</style>
