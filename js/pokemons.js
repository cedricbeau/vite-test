export default () => ({

  pokemons: [],

  isLoading: false,

  init () {
    this.isLoading = true;
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(response => {
      if (!response.ok) alert(`Something went wrong: ${response.status} - ${response.statusText}`)
      return response.json()
    })
    .then(response => {
      this.isLoading = false;
      //this.pokemons = response.items.map(item => item.volumeInfo)
      this.pokemons = response
      console.log(this.pokemons)
    })
  }
});