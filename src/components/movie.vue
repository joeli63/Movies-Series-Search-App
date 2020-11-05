<template>
  <div>
    <div
      class="movie" 
      v-for="movie in movieSerieInfo" 
      :key="movie.imdbID"
    >
      <h3 class="movie__title"> {{ movie.Title }} </h3>
      <div class="movie__year-favorite">
        <p class="movie__year">Year of release: {{ movie.Year }}</p>
        <button
          class="movie__favorite-button"
          @click="addToFavorite(movie.imdbID, movie.Poster, movie.Year, movie.Title)"
        >
          Add to the favorite
        </button>
      </div>
      <img
        v-if="movie.Poster === 'N/A'"
        class="movie__poster"
        @click="goToSingleMovie(movie.imdbID)"
        src="https://m.media-amazon.com/images/M/MV5BMTA4MzU0MTE3MjBeQTJeQWpwZ15BbWU4MDc4NTkxNjMx._V1_.jpg">
      <img
        v-else
        class="movie__poster"
        :src="movie.Poster"
        @click="goToSingleMovie(movie.imdbID)"
        alt="image">
    </div>
  </div>
</template>

<style scoped lang="scss">
  .movie {
    width: calc(25% - 20px);
    margin: 0 10px 60px 10px;

    @media (max-width: 992px) {
      width: calc(50% - 20px);
    }

    @media (max-width: 768px) {
      width: 100%;
      margin: 0 0 40px 0;
    }

    &__year-favorite {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    &__favorite-button {
      appearance: none;
      cursor: pointer;
      background: #43A8DD;
      border: none;
      border-radius: 4px;
      color: #fff;
      padding: 6px;
    }

    &__year {
      font-size: 15px;
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

       @media (max-width: 600px) {
         height: 320px;
       }
    }

    &__favorite-added {
      position: absolute;
      top: 0;
      left: 0;
      padding: 40px;
      font-size: 20px;
      width: 100%;
      background: chocolate;
      color: #fff;
      font-weight: bold;
    }
  }
</style>

<script>
  export default {
    name: 'MovieBox',

    props: {
      movieSerieInfo: {
        required: true,
        type: Array,
      }
    },

    methods: {
      goToSingleMovie(id) {
        this.$router.push({ name: 'single_movie', params: { id }})
        localStorage.setItem('movieId', id);
      },

      addToFavorite(id, poster, year, title) {
        const moviesData = { id, poster, year, title };

        // Parse the JSON stored in favoriteMovies
        let existingMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
        if(existingMovies == null) existingMovies = [];

        // Save moviesData back to local storage
        existingMovies.push(moviesData);

        // Prevention of pushing the duplicated objects
        const noDuplicatedFavorites = [...new Map(existingMovies.map(item => [item.id, item])).values()]

        localStorage.setItem("favoriteMovies", JSON.stringify(noDuplicatedFavorites));
      },
    }
  }
</script>
