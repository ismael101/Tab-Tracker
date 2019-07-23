
<template>
  <v-layout id='register'>
    <v-flex xs6 offset-xs3>
        <h1>Register Here</h1>
        <form 
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
import Authentication from '../../services/Authentication.js'
export default {
    data(){
        return{
            email:'',
            password:'',
            error:null
        }
    },
    methods:{
        async register(){
        try {
        const response = await Authentication.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router({name:'songs'})

      } catch (error) {
        this.error = error.response.data.error
      }
        }
    }
}
</script>

<style scoped>
.error{
    color:red 
}
#register{
    margin-top: 200px
}
</style>
