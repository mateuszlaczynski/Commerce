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
import axios from 'axios'
export default {
    name: 'Search',
    data() {
        return {
            productList: [],
            query: ''
        }
    },
    mounted() {
        document.title = ''
        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)
        if (params.get('query')) {
            this.query = params.get('query')
            this.performSearch()
        }
    },
    methods: {
        performSearch() {
            axios
            .post('/api/v1/products/search/', {'query': this.query})
            .then(response => {
                this.productList = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>