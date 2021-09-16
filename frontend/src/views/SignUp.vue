<template>
    <div style="text-align:center">
        <h1>Sign up</h1>

        <form @submit.prevent="submitForm" class="log-box">
            <h3>Username:</h3>
            <input class="log-input" type="text" v-model="username">
            <h3>Password:</h3>
            <input class="log-input" type="password" v-model="password">
            <h3>Repeat password:</h3>
            <input class="log-input" type="password" v-model="password2">
            <button class="button-input" style="margin-top:20px; width: 210px; height:30px">Submit</button>
            <button class="button-success" style="margin-top:5px; width: 210px;
             height:30px; padding:0px;
             border: none; color: white;"><router-link to="/log-in">Log in</router-link></button>
        </form>
            <div v-if="errors.length">
                <b><p class="error-text" v-for="error in errors" :key="error">{{error}}</p></b>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            errors: []
        }
    },
    mounted(){
        document.title = 'Sign Up'
    },
    methods: {
        submitForm() {
            this.errors = []
            if (this.username === '') {
                this.errors.push('Username field is required!')
            }
            if (this.password === '') {
                this.errors.push('Password field is required!')
            }
            if (this.password2 === '') {
                this.errors.push('Repeat password field is required!')
            }
            if (this.password !== this.password2) {
                this.errors.push('Passwords does not match!')
            }
            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password
                }
                axios
                    .post("/api/v1/users/", formData)
                    .then(response => {this.$router.push('/log-in')})
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please try again')
                            
                            console.log(JSON.stringify(error))
                        }
                    })
            }
        }
    }
}
</script>

<style>
.error-text {
    color: red;
    text-decoration: underline;
}
</style>