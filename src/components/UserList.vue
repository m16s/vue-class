<template>
  <div id="app">

    <h3>{{users.length}} Users</h3>
    <label>
      <input type="checkbox" v-model="showUsers">
      Show all
    </label>

    <div v-if="showUsers">
      <ul class="user-list" >
        <li
        class="user"
        v-for="user of users"
        v-if="users.length"
        :key="user.id"
        >
          <div class="user__photo">
            <img class="user__photo-image" v-if="user.photo" :src="user.photo" />
            <span v-else>No Photo</span>
          </div>
          {{user.name}}
        </li>
        <li v-else>No users 1</li>
        <li v-if="!users.length">No users 2</li>
      </ul>
    </div>

  </div>
</template>

<script>
import users from '../model/users';

export default {
  name: 'UserList',
  data() {
    return {
      users,
      showUsers: false,
    };
  },
};
</script>

<style>
.user-list {
  padding: 0;
}

.user {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  text-transform: uppercase;
}
.user:first-child {
  margin-top: 0;
}

.user__photo {
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
}

.user__photo-image {
  width: 100%;
}
</style>
