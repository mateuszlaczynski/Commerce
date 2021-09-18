<template>

    <div>
        <img class="cart-thumbnail" :src="item.product.get_image">
        <h3><router-link :to="item.product.get_absolute_url">{{item.product.name}}</router-link></h3>
        <b>Quantity: 

            <button class="pm" @click="decrementQuantity(item)">-</button> 
            {{item.quantity}}
            <button class="pm" @click="incrementQuantity(item)">+</button>

        </b>
        <p>{{getPrice(item).toFixed(2)}}$ 
            <button @click="removeFromCart(item)" class="button-delete" style="float: right">Delete</button>
        </p>
        <hr>
        <br>
    </div>

</template>

<script>
export default {
    name: 'CartItem',
    props: {
        initialItem: Object
    },
    data() {
        return {
            item: this.initialItem
        }
    },
    methods: {
        getPrice(item) {
            return item.quantity * item.product.price
        },
        incrementQuantity(item) {
            item.quantity++

            this.updateCart()
        },
        decrementQuantity(item) {
            item.quantity--
            if (item.quantity === 0) {
                this.$emit('removeFromCart', item)
            }
            this.updateCart()
        },
        updateCart(){
            localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
        },
        removeFromCart(item) {
            this.$emit('removeFromCart', item)
            this.updateCart()
        }
    }
}
</script>

<style>
a {
    color:black;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}

.cart-thumbnail {
    max-width: 100px;
    max-height: 100px;
    float:left;
    margin-right: 10px;

}

.pm {
    padding:5px;
    border:none;
}
.pm:hover {
    cursor:pointer;
    background-color:lightgray;
}

</style>