<template>
  <!-- <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <UserList/>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import UserList from '@/components/UserList.vue';

export default {
  name: 'home',
  components: {
    UserList,
  },
};
</script>
