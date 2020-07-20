<template>
  <div id="app">
    <PosterBg :poster="posterBg" />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList";
import PosterBg from "./components/PosterBg";

export default {
  name: "App",
  components: { MoviesList, PosterBg },
  mounted() {
    this.fetchMovies();
  },
  computed: {
    ...mapGetters("movies", ["moviesList"]),
  },
  data: () => ({
    posterBg: "",
  }),
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
    onChangePoster(poster) {
      console.log("poster", poster);
      this.posterBg = poster;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
