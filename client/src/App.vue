<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <main>
    <v-container fluid>
    <router-view/>
    </v-container>
    </main>
    </v-app>
    

  </div>
</template>
<script>
import Header from './components/Header'

export default{
  name:'App',
  components:{
    Header
  },

}



</script>




<style>
#app {
  font-family: Courier, Monaco, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
