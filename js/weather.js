export default () => ({

  searchValue: '',

  searchCity () {

    const keyAPI = 'c38fb3ed6b0141f5b14d130e7f5d80a6';
    const baseAPI = 'http://api.weatherbit.io/v2.0/forecast/daily?';
    const searchValue = this.searchValue;

    let insertDatas = '';

    fetch(`${baseAPI}lang=fr&city=${searchValue}&days=6&key=${keyAPI}`)
    .then(response => response.json())
    .then(response => {

      const city = response.city_name;
      const lon = response.lon;
      const lat = response.lat;
      const timezone = response.timezone;
      const countryCode = response.country_code;

      const self = this;

      // Display city infos
      this.displayCityInfos(city, lon, lat, timezone, countryCode);

      // Display weathers informations
      const results = response.data;

      results.map(function(result) {

        console.log(result)

        // formatDate
        const litteralDate = self.formatDate(result.datetime)

        insertDatas += `
          <div>
            <div class="p-4 rounded-sm border border-slate-300">
              <img src="https://www.weatherbit.io/static/img/icons/${result.weather.icon}.png" class="block mx-auto">
              <div class="text-center">${litteralDate}</div>
              <div class="text-center mb-4"><strong>${result.weather.description}</strong></div>
              <div class="flex justify-between"><span>Température : </span><strong>${Math.round(result.temp)}°</strong></div>
              <div class="flex justify-between"><span>Température minimum : </span><strong>${Math.round(result.min_temp)}°</strong></div>
              <div class="flex justify-between mb-3 pb-4 border-b"><span>Température maximum : </span><strong>${Math.round(result.high_temp)}°</strong></div>
              <div class="flex justify-between"><span>Vitesse du vent : </span><strong>${Math.round(result.wind_spd)} m/s</strong></div>
              <div class="flex justify-between"><span>Direction du vent : </span><strong>${Math.round(result.wind_dir)}°</strong></div>
              <div class="flex justify-between mb-3 pb-4 border-b"><span>Sens du vent : </span><strong>${result.wind_cdir_full}</strong></div>
              <div class="flex justify-between"><span>Probabilité de précipitations : </span><strong>${Math.round(result.pop)}%</strong></div>
              <div class="flex justify-between"><span>Précipitation accumulée : </span><strong>${Math.round(result.precip)} mm</strong></div>
              <div class="flex justify-between mb-3 pb-4 border-b"><span>Taux de précipitation : </span><strong>${result.precip} mm/hr</strong></div>
              <div class="flex justify-between"><span>Couverture nuageuse : </span><strong>${result.clouds}%</strong></div>
              <div class="flex justify-between"><span>Visibilité : </span><strong>${result.vis} Km</strong></div>
            </div>
          </div>
        `
      })

      // Insert datas
      document.getElementById('datasResult').innerHTML = insertDatas;
    })
    .catch(error => alert("Erreur : " + error));
  },

  // add City
  displayCityInfos (name, lon, lat, timezone, country) {
    let insertCity = '';

    insertCity += `
    <div class="bg-white my-4 p-4 rounded-sm border border-slate-300">
      <div class="flex justify-between"><span>Ville :</span> <strong>${name}</strong></div>
      <div class="flex justify-between"><span>Longitude :</span> <strong>${lon}</strong></div>
      <div class="flex justify-between"><span>Lattitude :</span> <strong>${lat}</strong></div>
      <div class="flex justify-between"><span>Fuseau horaire :</span> <strong>${timezone}</strong></div>
      <div class="flex justify-between"><span>Pays :</span> <strong>${country}</strong></div>
    </div>
    `
    // Insert datas
    document.getElementById('cityResult').innerHTML = insertCity
  },

  // formatDate
  formatDate(responseDate) {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const date = new Date(responseDate);
    const day = days[date.getDay()];
    const dayNum = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    const month = months[date.getMonth()];
    const litteralDate = `${day} ${dayNum} ${month}`;

    return litteralDate;
  },


  resetField () {
    this.searchValue = '';
  }
});