
const calculator = document.getElementById("Calculate-btn");
const healthyBtn = document.getElementById("healthy-btn");
const showallBtn = document.getElementById("show-all-btn");
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

const petArr = [];
const healthypets =[];

function isUnique(){
  var i = 0;
  petArr.forEach((pet) => {
    if(pet.id==document.getElementById("input-id").value){
    document.getElementById("input-id").focus();
    i++;
    } 
  });
  if(i==0){
    return false;
  } else return true;
}

function setShowAllPetBtn(){
  healthyBtn.style.visibility ="hidden";
  showallBtn.style.visibility ="visible";
}
function setShowHealthyPetBtn(){
  healthyBtn.style.visibility ="visible";
  showallBtn.style.visibility ="hidden";
  reRenderTable(petArr);
}
// tao ham chi hien thi rieng pet heathy
function renderHeathyPet(){
  let tableBodyEl = document.getElementById('tbody');
	tableBodyEl.innerHTML = '';
  healthypets.forEach((element) => {
    //let pweigh = element.weigh;
    //let plength = element.length;
    //let ptype = element.type;
    //element.bmi = caculatorBIM(pweigh, plength, ptype).round(2);
    let row = document.createElement('tr');
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
    <td>${element.date.toLocaleDateString("en-US")}</td>
    <td>"?"</td>
    <td><button type="button" class="btn btn-danger" onclick="deletePet('${element.id}')">Delete</button>
    </td>
    `;
    tableBodyEl.appendChild(row);
    setShowAllPetBtn();
  });
}
function checkpet(){
let petinfo ={
  id : idInput.value,
  name :nameInput.value,
  age : ageInput.value,
  type : typeInput.value,
  weigh : weightInput.value,
  length : lengthInput.value,
  color : colorInput.value,
  breed : breedInput.value,
  vaccinated : vaccinatedInput.checked,
  dewormed : dewormedInput.checked,
  sterilized : sterilizedInput.checked,
  date : new Date()
};
  if (petinfo.id == "") {
    alert("ID must be filled out!");
    idInput.focus();
    return false;
  }else if(isUnique()){
    alert("ID must unique!");
  }else if (petinfo.name == "") {
    alert("Name must be filled out");
    nameInput.focus();
    return false;
  }else if (petinfo.age == "") {
    alert("Age must be fill!");
    ageInput.focus();
    return false;
  }else if(parseInt(petinfo.age) < 1 || parseInt(petinfo.age) > 15){
    alert("Age must be between 1 and 15!");
    ageInput.focus();
    return false;
  }else if (petinfo.type == "Select Type") {
    alert("Please select Type!");
    typeInput.focus();
    return false;
  }else if (petinfo.weigh == "") {
    alert("Weight must be fill!");
    weightInput.focus();
    return false;
  }else if(parseInt(petinfo.weigh) < 1 || parseInt(petinfo.weigh) > 15){
    alert("Weight must be between 1 and 15!");
    weightInput.focus();
    return false;
  }else if (petinfo.length == ""){
    alert("Length must be fill!");
    lengthInput.focus();
    return false;
  }else if(parseInt(petinfo.length)<1 || parseInt(petinfo.length)>100){
    alert("Length must be 1~100!");
    lengthInput.focus();
    return false;
  }else if (petinfo.breed == "Select Breed") {
    alert("Please select Breed!");
    breedInput.focus();
    return false;
  }else return true;
}

function renderTableData(petArr) {
  let tableBodyEl = document.getElementById('tbody');
	tableBodyEl.innerHTML = '';
  //for(var i =0;petArr[i]; i++){
    //get bi x or check
    //alert("~~~~~~~~"+petArr[i].id +" id :"+ petArr[i].name +"!~~~~~~~~");
    //let strVaccin;
    //let strDewor;
    //let strSter;
    //if(vaccinated.checked){strVaccin="check";} else {strVaccin="x";} //nếu "checked" thi thêm vào chuỗi "check" ko thì thêm "x"
    //if(dewormed.checked){strDewor="check";} else {strDewor="x";}
    //if(sterilized.checked){strSter="check";} else {strSter="x";}
  //const row = document.createElement('tr');
 // row.innerHTML ="<th scope='row'>"+ petArr[i].id + "</th>"
  //+"<td>" + petArr[i].name + "</td>"
  //+"<td>" + petArr[i].age + "</td>"
  //+"<td>" + petArr[i].type + "</td>"
 // +"<td>" + petArr[i].weight + " KG</td>"
  //+"<td>" + petArr[i].length + " CM</td>"
  //+"<td>" + petArr[i].breed + "</td>"
  //+"<td>"
  // + "<i class='bi bi-square-fill' style='color: "+ petArr[i].color +"'></i>"
  //+"</td>"
  //+"<td><i class='bi bi-"+petArr[i].vaccinated.checked? "check" : "x"+"-circle-fill'></i></td>" //???
  //+"<td><i class='bi bi-"+petArr[i].dewormed.checked? "check" : "x"+"-circle-fill'></i></td>"  // ???
 // +"<td><i class='bi bi-"+petArr[i].sterilized.checked? "check" : "x"+"-circle-fill'></i></td>"  //???
 // +"<td>" + petArr[i].date + "</td>";
 // +"<td><button type='button' class='btn btn-danger'>Delete</button></td>"

 // tableBodyEl.appendChild(row);
    
  petArr.forEach((element) => {
    let row = document.createElement('tr');
    element.type =="Cat" ? row.style.backgroundColor ="gray" :row.style.backgroundColor ="yellow" ;
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
    <td>${element.date.toLocaleDateString("en-US")}</td>
    <td>"?"</td>
    <td><button type="button" class="btn btn-danger" onclick="deletePet('${element.id}')">Delete</button>
    </td>
    `;
    tableBodyEl.appendChild(row);    
  });
}
function addpet(){
  let petinfo ={
    id : idInput.value,
    name :nameInput.value,
    age : ageInput.value,
    type : typeInput.value,
    weight : weightInput.value,
    length : lengthInput.value,
    color : colorInput.value,
    breed : breedInput.value,
    vaccinated : vaccinatedInput.checked,
    dewormed : dewormedInput.checked,
    sterilized : sterilizedInput.checked,
    date : new Date()
  };
  if(checkpet()){
    petArr.push(petinfo);
    if(petinfo.vaccinated==true && petinfo.dewormed==true && petinfo.sterilized==true) // healthy ? add to arr : else do nothing
    healthypets.push(petinfo); //hoac gan 1 bien bang true 
    renderTableData(petArr);
    document.forms["mypetinfo"].reset(); // reset form
  }else{
    alert("~~~~~~~~failed!~~~~~~~~"); //tét
  }
}
function renderCalculateTable(){
  let tableBodyEl = document.getElementById('tbody');
	tableBodyEl.innerHTML = '';
    
  petArr.forEach((element) => {
    let pweight = parseInt(element.weight);
    let plength = parseInt(element.length);
    let ptype = element.type;
    let bmi = caculatorBIM(pweight, plength, ptype);
    let row = document.createElement('tr');
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
    <td>${element.date.toLocaleDateString("en-US")}</td>
    <td>${bmi.toFixed(2)}</td>
    <td><button type="button" class="btn btn-danger" onclick="deletePet('${element.id}')">Delete</button>
    </td>
    `;
    tableBodyEl.appendChild(row);    
  });
}
 submitBtn.addEventListener('click', addpet);
 healthyBtn.addEventListener('click', renderHeathyPet);
 showallBtn.addEventListener('click' , setShowHealthyPetBtn);
 calculator.addEventListener ('click', renderCalculateTable);

function deletePet(idDelete){
  let indexDelete = petArr.findIndex(x=>x.id==idDelete);
  if(confirm("Delete pet id: " +idDelete + " ?")){
    petArr.splice(indexDelete, 1);
    healthypets.forEach ((pet) =>{
      if(pet.id==idDelete)
      healthypets.splice(healthypets.indexOf(idDelete), 1);
    });
    alert("Deleted!");
    reRenderTable(petArr);
  };

}

function reRenderTable(petArr){
  let tableBodyEl = document.getElementById('tbody');
	tableBodyEl.innerHTML = '';
  petArr.forEach((element) => {    
    let row = document.createElement('tr');
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
    <td>${element.date.toLocaleDateString("en-US")}</td>
    <td>"?"</td>
    <td><button type="button" class="btn btn-danger" onclick="deletePet('${element.id}')">Delete</button>
    </td>
    `;
    tableBodyEl.appendChild(row);
  });
}
function caculatorBIM(pweight,plength,type){
  if (type =="Dog"){ 
    return (pweight * 703) / plength ** 2;
  }else if(type =="Cat"){
    return (pweight * 886) / plength ** 2;
  }
}

