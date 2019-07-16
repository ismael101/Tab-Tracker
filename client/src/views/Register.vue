<template>
    <div>
        <h1>Register Component</h1>
        <input v-model='email' type='email' name='email' placeholder="Enter Email">
        <input v-model='password' type='password' name='password' placeholder="Enter Password">
        <button>Register</button>

    </div>
</template>

<script>
import Authentication from '../services/Authentication.js'
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async register(){
            const response = await Authentication.register({
                email:this.email,
                password:this.password
            })
            console.log(response.data)
        }
    }
}
</script>

<style>

</style>
