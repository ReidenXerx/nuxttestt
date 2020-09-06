<template lang="html">
  <section>
    <form @submit.prevent="onSubmit">
      <h1>Login page</h1>
      <div class="form-group">
        <input type="text" class="form-control">
      </div>
      <p>
        <nuxt-link to="/"> To home page</nuxt-link>
      </p>

      <button class="btn btn-primary" type="submit" name="button">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'empty',
  methods: {
    onSubmit() {
      this.$store.dispatch('login') //без названия модулей, потому что это находится в индекс жс, а он корневой
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
