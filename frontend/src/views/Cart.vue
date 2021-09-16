<template>
    <div v-if="cartLength">
        <CartItem v-for="item in cart.items"
        :key="item.product.id" :initialItem="item"
        v-on:removeFromCart="removeFromCart"/>
        <h3>Total price: {{ cartTotalPrice.toFixed(2) }}$</h3>
        <button @click="removeFromCart(item)" class="button-input" style="padding:12px">Proced to checkout</button>
    </div>
    <div v-else>
        <h2 style="text-align:center">Nothing is in the cart!</h2>
    </div>
</template>
<script>
import axios from "axios"
import CartItem from '@/components/CartItem.vue'
export default {
    name:'Cart',
    components:{CartItem},
    data() {
        return {
            cart: {
                items: []
            }
        }
    },
    methods: {
        removeFromCart(item) {
            this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
        }
    },
    mounted() {
        this.cart = this.$store.state.cart
    },
    computed: {
        cartLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity;
            }, 0)
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.product.price * curVal.quantity
            }, 0)
        }
    }
}

</script>
