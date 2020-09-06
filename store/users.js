export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetch(context) {
    const users = await context.commit.$axios.$get('https://jsonplaceholder.typicode.com/users')
    commit('setUsers', users)
  }
}

export const getters = {
  getUsers: s => s.users
}
