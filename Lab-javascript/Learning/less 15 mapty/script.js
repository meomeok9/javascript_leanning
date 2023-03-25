"use strict";
const cl = (some) => console.log(some);
// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

let map, mapEvent;
const err = function () {
  alert("False to load map!");
};

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);
  constructor(coords, distance, duration) {
    (this.coords = coords),
      (this.distance = distance),
      (this.duration = duration);
  }
  _setDescription() {
    //prittier - ignore
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.decription = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.type;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = "cycling";
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.type;
    this.speed = this._calcSpeed();
    this.elevationGain = elevationGain;
    this._setDescription();
  }
  _calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {
  #map;
  #mapZoomlevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    //get user posotion
    this._getPosition();

    //get data from local storage

    this._getLocalStorage();
    form.addEventListener("submit", this._newWordOut.bind(this));

    inputType.addEventListener("change", this._toogleElevationField);
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
  }
  _getPosition() {
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), err);
  }
  _loadMap(position) {
    if (navigator.geolocation) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      const coords = [latitude, longitude];
      this.#map = L.map("map").setView(coords, this.#mapZoomlevel);

      const mapBase = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"; // text
      const mapsAttribution = {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      };

      //show map
      L.tileLayer(mapBase, mapsAttribution).addTo(this.#map);

      //add action listioner
      //handling clicks on map
      this.#map.on("click", this._showForm.bind(this));
    }
    this.#workouts.forEach((work) => {
      this._renderWordoutMarker(work);
    });
  }
  _showForm(mapE) {
    form.classList.remove("hidden");
    inputDistance.focus();
    this.#mapEvent = mapE;
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputElevation.value =
      inputCadence.value =
        "";
    form.style.display = "none";
    form.classList.add("hidden");
    setTimeout(() => (form.style.display = "grid"), 1000);
  }
  _toogleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWordOut(e) {
    e.preventDefault();
    const validInputs = (...input) => input.every((inp) => isFinite(inp));
    const allPositive = (...input) => input.every((inp) => inp > 0);
    //validate
    //- get data from form

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // check validate

    //create object
    if (type === "running") {
      const cadence = +inputCadence.value;
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert("Not a number!");
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert("Not a number!");
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // add object to array
    this.#workouts.push(workout);

    // workout on marker
    this._renderWordoutMarker(workout);
    // render workout on list
    this._renderWorkout(workout);

    // hide form + lear input

    //clear input fields

    this._hideForm();

    this._setLocalStorage();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.decription}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
      `;
    if (workout.type === "running") {
      html += `<div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>`;
    }
    if (workout.type === "cycling") {
      html += `<div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>`;
    }
    form.insertAdjacentHTML("afterend", html);
  }
  _renderWordoutMarker(wo) {
    L.marker(wo.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${wo.type}-popup`,
        })
      )
      .setPopupContent(`${wo.type === "running" ? "🏃‍♂️" : "🚴‍♀️"}${wo.decription}`)
      .openPopup();
  }
  _moveToPopup(e) {
    const workoutEl = e.target.closest(".workout");
    //cl(workoutEl);
    if (!workoutEl) return;
    const workout = this.#workouts.find(
      (work) => work.id === workoutEl.dataset.id
    );
    this.#map.setView(workout.coords, this.#mapZoomlevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workouts"));
    if (!data) return;
    this.#workouts = data;

    this.#workouts.forEach((work) => {
      this._renderWorkout(work);
    });
  }
}

const app = new App();

/// reload
//location.reload();
