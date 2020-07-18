import axios from "../../plagins/axios";

const moviesStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies(ctx) {
      console.log("ctx", ctx);
      const response = await axios.get("/", {
        params: {
          i: "tt1285016",
        },
      });
      console.log("response", response);
    },
  },
};

export default moviesStore;
