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
      <div class="favorites__year-remove">
        <p v-if="favoriteMovie.year">Year of release: {{ favoriteMovie.year }}</p>
        <p v-else>Year of release is uknown</p>
        <button class="favorites__remove" @click="removeFavorite(favoriteMovie.id)">Remove from favorite</button>
      </div>
      <img
        v-if="favoriteMovie.poster === 'N/A'"
        class="favorites__poster"
        @click="goToSingleMovieOrSeries(favoriteMovie.id)"
        src="https://m.media-amazon.com/images/M/MV5BMTA4MzU0MTE3MjBeQTJeQWpwZ15BbWU4MDc4NTkxNjMx._V1_.jpg">
      <img
        v-else
        class="favorites__poster"
        :src="favoriteMovie.poster"
        @click="goToSingleMovieOrSeries(favoriteMovie.id)"
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

    &__year-remove {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__remove {
      appearance: none;
      cursor: pointer;
      background: crimson ;
      border: none;
      font-size: 13px;
      border-radius: 4px;
      color: #fff;
      padding: 6px;
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
    name: 'Favorites',

    data () {
      return  {
        favorites: [],
      }
    },

    methods: {
      goToSingleMovieOrSeries(id) {
        this.$router.push({ name: 'details', params: { id }})
        localStorage.setItem('movieId', id);
      },

      removeFavorite(id) {
        let itemToRemove = this.favorites.map(item => item.id).indexOf(id);
        this.favorites.splice(itemToRemove, 1)
        localStorage.setItem('favoriteMovies', JSON.stringify(this.favorites));
      },
    },

    mounted () {
      this.favorites = JSON.parse(localStorage.getItem("favoriteMovies"));
    }    
  }
</script>

