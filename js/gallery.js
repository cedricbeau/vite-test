export default () => ({

  images: [],
  searchValue:'',

  searchImages () {

    const API_URL = 'https://api.unsplash.com/';
    const ACCESS_KEY = 'r_mCOvANCj-PlFFs1hWyuCvRTOXibJCo1_aqTJp3oUQ';
    const searchValue = this.searchValue;

    fetch(`${API_URL}search/photos?page=1&query=${searchValue}&client_id=${ACCESS_KEY}`)
    .then(response => response.json())
    .then(data => {
      this.images = data.results;
    });
  },

  resetField () {
    this.searchValue = '';
  }
});