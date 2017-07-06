<template>
  <div>
    <button class="button is-inverted" @click="loadNews">{{host}}</button>        
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {  
  props: ['host'],
  methods: {
    ...mapActions({
      initArticles: 'initArticles'
    }),
    loadNews() {      
      this.$http.get(`https://newsapi.org/v1/articles?source=${this.host}&sortBy=top&apiKey=446128dbd3ca45c289ea7d94426fe7dd`)
        .then(response => response.json())
        .then(data => {
          if (data) {
            const newArticles = data.articles
            this.initArticles(newArticles)            
          }          
        })
    }
  },  
}
</script>


<style scoped> 
  button {    
    color:crimson;
    font-size: 1.2em;
    background: white;
    font-variant: small-caps;    
  }
  button:hover {
    background: crimson;
    color: white;
    border: 1px solid black;
    border-radius: 2px;
  }
</style>
