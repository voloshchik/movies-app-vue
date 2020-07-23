<template>
  <div>
    <BContainer>
      <h3 class="list-title">{{ listTitle }}</h3>
      <BRow>
        <template v-if="isExist">
          <BCol cols="3" v-for="(movie, key) in list" :key="key">
            <MovieItem
              :movie="movie"
              @mouseover.native="onMouseOver(movie.Poster)"
              @removeItem="onRemoveItem"
            />
          </BCol>
        </template>
        <template v-else>
          <div>Emty list</div>
        </template>
      </BRow>
    </BContainer>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    ...mapActions(["showNotify"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      const isComfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure? ${title}`,
      );

      if (isComfirmed) {
        this.removeMovie(id);
        this.showNotify({
          msg: "Movie deleted successefu",
          variant: "success",
          title: "Success",
        });
      }
    },
  },
  components: { MovieItem },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    ...mapGetters("movies", ["isSearch"]),
    listTitle() {
      return this.isSearch ? "Search result" : "IMDB Top 250";
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
</style>
