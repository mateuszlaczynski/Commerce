<template>

<div>
    <ui>
        <li v-for="category in categoryList" v-bind:key="category.id">
            <router-link :to="category.get_absolute_url"><b style="font-size:24px">{{category.name}}</b></router-link>
        </li>
    </ui>
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
