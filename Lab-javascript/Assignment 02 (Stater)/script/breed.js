"use strict";
function breedFunc() {
  const inputBreed = document.getElementById("input-breed");
  const selectType = document.getElementById("input-type");
  const btnSubmit = document.getElementById("submit-btn");
  const tbody = document.getElementById("tbody");

  function saveToStorage(key, breed) {
    localStorage.setItem(key, JSON.stringify(breed));
  }
  //function getFromStorage(key)
  function getFromStorage(breed) {
    return localStorage.getItem(breed);
  }

  function deleteItemFromStorage(name) {
    const breedArr = JSON.parse(getFromStorage("allBreeds"));
    saveToStorage(
      "allBreeds", //   save     to
      breedArr.filter((breed) => breed.name != name) //new arr within breed that contains id
    );
  }

  const renderBreedTable = function (breedArr) {
    tbody.innerHTML = "";
    breedArr.forEach((e, i) => {
      let row = document.createElement("tr");
      //tao 2 mau khac nhau cho row
      i % 2
        ? (row.style.backgroundColor = "gray")
        : (row.style.backgroundColor = "white");

      //create row content
      row.innerHTML = `
        <th">${i + 1}</th>
        <td>${e.name}</td>
        <td>${e.type}</td>
        <td>
        <button type="button" class="btn btn-danger" data-index="${
          e.name
        }">Delete</button>
        </td>
        `;
      tbody.appendChild(row);
    });
  };

  const addBreed = function () {
    const breed = {
      name: inputBreed.value,
      type: selectType.value,
    };

    let breedArr = [];

    //cl(getFromStorage("allBreeds"));

    if (
      getFromStorage("allBreeds") != "undefined" &&
      getFromStorage("allBreeds") != null
    ) {
      breedArr = JSON.parse(getFromStorage("allBreeds"));
    }

    if (breed.name != "" && breed.type != "Select Type") {
      breedArr.push(breed);

      saveToStorage("allBreeds", breedArr);

      renderBreedTable(breedArr);
    } else
      alert(breed.name == "" ? "Enter name Breed !" : "Select Type Breed !");
  };

  const deleteBreed = function (e) {
    if (e.target.classList.contains("btn-danger")) {
      // <button type="button" class="btn btn-danger" data-index="${e.name}">Delete</button>

      deleteItemFromStorage(e.target.dataset.index);

      // re-draw table

      renderBreedTable(JSON.parse(getFromStorage("allBreeds")));
    }
  };
  const init = function () {
    if (localStorage.length > 0)
      renderBreedTable(JSON.parse(getFromStorage("allBreeds")));
  };

  btnSubmit.addEventListener("click", addBreed);
  tbody.addEventListener("click", deleteBreed);
  init();
}
breedFunc();
