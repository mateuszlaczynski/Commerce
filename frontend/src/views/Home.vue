<template>

<div style="text-align:center">

      <div class="card" v-for="product in productList" v-bind:key="product.id">
          <img class="card-image" :src="product.get_image"/>
          <p>{{product.name}} {{product.price}}$</p>
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
.card {
  display: inline-block;
  padding: 15px;
}
.card:hover {
  border: solid 1px black;
  padding: 14px;
  cursor: pointer;
}

.card-image {
  max-width: 300px;
  max-height: 300px;
  min-width: 300px;
  min-height: 300px;
}
</style>