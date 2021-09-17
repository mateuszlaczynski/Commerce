<template>

<div>
        <ul style="text-align: center" v-for="category in categoryList" v-bind:key="category.id">
            <router-link :to="category.get_absolute_url">
              <button class="button-category">{{category.name}}</button>
            </router-link>
            <br>
        </ul>
</div>

  
</template>

<script>
import axios from "axios"

export default {
  name: 'Category',
  data() {
    return {
      categoryList: []
    }
  },
  components: {
  },
  mounted() {
    this.getCategoryList()
    document.title = 'Categories'
  },
  methods: {
    getCategoryList() {
        axios
        .get('api/v1/categories/')
        .then(response => {
        this.categoryList = response.data
      }).catch(error => {console.log(error)});
    }
  }
}
</script>

<style> 

.button-category {
  width: 45%;
  background-color: white;
  border: 1px solid #999999;
  border-radius: 8px;
  height:40px;
  font-weight: bold;
  color: #999999;
  letter-spacing: 1px
}
.button-category:hover {
  background-color: darkorange;
  border: 1px solid black;
  color: black;
  cursor: pointer;
}

</style>