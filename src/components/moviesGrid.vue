<template>
  <div>
    <div class="container">
      <div v-if="moviesInfo ===  null">
        <p> {{ errorMessage }}</p>
      </div>
      <div v-else>
        <Movie
          class="images-grid"
          :movieSerieInfo="moviesInfo" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .container {
    max-width: 1300px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      padding: 0 15px;
    }
  }

  .images-grid {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<script>
  import Movie from '@/components/movie';
  export default {
    name: 'Movies',

    components: {
      Movie,
    },

    props: {
      moviesInfo: {
        type: Array,
        required: true,
      }
    },

    data () {
      return  {
        errorMessage: 'Sorry, something went wrong, we cannot display the images. Please try later or contact our support center.',
        apiError: false,
      }
    },
  }
</script>
