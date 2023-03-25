"use strict";
const cl = (something) => console.log(something);
const btn = document.querySelector(".btn-country");
const container = document.querySelector(".countries");
class Str {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    this._setStr();
  }
  _setStr() {
    this.url = `https://geocode.xyz/${this.lat},${this.lng}?geoit=json&auth=242129576074928522752x117330`;
  }
  getUrl() {
    return this.url;
  }
}

const renderContry = function (data, className = "") {
  //   cl("data on renderContry:");
  cl(data);
  const lang = data.languages[Object.getOwnPropertyNames(data.languages)];

  const [objName] = Object.getOwnPropertyNames(data.currencies);
  const [currencePr, symbolPr] = Object.getOwnPropertyNames(
    data.currencies[Object.getOwnPropertyNames(data.currencies)]
  );

  const currence = data.currencies[objName][currencePr];
  const symbol = data.currencies[objName][symbolPr];

  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
          <h3 class="country__name">${data.name.official}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${lang}</p> 
          <p class="country__row"><span>💰</span>${symbol} ${currence}</p>
          </div>
          </article>`;
  //  cl(html);
  container.insertAdjacentHTML("beforeend", html);
  container.style.opacity = 1;
};

const whereAmI = function (lat, lng) {
  const url = new Str(lat, lng);
  container.textContent = "";
  fetch(url.getUrl())
    .then((res) => {
      if (!res.ok) throw new Error(`Too much request per sec${res.status}`);
      return res.json();
    })
    .then((data) => {
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Cant connect to server !!! ${res.status}`);
      return res.json();
    })
    .then((dataJSON) => {
      const [data] = dataJSON;
      renderContry(data);
    })
    .catch((err) => cl(`Some things wrong!!! ${err} .`))
    .finally();
};

btn.addEventListener("click", function (e) {
  whereAmI(52.508, 13.381);
});

// whereAmI(19.037, 72.873);
// whereAmI(19.037, 72.873);
