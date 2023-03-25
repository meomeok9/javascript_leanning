"use strict";

const dgEBI = (something) => document.getElementById(something);

function search() {
  const allpets = JSON.parse(localStorage.getItem("allPets"));

  const idInput = dgEBI("input-id");
  const nameInput = dgEBI("input-name");
  const typeInput = dgEBI("input-type");
  const breedInput = dgEBI("input-breed");
  const vaccinatedInput = dgEBI("input-vaccinated");
  const dewormedInput = dgEBI("input-dewormed");
  const sterilizedInput = dgEBI("input-sterilized");

  const renderTableData = function (petArr) {
    let tableBodyEl = dgEBI("tbody");
    tableBodyEl.innerHTML = "";
    petArr.forEach((element, i) => {
      let row = document.createElement("tr");
      i % 2
        ? (row.style.backgroundColor = "gray")
        : (row.style.backgroundColor = "white");
      row.innerHTML = `
      <th>${element.id}</th>
      <td>${element.name}</td>
      <td>${element.age}</td>
      <td>${element.type}</td>
      <td>${element.weight} kg</td>
      <td>${element.length} cm</td>
      <td>${element.breed}</td>
      <td>
      <i class="bi bi-square-fill" style="color: ${element.color}"></i>
      </td>
      <td><i class="bi ${
        element.vaccinated ? "bi-check-circle-fill" : "bi-x-circle-fill"
      }"></i></td>
      <td><i class="bi ${
        element.dewormed ? "bi-check-circle-fill" : "bi-x-circle-fill"
      }"></i></td>
      <td><i class="bi ${
        element.sterilized ? "bi-check-circle-fill" : "bi-x-circle-fill"
      }"></i></td>
      <td>${element.date}</td>
      `;
      tableBodyEl.appendChild(row);
    });
  };

  const renderBreed = function (type) {
    breedInput.innerHTML = "";
    const Breeds = JSON.parse(localStorage.getItem("allBreeds")).filter(
      (breed) => breed.type == type
    );
    breedInput.options.add(new Option("Select Breed"));
    Breeds.forEach((br) => {
      breedInput.options.add(new Option(br.name));
    });
  };

  const renderpetBreed = function () {
    if (dgEBI("input-type").value != "Select Type")
      renderBreed(dgEBI("input-type").value);
  };

  const searchfc = function (e) {
    e.preventDefault();
    let result = [];
    const os = {
      id: idInput.value,
      name: nameInput.value,
      type: typeInput.value,
      breed: breedInput.value,
      vaccinated: vaccinatedInput.checked,
      dewormed: dewormedInput.checked,
      sterilized: sterilizedInput.checked,
    };
    //use 7 filetr for search
    result = allpets
      .filter((pet) => pet.id.includes(os.id) || os.id === "")
      .filter((pet) => pet.name.includes(os.name) || os.name === "")
      .filter((pet) => pet.type.includes(os.type) || os.type === "Select Type")
      .filter(
        (pet) => pet.breed.includes(os.breed) || os.breed === "Select Breed"
      )
      .filter(
        (pet) => pet.vaccinated === os.vaccinated || os.vaccinated === false
      )
      .filter((pet) => pet.dewormed === os.dewormed || os.dewormed === false)
      .filter(
        (pet) => pet.sterilized === os.sterilized || os.sterilized === false
      );
    //cl(result); for test
    renderTableData(result);
  };

  const init = function () {
    if (allpets.length > 0) renderTableData(allpets);
  };

  dgEBI("input-type").addEventListener("change", renderpetBreed);
  dgEBI("find-btn").addEventListener("click", searchfc);
  init();
}

search();