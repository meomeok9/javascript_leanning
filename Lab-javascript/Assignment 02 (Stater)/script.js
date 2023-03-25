"use strict";
function main() {
  const submitBtn = document.getElementById("submit-btn");
  const idInput = document.getElementById("input-id");
  const nameInput = document.getElementById("input-name");
  const ageInput = document.getElementById("input-age");
  const typeInput = document.getElementById("input-type");
  const weightInput = document.getElementById("input-weight");
  const lengthInput = document.getElementById("input-length");
  const colorInput = document.getElementById("input-color-1");
  const breedInput = document.getElementById("input-breed");
  const vaccinatedInput = document.getElementById("input-vaccinated");
  const dewormedInput = document.getElementById("input-dewormed");
  const sterilizedInput = document.getElementById("input-sterilized");

  //save to LocalStorage
  //function saveToStorage(key, value)

  function saveToStorage(key, pets) {
    localStorage.setItem(key, JSON.stringify(pets));
  }
  //function getFromStorage(key)
  function getFromStorage(petId) {
    return localStorage.getItem(petId);
  }

  function deleteItemFromStorage(id) {
    const petArr = JSON.parse(getFromStorage("allPets"));
    saveToStorage(
      "allPets", //   save     to
      petArr.filter((pet) => pet.id != id) //new arr within pet that contains id
    );
  }

  function checkpet(petinfo) {
    if (petinfo.id == "") {
      alert("ID must be filled out!");
      idInput.focus();
      return false;
    }
    //   else if (isUnique()) {
    //     alert("ID must unique!");
    //   }
    else if (petinfo.name == "") {
      alert("Name must be filled out");
      nameInput.focus();
      return false;
    } else if (petinfo.age == "") {
      alert("Age must be fill!");
      ageInput.focus();
      return false;
    } else if (parseInt(petinfo.age) < 1 || parseInt(petinfo.age) > 15) {
      alert("Age must be between 1 and 15!");
      ageInput.focus();
      return false;
    } else if (petinfo.type == "Select Type") {
      alert("Please select Type!");
      typeInput.focus();
      return false;
    } else if (petinfo.weight == "") {
      alert("Weight must be fill!");
      weightInput.focus();
      return false;
    } else if (parseInt(petinfo.weight) < 1 || parseInt(petinfo.weight) > 15) {
      alert("Weight must be between 1 and 15!");
      weightInput.focus();
      return false;
    } else if (petinfo.length == "") {
      alert("Length must be fill!");
      lengthInput.focus();
      return false;
    } else if (parseInt(petinfo.length) < 1 || parseInt(petinfo.length) > 100) {
      alert("Length must be 1~100!");
      lengthInput.focus();
      return false;
    } else if (petinfo.breed == "Select Breed") {
      alert("Please select Breed!");
      breedInput.focus();
      return false;
    } else return true;
  }

  function renderTableData(petArr) {
    let tableBodyEl = document.getElementById("tbody");
    tableBodyEl.innerHTML = "";
    petArr.forEach((element, i) => {
      let row = document.createElement("tr");
      i % 2
        ? (row.style.backgroundColor = "gray")
        : (row.style.backgroundColor = "white");
      row.innerHTML = `
    <th scope="row" id ="petId">${element.id}</th>
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
    }">Delete</button>
    </td>
    <td>"?"</td>
    `;
      tableBodyEl.appendChild(row);
    });
  }

  const strDate = function () {
    const now = new Date();
    const year = String(now.getFullYear());
    const month = `${now.getMonth()}`.padStart(2, "0");
    const date = `${now.getDate()}`.padStart(2, "0");
    const newMonth = parseInt(month) +1 ;
    return `${date}/${month}/${year}`;
  };

  function addpet() {
    let petinfo = {
      id: idInput.value,
      name: nameInput.value,
      age: ageInput.value,
      type: typeInput.value,
      weight: weightInput.value,
      length: lengthInput.value,
      color: colorInput.value,
      breed: breedInput.value,
      vaccinated: vaccinatedInput.checked,
      dewormed: dewormedInput.checked,
      sterilized: sterilizedInput.checked,
      date: strDate(),
    };

    let petArr = [];
    if (
      getFromStorage("allPets") != "undefined" &&
      getFromStorage("allPets") != null
    ) {
      petArr = JSON.parse(getFromStorage("allPets"));
    }
    if (checkpet(petinfo)) {
      petArr.push(petinfo);
      saveToStorage("allPets", petArr);
      idInput.value = petArr.length + 1; // just for test
      renderTableData(petArr);
      //document.forms["mypetinfo"].reset(); // reset form add value='#000000' to<input color>
    } else {
      //alert("~~~ Some thing wrong! ~~~");
    }
  }

  function deletePet(e) {
    if (e.target.classList.contains("btn-danger")) {
      // <button type="button" class="btn btn-danger" data-index="${element.id}">Delete</button>
      //delete from array and save it ➡ local
      deleteItemFromStorage(e.target.dataset.index);
      renderTableData(JSON.parse(getFromStorage("allPets")));
    }
  }
  const renderBreed = function () {
    let breedInput = document.getElementById("input-breed");
    if (typeInput.value != "Select Type") {
      breedInput.innerHTML = "";
      //example type = cat
      const Breeds = JSON.parse(getFromStorage("allBreeds")).filter(
        (breed) => breed.type == typeInput.value
      ); //=> all cat
      breedInput.options.add(new Option("Select Breed"));
      //=> all cat's breed.name that type == cat
      Breeds.forEach((br, i) => {
        breedInput.options.add(new Option(br.name));
      });
    }
  };

  //init just for test
  const init = function () {
    if (getFromStorage("allPets") != null && localStorage.length > 0)
      renderTableData(JSON.parse(getFromStorage("allPets")));
  };

  document.getElementById("tbody").addEventListener("click", deletePet);
  submitBtn.addEventListener("click", addpet);
  typeInput.addEventListener("change", renderBreed);

  init();
}

main();
