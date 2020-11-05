<template>
  <div>
    <div class="filters">
      <button class="filters__button -red" @click="filterByMovie">Filter by movie</button>
      <button class="filters__button -green" @click="filterBySerie">Filter by serie</button>    
    </div>
  </div>
</template>

<style lang="scss">
  .filters {
    @media (max-width: 768px) {
      margin-top: 40px;
      text-align: center;
    }

    &__button {
      appearance: none;
      color: #fff;
      border: none;
      cursor: pointer;
      padding: 10px 20px;
      margin-left: 20px;
      border-radius: 5px;

      @media (max-width: 992px) {
        margin-left: 0;
        margin-right: 20px;
      }

      @media (max-width: 768px) {
        padding: 10px;
      }

      &.-red {
        background: orangered;
      }

      &.-green {
        background: rgb(42, 109, 42);
      }
    }
  }
</style>

<script>
  export default {
    name: 'FilterComponent',

    props: {
      filterInfo: {
        type: Array,
        required: true,
      }
    },

    data () {
      return {
        filteredData: null,
      }
    },

    methods: {
      filterByMovie ()  {
        this.filteredData = this.filterInfo.filter(item => item.Type === 'movie');
        this.$emit('filtering', this.filteredData);
      },

      filterBySerie ()  {
        this.filteredData = this.filterInfo.filter(item => item.Type === 'series');
        this.$emit('filtering', this.filteredData);
      },
    },
  }
</script>
