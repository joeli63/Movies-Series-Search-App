<template>
  <div>
    <div class="container">
      <MoviesSeriesItem
        class="images-grid"
        :movieSerieInfo="moviesInfo" />
    </div>
  </div>
</template>

<style lang="scss">
  .images-grid {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<script>
  import MoviesSeriesItem from '@/components/singleItem';

  export default {
    name: 'MoviesAndSeries',

    components: {
      MoviesSeriesItem,
    },

    props: {
      moviesInfo: {
        type: Array,
        required: true,
      }
    },
  }
</script>
