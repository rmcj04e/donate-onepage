<template>
  <div id="app">

    <b-navbar toggleable="sm" fixed="top" variant="dark" type="dark">
       <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">{{title}}</b-navbar-brand>
         <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav>
        <b-nav-item to="/">Главная</b-nav-item>        
        <b-nav-item to="/donate">Привелегии</b-nav-item>
        <b-nav-item to="/rules">Правила</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
      </b-navbar> 

      <b-jumbotron id="mainjumbo">
      <b-container fluid="sm">
   <router-view />
      </b-container>
      </b-jumbotron>
  </div>
</template>

<script>
export default{
  name:"app",
  data(){
    return {
      title:"RMCJ Minecraft Server"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
#mainjumbo{
  background:rgba(0,0,0,0.6);
  margin-top: 3rem;
}
</style>
