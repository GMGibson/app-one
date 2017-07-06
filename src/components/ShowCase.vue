<template>
  <div>          
    <app-article 
      v-for="(article, i) in this.$store.getters.getArticles" 
      :title="article.title"
      :urlToImage="article.urlToImage"            
      :url="article.url"
      :index="i"      
      >
    </app-article>        
  </div>
</template>

<script>
import store from '../store/store.js'
import Article from './Article.vue'

export default {   
  components: {
    'app-article': Article
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {        
    height: 80vh;
    width: 80vw;
    text-align: center;          
    margin: auto;
  }
</style>
