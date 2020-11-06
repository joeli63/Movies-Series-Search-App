<template>
  <div class="container">
    <div class="search">
      <form
        @submit.prevent="searchMovie"
      >
        <input 
          v-model="desiredTitle"
          type="text"
          placeholder="Search for the movie"
          class="search__input"
        >
        <input
          v-model="desiredYear"
          type="text"
          placeholder="Search for the year"
          class="search__input"
        >
        <button
          @click="searchMovie"
          class="search__button"
        >
          SEARCH
        </button>
      </form>
      <div v-if="showMoviesOrSeries">
        <Filters
          :filterInfo="moviesInfo"
          @filtering="filterValue" 
        />
      </div>
    </div>
    <div v-if="showMoviesOrSeries">
      <MoviesSeriesList :moviesInfo="filterData" />
      <div v-if="showSeriesError">
        <h2>Sorry, there is no such a serie.</h2>
      </div>
    </div>
    <div v-else-if="showErrorMessages">
      <h2>There is no result, please try again.</h2>
    </div>
    <loading-overlay
      v-else
      :active="isLoading"
      :is-full-page="fullPage"
    />
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

  .search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
    margin-top: 30px;
    
    @media (max-width: 768px) {
      display: block;
      margin-bottom: 40px;
    }

    &__input {
      width: 200px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-right: 40px;

      @media (max-width: 992px) {
        margin-right: 20px;
        width: 150px;
      }

      @media (max-width: 600px) {
        width: 90%;
        padding: 10px 5% 10px 5%; 
        margin-right: 0;
        display: block;
        margin-bottom: 15px;
      }
    }

    &__button {
      appearance: none;
      background: #43A8DD;
      color: #fff;
      border: none;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 5px;

      @media (max-width: 992px) {
        padding: 10px;
      }

      @media (max-width: 768px) {
        padding: 10px 20px;
      }
    }
  }
</style>

<script>
  import MoviesSeriesList from '@/components/listItems';
  import Filters from '@/components/filters';
  import MoviesOrSeriesService from '@/services/moviesOrSeries';

  export default {
    name: 'Home',
  
    components: {
      MoviesSeriesList,
      Filters,
    },

    data () {
      return  {
        moviesInfo: null,
        isLoading: false,
        fullPage: true,
        desiredTitle: '',
        desiredYear: '',
        filteredData: null,
      }
    },

    computed: {
      showMoviesOrSeries () {
        return this.isLoading === false && this.moviesInfo;
      },

      showErrorMessages () {
        return this.isLoading === false && this.filterData === undefined;
      },
      
      showSeriesError () {
        return this.filteredData && this.filteredData.length === 0;
      },

      filterData () {
        return this.filteredData !== null ? this.filteredData : this.moviesInfo;
      }
    },

     methods: {
      filterValue (value) {
        this.filteredData = value;
      },

      searchMovie () {
        this.isLoading = true;
        MoviesOrSeriesService.getMoviesOrSeries(this.desiredTitle, this.desiredYear)
        .then(response => {
          this.filteredData = null;
          this.moviesInfo = response.body.Search;
         })
        .catch(error => {
          console.log(error);
        });
        setTimeout(() => {
          this.isLoading = false
        }, 500);
      },
    },
  }
</script>

