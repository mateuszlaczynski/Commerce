<template>
<div>
  <div id="nav">
      <div style="font-size:35px; padding:5px;"><b>LOREM IPSUM</b></div>
      <button class="nav-item"><router-link  to="/">Home</router-link></button>
      <button class="nav-item"><router-link to="/about">About</router-link></button>
      <button class="nav-item"><router-link to="/about">About</router-link></button>
      <button class="nav-item"><router-link to="/about">About</router-link></button>
      <button class="nav-item"><router-link to="/about">About</router-link></button>

  </div>
  <hr style="margin:0px">
  <div id="container">
    <router-view/>
  </div>
</div>

</template>

<style>

body { margin: 0 !important; }

#nav {
  padding: 15px;
  display:inline-block;
  width: 100%;
  text-align:center;
  background-color: #e6e6e6;
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

#container {
  padding:25px;
  background-color:#f2f2f2;
  height: 600px;
}
</style>
