import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    saved: [],              
    articles: [],
    selectedArticle: 0          
  },
  actions: {
    initArticles: ({commit}, articles) => {
      commit('SET_ARTICLES', articles)
    },
    addToShelf: ({commit}, selection) => {
      commit('ADD_ARTICLE_TO_SHELF', selection)
    },    
    removeArticle: ({commit}, article) => {
      commit('REMOVE_ARTICLE', article)
    },    
    loadShelf: ({commit}, articles) => {
      commit('LOAD_SHELF', articles)
    },
    nextArticle: ({commit}) => {
      commit('NEXT_ARTICLE')
    },
    previousArticle: ({commit}) => {
      commit('PREVIOUS_ARTICLE')
    }           
  },
  mutations: {
    'SET_ARTICLES' (state, articles) {
      state.articles = articles
    },
    'ADD_ARTICLE_TO_SHELF' (state, selection) {
      state.saved.push(selection)            
    },
    'LOAD_SHELF' (state, dbArticles) {      
      state.saved = dbArticles
    },
    'REMOVE_ARTICLE' (state, article) {        
      const record = state.saved.find(el => el.title == article.title)
      state.saved.splice(state.saved.indexOf(record),1)
    },
    'NEXT_ARTICLE' (state) {
      if (state.selectedArticle == state.articles.length -1) {
        return
      }
      state.selectedArticle ++;
    },
    'PREVIOUS_ARTICLE' (state) {
      if (state.selectedArticle == 0) {
        return
      }
      state.selectedArticle --;
    }
  },
  getters: {
    getSavedArticles: state => {
      return state.saved
    },
    getArticles: state => {
      return state.articles
    },
    getSelectedArticle: state => {
      return state.selectedArticle
    }    
  }
})
