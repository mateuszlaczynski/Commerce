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
  name: 'Category',
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
        const category_slug = this.$route.params.category_slug
        
        axios
        .get(`api/v1/${category_slug}/`)
        .then(response => {
        this.productList = response.data
      }).catch(error => {console.log(error)});
    }
  }
}
</script>
