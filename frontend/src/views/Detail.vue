<template>

    <div style="display:inline-block; padding: 30px;">

        <img id="section-image" :src="product.get_image"/>
        <h2>{{product.name}} {{product.price}}$</h2>
        <p style="margin:5%; text-align:justify">{{product.description}}</p>
        <div style="text-align:center">
            <button v-if="quantity > 1" style="border-right:0px;" class="input-button" @click="quantity--">-</button>
            <button v-else class="input-button" disabled>-</button>                    
            <input type="number" id="quantity" name="quantity" min="1" max="10" :value="quantity">
            <button v-if="quantity < 10" style="border-left:0px;" class="input-button" @click="quantity++">+</button>
            <button v-else class="input-button" disabled>+</button>

            <label for="quantity"> z 10</label>

            <button @click="addToCart" v-if="quantity >= 1 && quantity <= 10" class="button-success" type="submit">Add To Cart!</button>
            <button v-else class="button-success" disabled>Add to Cart!</button>
        </div>
    </div>


</template>
<script>
import axios from "axios"
    export default{
        name: 'Detail',
        data() {
            return {
                product: {},
                quantity:1
            }
        },
        mounted() {
            this.getProduct()
        },
        methods: {
            getProduct() {
                const category_slug = this.$route.params.category_slug
                const product_slug = this.$route.params.product_slug

                axios.get(`/api/v1/${category_slug}/${product_slug}/`)
                .then(response => {this.product = response.data})
                .catch(error => {console.error(error)})
            },
            addToCart() {
                if (isNaN(this.quantity) || this.quantity <1) {
                    this.quantity = 1
                }

                const item = {
                    product: this.product,
                    quantity: this.quantity,
                }
                this.$store.commit('addToCart',item)
            }
        },
        
    }
</script>

<style>
input[type="number"] {
    width: 50px;
    height: 33px;
    padding: 0px;
    border:1px solid black;
    text-align: center;  
    font-weight:bold;
  -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}
.input-button {
  width: 25px;
  height: 35px;
  text-align: center;  
  padding:0px;
  background-color:white;
  border:1px solid black;
  font-weight:bold;
}
.input-button:hover {
    cursor: pointer;
    background-color: lightgray;
}
.input-button:disabled {
    background-color: lightgray;
    border-color: gray;
    cursor: default;
}
#section-image {
    max-width: 50%;
    margin:2px;
    max-height: 35%;
    padding:20px;
    float: left;
}
</style>