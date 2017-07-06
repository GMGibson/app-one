<template>  
  <div id="hcontain">
    <header class="nav has-shadow">             
      <div class="nav-left" style="overflow: visible">                              
        <app-saved-list></app-saved-list>              
      </div>
      <div class="nav-center nav-item">
        <img id="logo" src="../assets/logo.svg"></img>
      </div>
      <div id="login" class="nav-item nav-right">        
        <p v-if="isLoggedIn">{{userName + ', you are logged in'}}</p>        
        <div v-else>
          <input type="text" placeholder="username">
          <input type="text" placeholder="password">                    
        </div>                
      </div>              
    </header>
    <div>
      <app-settings></app-settings>           
    </div>   
  </div>          
</template>

<script>
import Settings from './Settings'
import SavedList from './SavedList'

export default {
  name: 'header',
  data () {
    return {                 
      isLoggedIn: false,
      userName: 'Grant'
    }
  },
  components: {
    'app-saved-list': SavedList,
    'app-settings': Settings
  }
}
</script>

<style>  
input:focus {
  border: 1px solid black;
}
</style>
