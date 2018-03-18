import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import UserListPage from '@/views/UserListPage.vue';
import EditUserPage from '@/views/EditUserPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/users',
      name: 'about',
      component: UserListPage,
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditUserPage,
    },
  ],
});
