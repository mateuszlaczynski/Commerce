<template>
    
    <div>
        <h2>Summary:</h2>
        <b>
            <div style="padding:3px" v-for="item in cart.items" v-bind:key="item.product.id">
                    <p>
                        {{ item.product.name}}
                        {{item.product.price}}$
                        x{{item.quantity}}
                    </p>
            </div>
            <hr>
            Total: {{cartTotalPrice.toFixed(2)}}$
        </b>
                <form @submit.prevent="submitForm">
                    <h3>First name:</h3>
                    <input class="log-input" type="text" v-model="first_name">
                    <h3>Last name:</h3>
                     <input class="log-input" type="text" v-model="last_name">
                     <h3>E-mail:</h3>
                      <input class="log-input" type="email" v-model="email">
                      <h3>Phone number:</h3>
                      <input class="log-input" type="tel" pattern="[0-9]{9}" v-model="phone">
                      <h3>Adress:</h3>
                      <input class="log-input" type="text" v-model="address">
                      <h3>Zipcode:</h3>
                      <input class="log-input" type="text" v-model="zipcode">
                      <h3>Place:</h3>
                      <input class="log-input" type="text" v-model="place">
                      <button @click="submitForm()" class="button-input" style="margin-top:20px; width: 210px; height:30px">Submit</button>
            <div v-if="errors.length">
                <b><p class="error-text" v-for="error in errors" :key="error">{{error}}</p></b>
            </div>
            </form>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: "Checkout",
        data() {
        return {
            cart: {
                items: []
            },
            stripe: {},
            card: {},
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            zipcode: '',
            place: '',
            errors: []
        }
    },
    mounted(){
        document.title = "Checkout"
        this.cart = this.$store.state.cart
    },
    methods: {
        getItemTotal(item) {
            return item.quantity * item.product.price
        },
        submitForm() {
            this.errors = []
            if (this.first_name === '') {
                this.errors.push('First name field is required!')
            }
            if (this.last_name === '') {
                this.errors.push('Last name field is required!')
            }
            if (this.email === '') {
                this.errors.push('Email field is required!')
            }
            if (this.phone === '') {
                this.errors.push('Phone field is required!')
            }
            if (this.address === '') {
                this.errors.push('Address field is required!')
            }
            if (this.zipcode === '') {
                this.errors.push('Zip code field is required!')
            }
            if (this.place === '') {
                this.errors.push('Place field is missing!')
            }
            if (!this.errors.length) {
                this.stripe.createToken(this.card).then(result => {                    
                    if (result.error) {
                        this.errors.push('Something went wrong with Stripe. Please try again')
                        console.log(result.error.message)
                    } else {
                        this.stripeTokenHandler(result.token)
                    }
                })
            }
        },
        stripeTokenHandler(token) {
            const items = []
            for (let i = 0; i < this.cart.items.length; i++) {
                const item = this.cart.items[i]
                const obj = {
                    product: item.product.id,
                    quantity: item.quantity,
                    price: item.product.price * item.quantity
                }
                items.push(obj)
            }
            const data = {
                'first_name': this.first_name,
                'last_name': this.last_name,
                'email': this.email,
                'address': this.address,
                'zipcode': this.zipcode,
                'place': this.place,
                'phone': this.phone,
                'items': items,
                'stripe_token': token.id
            }
            axios
                .post('/api/v1/checkout/', data)
                .then(response => {
                    this.$store.commit('clearCart')
                    this.$router.push('/cart/success')
                })
                .catch(error => {
                    this.errors.push('Something went wrong. Please try again')
                    console.log(error)
                })
                this.$store.commit('setIsLoading', false)
        }
    },
    computed: {
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.product.price * curVal.quantity
            }, 0)
        },
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        }
    }
}

</script>