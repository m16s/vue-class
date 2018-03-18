<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-dark bg-dark">
        <router-link class="navbar-brand" exact-active-class="active" to="/">vue-class</router-link>
        <router-link active-class="active" to="/users">Users</router-link>
        <router-link active-class="active" to="/edit">Edit Users</router-link>
      </nav>
    </header>
    <router-view/>

    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
  </div>
</template>

<style lang="scss">
.active {
  border: 1px solid tomato;
}
</style>
