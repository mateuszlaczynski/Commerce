<template>
    <div style="text-align:center">
        <h1>Log in</h1>

        <form @submit.prevent="submitForm" class="log-box">
            <h3>Username:</h3>
            <input class="log-input" type="text" v-model="username">
            <h3>Password:</h3>
            <input class="log-input" type="password" v-model="password">
            <button class="button-input" style="margin-top:20px; width: 210px; height:30px">Log in</button>
            <button class="button-success" style="margin-top:5px; width: 210px;
             height:30px; padding:0px;
             border: none; color: white;"><router-link to="/sign-up">Sign up</router-link></button>
        </form>
            <div v-if="errors.length">
                <b><p class="error-text" v-for="error in errors" :key="error">{{error}}</p></b>
            </div>
    </div> 
</template>

<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data() {
        return {
            username:'',
            password:'',
            errors:[]
        }
    },
    methods: {
        submitForm() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            const formData = {
                username: this.username,
                password: this.password
            }
            axios.post("/api/v1/token/login/", formData)
                .then(response => {
                    const token = response.data.auth_token
                    this.$store.commit('setToken', token)
                    
                    axios.defaults.headers.common["Authorization"] = "Token " + token
                    localStorage.setItem("token", token)
                    const toPath = this.$route.query.to || '/cart'
                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else {
                        this.errors.push('Something went wrong. Please try again')
                        
                        console.log(JSON.stringify(error))
                    }
                })
        }
    },
    mounted() {
        document.title = "Log In"
    }
}
</script>
