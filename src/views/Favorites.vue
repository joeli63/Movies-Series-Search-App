<template>
  <div class="container">
    <div
      v-if="favorites"
      class="favorites"
    >
      <div
        v-for="favoriteMovie in favorites"
        :key="favoriteMovie.title"
        class="favorites__movie"
      >
      <h3 class="favorites__title">{{ favoriteMovie.title }}</h3>
      <p v-if="favoriteMovie.year">Year of release: {{ favoriteMovie.year }}</p>
      <p v-else>Year of release is uknown</p>
      <img
        v-if="favoriteMovie.poster === 'N/A'"
        class="favorites__poster"
        @click="goToSingleMovie(favoriteMovie.id)"
        src="https://m.media-amazon.com/images/M/MV5BMTA4MzU0MTE3MjBeQTJeQWpwZ15BbWU4MDc4NTkxNjMx._V1_.jpg">
      <img
        v-else
        class="favorites__poster"
        :src="favoriteMovie.poster"
        @click="goToSingleMovie(favoriteMovie.id)"
        alt="image">
      </div>
    </div>
    <div v-else>
      <h2>You don't have any favorite movie so far.</h2>
    </div>
  </div>
</template>

<style lang="scss">
  .favorites {
    display: flex;
    flex-wrap: wrap;

    &__movie {
      margin-right: 20px;
      width: calc(25% - 20px);
      margin: 0 10px 60px 10px;

      @media (max-width: 992px) {
        width: calc(50% - 20px);
      }

      @media (max-width: 768px) {
        width: 100%;
        margin: 0 0 40px 0;
      }
    }

    &__title {
      height: 50px;
      font-size: 17px;
      line-height: 1.2;
    }

    &__poster {
      height: 350px;
      width: 100%;
      cursor: pointer;
      margin-top: 10px;
    }
  }
</style>

<script>
  export default {
    name: 'Home',

    data () {
      return  {
        favorites: [],
      }
    },

    methods: {
      goToSingleMovie(id) {
        this.$router.push({ name: 'single_movie', params: { id }})
        localStorage.setItem('movieId', id);
      },
    },

    mounted () {
      this.favorites = JSON.parse(localStorage.getItem("favoriteMovies"));
    }    
  }
</script>

