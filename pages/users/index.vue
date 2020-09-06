<!-- 2 способ роутинга -->
<template lang="html">
  <div>
    <h1>{{pageTitle}}</h1>
    <ul>
      <!-- 3 способ роутинга -->
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user)">User {{user.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async fetch(context) {
    if(context.store.getters['users/getUsers'].length === 0) {//users.js/название геттера users
      await context.store.dispatch('users/fetch')
    }
  },
  async asyncData(context) { // выполняется на сервере, если мы загружаем это  приложение впервые (при обновлении страницы, видимо). Контекст недоступен в серверных операциях
    const users = await context.$axios.$get('https://jsonplaceholder.typicode.com/users')
    return {users}
  },
  data: () => ({
    pageTitle: 'Users page'
  }),

  computed: {
    users() {//что это за дерьмо
      return this.$store.getters['users/getUsers']
    }
  },

  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
