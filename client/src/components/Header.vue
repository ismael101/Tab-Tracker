<template>
    <v-toolbar fixed class='cyan'>
        <v-toolbar-title class='mr-4'>
            TabTracker
        </v-toolbar-title>
        <v-btn flat dark @click="navigate({name:'songs'})">Browse</v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if='!$store.state.isUserLoggedIn'>
            <v-btn @click="navigate({name:'login'})" flat dark>Login</v-btn>
            <v-btn @click="navigate({name:'register'})" flat dark>Signup</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name:'Header',
    methods:{
        navigate(route){
            this.$router.push(route)
        },
        logout(){
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
        }
    }
}
</script>

<style>

</style>
