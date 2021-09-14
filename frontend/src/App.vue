<template>
<div>
  <nav id="nav">
      <div style="font-size:35px; padding:5px;"><b>LOREM IPSUM</b></div>
      <button class="nav-item"><router-link  to="/">Home</router-link></button>
      <button class="nav-item"><router-link to="/contact">Contact us</router-link></button>
      <button class="nav-item"><router-link to="/about">About</router-link></button>
      <button class="nav-item"><router-link to="/about">About</router-link></button>
      <button class="nav-item"><router-link to="/about">About</router-link></button>

  </nav>
  <div id="container" style="height:100%">
    <router-view/>
  </div>
  <footer id="footer">
      <a class="footer-item"><router-link  to="/"> Home </router-link></a>
      <a class="footer-item"><router-link to="/contact"> Contact us </router-link></a>
      <a class="footer-item"><router-link to="/about"> About </router-link></a>
      <a class="footer-item"><router-link to="/about"> About </router-link></a>
      <a class="footer-item"><router-link to="/about"> About </router-link></a>
      <h5>Mateusz Łączyński &copy; 2021</h5>
  </footer>
</div>

</template>

<style>

body {
  margin: 0 !important;
}

#nav {
  padding: 15px;
  display:inline-block;
  width: 100%;
  text-align:center;
  background-color: #e6e6e6;
  border-bottom: 1px solid black;
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
  padding: 15px;
  width: 100%;
  text-align:center;
  background-color: darkorange;
  height:100px;
  font-weight: bold;
  font-size:22px;
  text-align: center;
  color: #2c3e50;
  border-top: 1px solid black;
}
.footer-item {
  padding: 5px;
  margin-right:15px;
  border:none;
  background-color:darkorange;
  color:#2c3e50;
  border-radius:20%;
}
#footer a {
  color: #2c3e50;
  text-decoration: none;
  font-size: 22px;
}
#footer a:hover {
  color:  #f2f2f2;
  text-decoration: pointer;
}
#footer a.router-link-exact-active {
  color:  #f2f2f2;
}

#container {
  padding:25px;
  background-color:#f2f2f2;
  min-height: 60vh;
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
