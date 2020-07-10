<template>
    <div id="app">
        <div class="w3-bar w3-border w3-light-grey">
            <a href="/" class="w3-bar-item w3-button w3-indigo">Sistema F12</a>
            <a href="/" class="w3-bar-item w3-button">Link 1</a>
            <a href="/" class="w3-bar-item w3-button w3-right">Sair</a>
            <a href="/" class="w3-bar-item w3-button w3-right">Usuário</a>
        </div>
        <div class="w3-sidebar w3-bar-block" style="width:25%">
            <h3 class="w3-bar-item">Olá, Fulano</h3>
              <router-link to="/home" class="w3-bar-item w3-button">Home</router-link>
              <router-link to="/funcionarios" class="w3-bar-item w3-button">Funcionários</router-link>
              <router-link to="/produtos" class="w3-bar-item w3-button">Produtos</router-link>
              <router-link to="/representantes" class="w3-bar-item w3-button">Representantes</router-link>
              <router-link to="/clientes" class="w3-bar-item w3-button">Clientes</router-link>
              <router-link to="/about" class="w3-bar-item w3-button">Sobre</router-link>

        </div>
        <div style="margin-left:25%">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
