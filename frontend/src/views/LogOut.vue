<template>
    <div>
        <h1>Are you sure you want to log out?</h1>
        <button class="button-delete" @click="logout()">Log Out</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'LogOut',
    components: {
        
    },
    data() {
        return {
            orders: []
        }
    },
    mounted() {
        document.title = 'Log Out'
        this.getMyOrders()
    },
    methods: {
        logout() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")
            this.$store.commit('removeToken')
            this.$router.push('/')
        },
        async getMyOrders() {
            axios
                .get('/api/v1/orders/')
                .then(response => {
                    this.orders = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>