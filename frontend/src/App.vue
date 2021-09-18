<template>
<div>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet"> 
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300&display=swap" rel="stylesheet">


  <nav id="nav">

      <div style="font-size:35px;padding-left:10px; border-bottom: 1px solid black;">

        <b style="font-family: 'Italianno', cursive; letter-spacing:4px; font-size:49px;">Lorem Ipsum</b>

      </div>
      <div style="padding-left:30px;">

        <button class="nav-item"><router-link  to="/">Home</router-link></button>
        <button class="nav-item"><router-link to="/contact">Contact us</router-link></button>
        <button class="nav-item"><router-link to="/about">About</router-link></button>
        <button class="nav-item"><router-link to="/categories">Categories</router-link></button>
        <button class="nav-item"><router-link to="/cart">Cart</router-link></button>
        <b style="font-size:22px; padding-right: 10px;">|</b>
        <button v-if="$store.state.isAuthenticated" class="nav-item"><router-link to="/log-out">Log out</router-link></button>
        <button v-if="!$store.state.isAuthenticated" class="nav-item"><router-link to="/log-in">Log in</router-link></button>
        <button v-if="!$store.state.isAuthenticated"  class="nav-item"><router-link to="/sign-up">Sign up</router-link></button>

  
        <div style="float:right">

          <form id="search-bar" method="get" action="/search">
              <input type="text" id="input-bar" placeholder="..." name="query">
              <button type="submit" class="button-input">Search</button>
          </form>

        </div>



      </div>

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
    const token = this.$store.state.token
    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
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
  font-family: 'Lato', sans-serif;
}

#nav {
  display:inline-block;
  width: 100%;
  background-color: #e6e6e6;
  border-bottom: 1px solid black;
  padding-bottom:10px;
}
.nav-item {
  padding: 5px;
  margin-right:15px;
  margin-top: 10px;
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
#search-bar {
  padding: 5px;
  margin-right:25px;
  margin-top: 10px;
  display:inline-block;
}

#input-bar {
  width:175px;
  height: 20px;
  font-size:14px;
  border-radius: 3px;
  border:none;
  margin-right:1px;
}

#footer {
  width: 100%;
  text-align:center;
  background-color: darkorange;
  height:67px;
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
  max-width: 350px;
  max-height: 250px;
  min-width: 350px;
  min-height: 250px;
}

.log-box {
  text-align:center;
  border: 1px solid black;
  width: 250px;
  padding-bottom:20px;
  border-radius: 10px;
  margin:auto;
}
.log-input {
  width: 200px;
  height: 20px;
}

.button-success {
  background-color:darkorange;
  padding: 10px;
  border: solid 1px black;
  margin: 5px;
  border-radius: 6px;
}
.button-success:hover {
  background-color:#ff9933;
  cursor: pointer;
}
.button-success:disabled {
  background-color:lightgray;
  color: gray;
  border-color: gray;
  cursor: default;
}

.button-input {
  background-color:green;
  padding:5px;
  border: solid 1px #e6e6e6;
  border-radius: 6px;
  color: white;
}
.button-input:hover {
  background-color:#009900;
  cursor: pointer;
}

.button-delete {
  background-color:red;
  padding:5px;
  border: solid 1px #e6e6e6;
  border-radius: 6px;
  color: white;
}
.button-delete:hover {
  background-color:lightcoral;
  cursor: pointer;
}
</style>
