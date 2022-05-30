export default () => ({

  pokemons: [],
  pokemonDetails: [],
  searchPokemon: 'Rechercher par numéro',
  isLoading: false,

  init () {
    this.displayPokemons();
  },

  displayPokemons () {
    this.isLoading = true;
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(response => {
      if (!response.ok) alert(`Something went wrong: ${response.status} - ${response.statusText}`)
      return response.json()
    })
    .then(response => {
      this.isLoading = false;
      this.pokemons = response.results.map(pokemon => pokemon)
    })
  },

  displayPokemonDetails () {
    const searchPokemon = this.searchPokemon;
    const url = `https://pokeapi.co/api/v2/pokemon/${searchPokemon}/`;
    let HTMLstr = '';

    fetch(url)
    .then(response => {
      if (!response.ok) alert(`Something went wrong: ${response.spokemontatus} - ${response.statusText}`)
      return response.json()
    })
    .then(response => {
      this.pokemonDetails = response
      console.log('detail : ', this.pokemonDetails)


      HTMLstr += `<div><img src="${this.pokemonDetails.sprites.front_default}"></div><div><strong>name :</strong> ${this.pokemonDetails.name}</div><div><strong>height :</strong> ${this.pokemonDetails.height}</div>`;
      document.getElementById('detail').innerHTML = HTMLstr;
    })
  },

  displayDetails (url) {
    let HTMLstr = '';

    fetch(url)
    .then(response => {
      if (!response.ok) alert(`Something went wrong: ${response.spokemontatus} - ${response.statusText}`)
      return response.json()
    })
    .then(response => {
      this.pokemonDetails = response
      console.log('detail : ', this.pokemonDetails)


      HTMLstr += `<div><img src="${this.pokemonDetails.sprites.front_default}"></div><div><strong>name :</strong> ${this.pokemonDetails.name}</div><div><strong>height :</strong> ${this.pokemonDetails.height}</div>`;
      document.getElementById('detail').innerHTML = HTMLstr;
    })
  },

  resetField () {
    this.searchPokemon = '';
  },

});