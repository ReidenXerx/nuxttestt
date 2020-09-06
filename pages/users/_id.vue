<template lang="html">
  <section>
    <h1>User {{$route.params.id}}</h1>
  </section>
</template>

<script>
export default {
  validate: function(context) { // в наксте в отличие от вью нельзя писать this,$route.params, нужно подключать контекст, this недоступно в серверных операциях

    console.log('validate');
    return /^\d+$/.test(context.params.id)
  },
  async asyncData(context) {
    const user = await context.$axios.$get('https://jsonplaceholder.typicode.com/users/' + context.params.id)
    return {user}
  }
}
</script>

<style lang="css" scoped>
</style>
