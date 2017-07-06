<template>  
    <div>  
      <br>    
      <ul>
        <app-source v-for="source in sources" :host="source.host" :key="source.publishedAt"></app-source>
      </ul>
      <br>
    </div>  
</template>

<script>
import Source from './Source'
export default {
  data() {
    return {
     sources: [
       {host:'bbc-news'},
       {host:'ars-technica'},
       {host:'recode'},       
       {host:'polygon'},
       {host:'espn'},       
       {host:'buzzfeed'},
       {host:'cnn'}
     ] 
    }
  },
  components: {
    'app-source': Source
  }

}
</script>

<style scoped>    
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;    
  }
</style>
