export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  login(context) {
    context.commit('setToken', 'truetoken')
  },
  logout(context) {
    context.commit('clearToken', 'truetoken')
  }
}

export const getters = {
  hasToken: s => !!s.token //(приведение к булеан значению)
}
