<template>
<div>
  <nav id="nav">
      <div style="font-size:35px; padding:5px;"><b>LOREM IPSUM</b></div>
      <button class="nav-item"><router-link  to="/">Home</router-link></button>
      <button class="nav-item"><router-link to="/contact">Contact us</router-link></button>
      <button class="nav-item"><router-link to="/about">About</router-link></button>
      <button class="nav-item"><router-link to="/categories">Categories</router-link></button>
      <button class="nav-item"><a>Koszyk: {{cartTotalLength}}</a></button>
      


  </nav>

  <div id="container" style="height:100%">
    
    <router-view/>
  </div>
  <footer id="footer">
      <h5>Mateusz Łączyński &copy; 2021</h5>
  </footer>
</div>

</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      cart: {
        items: []
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
  mounted(){
    this.cart = this.$store.state.cart
  },
  computed: {
    cartTotalLength() {
      let totalLenght = 0
      for(let i = 0; i < this.cart.items.length; i++) {
        totalLenght += this.cart.items[i].quantity
      }
      return totalLenght
    }
  }
}
</script>

<style>

body {
  margin: 0 !important;
}

#nav {
  display:inline-block;
  width: 100%;
  text-align:center;
  background-color: #e6e6e6;
  border-bottom: 1px solid black;
  padding-top:20px;
  padding-bottom:15px;
}
.nav-item {
  padding: 5px;
  margin-right:15px;
  border:none;
  background-color:#e6e6e6;
  color:black;
  border-radius:20%;
}
.nav-item:hover {
  background-color: #cccccc;
}
#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-size: 22px;
}
#nav a.router-link-exact-active {
  color: darkorange;
}


#footer {
  width: 100%;
  text-align:center;
  background-color: darkorange;
  height:64px;
  font-weight: bold;
  font-size:22px;
  text-align: center;
  color: #2c3e50;
  border-top: 1px solid black;
  padding-top:20px;
  padding-bottom:20px;
}


#container {
  padding:25px;
  background-color:#f2f2f2;
  min-height: 64vh;
}

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

.button-success {
  background-color:darkorange;
  padding: 10px;
  border: solid 1px black;
  width:130px;
  margin: 5px;
}
.button-success:hover {
  background-color:white;
  color: darkorange;
  border-color: darkorange;
  cursor: pointer;
}
.button-success:disabled {
  background-color:lightgray;
  color: gray;
  border-color: gray;
  cursor: default;
}


</style>
