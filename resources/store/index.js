export const state = () => ({
  todo: []
})

export const getters = {
  todo: (state) => state.todo
}

export const mutations = {
  updateTodo (state, todo) {
    state.todo = todo
  }
}

export const actions = {
  async fetchTodo ({ commit }) {
    try {
      const { data } = await this.$axios.get(`/api/todo`)
      commit('updateTodo', data)
    } catch (err) {
      console.log(err)
    }
  }
}
