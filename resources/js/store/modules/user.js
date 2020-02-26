const state = {
  users: []
};

const getters = {};

const actions = {
  getUsers({commit}, pageNumber) {
    const url = pageNumber ? `/users?page=${pageNumber}` : '/users';

    axios.get(url)
    .then(res => {
      commit('setUsers', res.data);
    })
    .catch(err => {
      console.log(err)
    });
  }
};

const mutations = {
  setUsers(state, data) {
    state.users = data;
  },
  setCurrentPage(state, data) {
    state.users.current_page = data;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
