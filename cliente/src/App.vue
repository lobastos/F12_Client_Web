<template>
    <div>
        <header>
        </header>
        <nav>
            <NavBar />
        </nav>
        <div class="columns" id="Content"> 
            <aside class="column is-2 aside is-fullheight">
                <MenuBar />
            </aside>
            <section class="column is-10">
                <div class="container is-widescreen">
                    <router-view></router-view>
                </div>
                
            </section>
        </div>
        
        
        <footer>

        </footer>
        

        
        <!-- <div class="w3-bar w3-border w3-light-grey">
            <a href="/" class="w3-bar-item w3-button w3-indigo">Sistema F12</a>
            <a href="/" class="w3-bar-item w3-button">Link 1</a>
            <a href="/" class="w3-bar-item w3-button w3-right">Sair</a>
            <a href="/" class="w3-bar-item w3-button w3-right">Usuário</a>
        </div>
        <div class="w3-sidebar w3-bar-block" style="width:15%">
            <h3 class="w3-bar-item">Olá, Fulano</h3>
              <router-link to="/home" class="w3-bar-item w3-button">Home</router-link>
              <router-link to="/funcionarios" class="w3-bar-item w3-button">Funcionários</router-link>
              <router-link to="/produtos" class="w3-bar-item w3-button">Produtos</router-link>
              <router-link to="/representantes" class="w3-bar-item w3-button">Representantes</router-link>
              <router-link to="/clientes" class="w3-bar-item w3-button">Clientes</router-link>
              <router-link to="/about" class="w3-bar-item w3-button">Sobre</router-link>
              <router-link to="/css-scss" class="w3-bar-item w3-button">Exemplos SCSS</router-link>

        </div>
        
        <div style="margin-left:15%">-->
        <!-- </div> -->
    </div>
</template>

<script>
import NavBar from './components/NavBar'
import MenuBar from './components/MenuBar'

export default {
    name: "App",
    components: {
        NavBar, 
        MenuBar
    },
    props: {
        source: String
    },
    
    created() {
        this.$vuetify.theme.dark = true;
    }
};
</script>

<style>
#app {
    font-family: Roboto, sans-serif;
    margin-top: 0px;
    /* -webkit-font-smoothing: antialiased;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  */
}
#Content{
    margin: 0px 10px 0px 10px;
}
</style>
