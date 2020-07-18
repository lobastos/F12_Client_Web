<template>    
    <b-navbar class="has-shadow">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Sistema 1234
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <b-navbar-item href="#">
                    Ajuda
                </b-navbar-item>
                <div class="buttons">
                    <a class="button is-light">
                        Sair
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>

</style>