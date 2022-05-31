export default () => ({

  pokemons: [],
  pokemonDetails: [],
  searchPokemon: 'Rechercher par id ou par nom',
  show: false,

  init () {
    this.displayPokemons();
  },

  /**
   * Display all pokemons (name only)
   */
  displayPokemons () {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(response => {
      if (!response.ok) alert(`Something went wrong: ${response.status} - ${response.statusText}`)
      return response.json()
    })
    .then(response => {
      this.pokemons = response.results.map(pokemon => pokemon)
    })
  },

  /**
   * Handle Search Submit
   */
  searchPokemonDetails () {
    const searchPokemon = this.searchPokemon;
    const url = `https://pokeapi.co/api/v2/pokemon/${searchPokemon}/`;

    this.displayPokemonDetails(url);
  },

  /**
   *
   * @param {String} url
   * Display pokemon details
   */
  displayPokemonDetails (url) {
    let HTMLstr = '';
    let abilitiesStr = '';
    let statsStr = '';
    let typesStr = '';

    fetch(url)
    .then(response => {
      if (!response.ok) alert(`Something went wrong: ${response.spokemontatus} - ${response.statusText}`)
      return response.json()
    })

    .then(response => {
      this.show = true;
      this.pokemonDetails = response;

      /**
       * Main infos
       */
      HTMLstr += `<img src="${this.pokemonDetails.sprites.other.home.front_default}" width="256" height="256"><div class="flex flex-wrap justify-between"><span class="pr-4 font-medium text-slate-400">nom :</span> ${this.pokemonDetails.name}</div><div class="flex flex-wrap justify-between"><span class="pr-4 font-medium text-slate-400">taille :</span> ${this.pokemonDetails.height}</div><div class="flex flex-wrap justify-between"><span class="pr-4 font-medium text-slate-400">poids :</span> ${this.pokemonDetails.weight}</div><div class="flex flex-wrap justify-between"><span class="pr-4 font-medium text-slate-400">Expérience :</span> ${this.pokemonDetails.base_experience}</div>`;

      document.getElementById('detail').innerHTML = HTMLstr;

      /**
       * Types
       */
      const types = this.pokemonDetails.types;

      types.forEach(type => {
        typesStr += `<div class="flex flex-wrap justify-between"><div><span class="pr-4 font-medium text-slate-400">Slot ${type.slot} :</span></div><div>${type.type.name}</div></div>`;
      });

      document.getElementById('types').innerHTML = typesStr;

      /**
       * Abilities
       */
      const abilities = this.pokemonDetails.abilities;

      abilities.forEach((ability, index) => {
        abilitiesStr += `<div class="flex flex-wrap justify-between"><span class="pr-4 font-medium text-slate-400">Compétence ${index + 1} :</span> ${ability.ability.name}</div>`
      });

      document.getElementById('abilities').innerHTML = abilitiesStr;

      /**
       * Stats
       */
      const stats = this.pokemonDetails.stats;

      stats.forEach(stat => {
        statsStr += `<div class="flex flex-wrap justify-between"><span class="pr-4 font-medium text-slate-400">${stat.stat.name} :</span> ${stat.base_stat}</div>`;
      });

      document.getElementById('stats').innerHTML = statsStr;
    })
  },

  /**
   * Empty search field
   */
  resetField () {
    this.searchPokemon = '';
  },

});