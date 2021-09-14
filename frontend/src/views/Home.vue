<template>

<div style="text-align:center;">
      <div class="card" v-for="product in productList" v-bind:key="product.id">
        <router-link :to="product.get_absolute_url" style="color:black;text-decoration:none;">
          <img class="card-image" :src="product.get_image"/>
          <p>{{product.name}} {{product.price}}$</p>
          </router-link>
    </div>
</div>

  
</template>

<script>
import axios from "axios"

export default {
  name: 'Home',
  data() {
    return {
      productList: []
    }
  },
  components: {
  },
  mounted() {
    this.getProductList()
  },
  methods: {
    getProductList() {
      axios
      .get('api/v1/products/')
      .then(response => {
        this.productList = response.data
      }).catch(error => {console.log(error)});
    }
  }
}
</script>

<style>

</style>