import mutations from "../mutations";

const { SHOW_TOAST_NOTIFI } = mutations;

const notificationStore = {
  state: {
    messagePool: [],
  },
  getters: {
    messagePool: ({ messagePool }) => messagePool[messagePool.length - 1],
  },
  mutations: {
    [SHOW_TOAST_NOTIFI](state, msg) {
      return state.messagePool.push(msg);
    },
  },
  actions: {
    showNotify({ commit }, msg) {
      commit(SHOW_TOAST_NOTIFI, msg);
    },
  },
};

export default notificationStore;
