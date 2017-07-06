<template>
    <b-dropdown v-model="listOpen"> 
      <a class="nav-item" slot="trigger">
            <span>Shelf</span>
            <b-icon icon="arrow_drop_down"></b-icon>
          </a>     
      <b-dropdown-option subheader>
        <div>
          <button class="button is-info" @click="saveData">Save</button>
          <button class="button is-info" @click="loadSaved">Load</button>
        </div>    
        <hr>   
      </b-dropdown-option>        
      <div  id="shelf">      
      <app-saved-article 
        v-for="article in this.$store.getters.getSavedArticles" 
        :key="article.url" 
        :title="article.title"       
        :urlToImage="article.urlToImage"
        :url="article.url"      
        >
      </app-saved-article>          
      </div>
    </b-dropdown>  
</template>

<script>
import Vue from 'vue'
import {mapActions} from 'vuex'
import store from '../store/store.js'
import SavedArticle from './SavedArticle'
export default {  
  data() {
    return {
      listOpen: true
    }
  },
  components: {
    'app-saved-article': SavedArticle
  },
  methods: {  
    ...mapActions({
      loadShelf: 'loadShelf'
    }),  
    saveData () {
      const articles = this.$store.getters.getSavedArticles
      Vue.http.put('data.json', articles)
        .then( this.$toast.open({
          message: 'Shelf Saved to Database',
          type: 'is-success'
        }))
    },
    loadSaved () {
      Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
          this.loadShelf(data)
        })
    }    
  }
}  
</script>

<style scoped>  
  #shelf {    
    height: 50vh;
    width: 250px;    
    overflow-y: scroll;
  }
</style>
