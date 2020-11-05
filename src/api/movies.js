import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_KEY = '17ecf765';

export default {
  getMoviesOrSeries (name, year) {
    const params = {
      s: name,
      apiKey: API_KEY,
    };

    if (year) {
      params.y = year;
    }

    return Vue.http.get('http://www.omdbapi.com/', { params });
  },

  getSingleMovieOrSeries (id) {
    return Vue.http.get(`http://www.omdbapi.com/?i=${id}&apiKey=${API_KEY}`);
  }
};
