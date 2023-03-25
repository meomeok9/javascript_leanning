"use strict";
const cl = (something) => console.log(something);
const ce = (something) => console.error(something);
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//------------------------------------------------------------------//

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
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getContryAndNeighbour = function (contryName) {
  // ajaj 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${contryName}`); // by name /name/=name
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    //cl(data);
    //  cl(data.name);
    //render contry
    renderContry(data);

    // get neighbour contry(2)
    const neighbour = data.borders; //==>array [0,1,2,3...]
    if (!neighbour) return;

    // ajaj 2
    neighbour.forEach((nei) => {
      const request2 = new XMLHttpRequest();
      request2.open("GET", `https://restcountries.com/v3.1/alpha/${nei}`); //  by country code /alpha/=code
      request2.send();
      request2.addEventListener("load", function () {
        const [data2] = JSON.parse(this.responseText);
        //cl(data2);

        renderContry(data2, "neighbour");
      });
    });
  });
};
//getContryAndNeighbour("portugal");

//fetch

// cl(request);
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getCOuntryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`)
    .then((responseJSON) => {
      //   cl(responseJSON);
      const [data] = responseJSON;
      cl(data);
      renderContry(data);
      const neighbour = data.borders; //==>array [0,1,2,3...]
      //aaswwhfrcl(neighbour);
      if (!neighbour) throw new Error("no neighbour found");

      let neighbours = [];

      return (neighbours[0] = getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour[0]}`,
        "Contry not found !!!"
      ));
    })
    .then((responsesJson) => {
      const [data] = responsesJson;
      renderContry(data);
    })
    .catch((err) => {
      renderError(`something went wrong ${err.message}. Try again`);
    })
    .finally(() => console.log("final"));
};
// btn.addEventListener("click", function () {
//   getCOuntryData("usa");
// });
//getCOuntryData("u43423234sa");

// built a new promise
function lotte() {
  const lotteryPromise = new Promise(function (resolve, reject) {
    cl("-------------------------------------");
    setTimeout(function () {
      if (Math.random() >= 0.5) {
        resolve("You win !");
      } else {
        reject(new Error("you lose"));
      }
    }, 2000);
  });

  lotteryPromise.then((res) => cl(res)).catch((err) => ce(err));
}
const getPosition = function () {
  return new Promise(function (location, reject) {
    navigator.geolocation.getCurrentPosition(location, reject);
  });
};
//getPosition().then((pos) => cl(pos));

const whereAmI = async function (country) {
  try {
    countriesContainer.textContent = "";

    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error(`Cant found country !!! ${res.status}`);
    const [data] = await res.json();
    renderContry(data);
  } catch (err) {
    renderError(`${err.message}`);
  }
};

btn.addEventListener("click", function () {
  whereAmI("portugal");
});

// (async function(){
//   try{
//     await whereAmI('portugal');
//   }catch(err){
//     ce(`2: ${err.message}`);
//   }
//   cl('final end!');
// })();

const get3Countries = async function (c1, c2, c3) {
  try {
    //  const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    //  const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    //  const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    cl(data.map((d) => d[0].capital));
  } catch (err) {
    ce(err.message);
  }
};
get3Countries("portugal", "usa", "vietnam");

//promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  cl(res[0]);
})();

const timeout = async function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("request took too long"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/italy`),
  timeout(2), // set to 0.1
])
  .then((res) => cl(res[0]))
  .catch((err) => ce(err.message));

//promise.allSettled

Promise.allSettled([
  Promise.resolve("sucsess"),
  Promise.reject("error"),
  Promise.resolve("an other sucsess"),
]).then((res) => cl(res));

// promise.any
Promise.any([
  Promise.resolve("sucsess"),
  Promise.reject("error"),
  Promise.resolve("an other sucsess"),
])
  .then((res) => cl(res))
  .catch((err) => cl(err.message));
