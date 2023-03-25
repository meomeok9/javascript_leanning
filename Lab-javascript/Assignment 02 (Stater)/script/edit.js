"use strict";
const dgEBI = (something) => document.getElementById(something);

function edit() {
  const allpets = JSON.parse(localStorage.getItem("allPets"));

  const breedInput = dgEBI("input-breed");

  const renderTableData = function () {
    let tableBodyEl = dgEBI("tbody");
    tableBodyEl.innerHTML = "";
    allpets.forEach((element, i) => {
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
      <td><button type="button" class="btn btn-danger" data-index="${
        element.id
      }">Edit</button>
      </td>
      <td>"?"</td>
      `;
      tableBodyEl.appendChild(row);
    });
  };

  const renderBreedOption = function (type) {
    breedInput.innerHTML = "";
    const Breeds = JSON.parse(localStorage.getItem("allBreeds")).filter(
      (breed) => breed.type == type
    );
    breedInput.options.add(new Option("Select Breed"));
    Breeds.forEach((br) => {
      breedInput.options.add(new Option(br.name));
    });
  };

  //open edit form func
  const openEdit = function (e) {
    e.preventDefault();
    if (e.target.classList.contains("btn-danger")) {
      //show form
      dgEBI("container-form").classList.remove("hide");
      //select target object
      const pet =
        allpets[allpets.findIndex((pet) => pet.id === e.target.dataset.index)];
      //render breed on breed select form
      renderBreedOption(pet.type);

      //push value of target edit to form
      dgEBI("input-id").value = pet.id;
      dgEBI("input-name").value = pet.name;
      dgEBI("input-age").value = pet.age;
      dgEBI("input-type").value = pet.type;
      dgEBI("input-weight").value = pet.weight;
      dgEBI("input-length").value = pet.length;
      dgEBI("input-color-1").value = pet.color;
      dgEBI("input-breed").value = pet.breed;
      dgEBI("input-vaccinated").checked = pet.vaccinated;
      dgEBI("input-dewormed").checked = pet.dewormed;
      dgEBI("input-sterilized").checked = pet.sterilized;
    }
  };

  const renderpetBreed = function () {
    if (dgEBI("input-type").value != "Select Type")
      renderBreedOption(dgEBI("input-type").value);
  };

  //validate
  const checkpet = function (petinfo) {
    if (petinfo.id == "") {
      alert("ID must be filled out!");
      return false;
    } else if (petinfo.name == "") {
      alert("Name must be filled out");
      return false;
    } else if (petinfo.age == "") {
      alert("Age must be fill!");
      return false;
    } else if (parseInt(petinfo.age) < 1 || parseInt(petinfo.age) > 15) {
      alert("Age must be between 1 and 15!");
      return false;
    } else if (petinfo.type == "Select Type") {
      alert("Please select Type!");
      return false;
    } else if (petinfo.weight == "") {
      alert("Weight must be fill!");
      return false;
    } else if (parseInt(petinfo.weight) < 1 || parseInt(petinfo.weight) > 15) {
      alert("Weight must be between 1 and 15!");
      return false;
    } else if (petinfo.length == "") {
      alert("Length must be fill!");
      return false;
    } else if (parseInt(petinfo.length) < 1 || parseInt(petinfo.length) > 100) {
      alert("Length must be 1~100!");
      return false;
    } else if (petinfo.breed == "Select Breed") {
      alert("Please select Breed!");
      return false;
    } else return true;
  };
  // save the edit
  const saveEdit = function (e) {
    //index cua pet co id trong input-id
    const index = allpets.findIndex(
      (pet) => pet.id === dgEBI("input-id").value
    );
    // tao 1 pet moi
    let newPet = {
      id: dgEBI("input-id").value,
      name: dgEBI("input-name").value,
      age: dgEBI("input-age").value,
      type: dgEBI("input-type").value,
      weight: dgEBI("input-weight").value,
      length: dgEBI("input-length").value,
      color: dgEBI("input-color-1").value,
      breed: dgEBI("input-breed").value,
      vaccinated: dgEBI("input-vaccinated").checked,
      dewormed: dgEBI("input-dewormed").checked,
      sterilized: dgEBI("input-sterilized").checked,
      date: allpets[index].date,
    };
    //check neu ok thi day de len pet cu
    if (checkpet(newPet)) {
      allpets[index] = newPet;
      //save to local
      localStorage.setItem("allPets", JSON.stringify(allpets));
      //hide edit form
      dgEBI("container-form").classList.add("hide");
      //change table after edit
      renderTableData();
    }
  };

  const init = function () {
    if (allpets?.length > 0) renderTableData(allpets);
  };

  //window.addEventListener('load',init());
  dgEBI("tbody").addEventListener("click", openEdit);
  dgEBI("input-type").addEventListener("change", renderpetBreed);
  dgEBI("submit-btn").addEventListener("click", saveEdit);
  init();
}

edit();
