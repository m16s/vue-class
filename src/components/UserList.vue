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
            <img class="user__photo-image" v-if="user.picture" :src="user.picture" />
            <span v-else>No Photo</span>
          </div>
          {{user.firstName}} {{user.lastName}}
        </li>
        <li v-else>No users 1</li>
        <li v-if="!users.length">No users 2</li>
      </ul>
    </div>

  </div>
</template>

<script>
import {getUsers} from '../model/users';

/*
  "id": 0,
  "isActive": true,
  "balance": "$3,705.55",
  "picture": "http://placehold.it/128x128",
  "age": 30,
  "accessLevel": "guest",
  "firstName": "Moses",
  "lastName": "Vasquez",
  "company": "STEELTAB",
  "email": "moses.vasquez@steeltab.us",
  "phone": "+7 (931) 549-2444",
  "address": "332 Danforth Street, Blanco, Ohio, 3073",
  "about": "Proident fugiat laboris irure dolor sint dolor ipsum ut id proident excepteur quis ad. Nostrud aliquip pariatur duis dolor est incididunt ad velit velit. Consectetur magna irure veniam dolor. Voluptate qui fugiat mollit ut reprehenderit fugiat non.",
  "registered": "01.02.2015"
*/

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      showUsers: false,
    };
  },
  mounted() {
    getUsers()
      .then(users => {
        this.users = users;
      });
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
