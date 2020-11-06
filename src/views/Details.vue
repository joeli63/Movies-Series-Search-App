<template>
  <div class="container">
    <div class="single-image" v-if="singleMovieSerieInfo">
      <div class="single-image__poster">
        <img class="single-image__img" :src="singleMovieSerieInfo.Poster" alt="Single Image">
      </div>
      <div>
        <h2 class="single-image__title">{{ singleMovieSerieInfo.Title }} <span>({{ singleMovieSerieInfo.Year }})</span> </h2>
        <p class="single-image__info"><b>Genre:</b> {{ singleMovieSerieInfo.Genre }} | <b>Runtime</b>: <span>{{ singleMovieSerieInfo.Runtime }}</span></p>
        <p class="single-image__info"><b>Director:</b> {{ singleMovieSerieInfo.Director }}</p>
        <p class="single-image__info"><b>Actors:</b> {{ singleMovieSerieInfo.Actors }}</p>
        <p class="single-image__info"><b>Descriprion:</b> {{ singleMovieSerieInfo.Plot }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .single-image {
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }

    &__title {
      margin-bottom: 30px;
    }

    &__img {
      max-width: 800px;
      margin-right: 50px;

       @media (max-width: 1300px) {
         max-width: 500px;
       }

       @media (max-width: 992px) {
         max-width: 400px;
       }

       @media (max-width: 768px) {
         max-width: 100%;
         display: block;
         margin: 0 auto;
       }
    }

    &__info {
      margin-bottom: 20px;
      max-width: 400px;
    }
  }
</style>

<script>
  import singleMovieSerieSevice from '@/services/moviesOrSeries';

  export default {
    name: 'Details',
    
    data () {
      return {
        singleMovieSerieInfo: null,
        movieSerieId: null,
      }
    },

    created () {
      this.movieSerieId = localStorage.getItem('movieId');
      singleMovieSerieSevice.getSingleMovieOrSeries(this.movieSerieId)
      .then(response => {
        this.singleMovieSerieInfo = response.body;
      })
      .catch(error => {
        console.log(error);
      })
    },
  }
</script>