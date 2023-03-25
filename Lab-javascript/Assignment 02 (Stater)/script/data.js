"use strict";
//const cl = something => console.log(something);
const inputElement = document.getElementById("input-file");

const exportFile = function (e) {
  const data = JSON.stringify(localStorage);
  const blob = new Blob([data], { type: "Array" });
  saveAs(blob, "data.JSON");
};

const importFile = function (e) {
  const selectedFile = document.getElementById("input-file").files[0];
  const reader = new FileReader();

  let LitsPets;
  reader.addEventListener(
    "load",
    function () {
      
      LitsPets = JSON.parse(reader.result); //=> object chua 2 thuoc tinh. 2 ten thuoc tinh la 2 key. 2 value chinh la data cua 2 key do
      //cl(LitsPets);
      const [key0, key1] = Object.getOwnPropertyNames(LitsPets); //=>string:[allPets,allBreeds]

      if (confirm("Apply this ?")) {
        localStorage.setItem(key0, LitsPets[key0]); // set 'allPets'
        localStorage.setItem(key1, LitsPets[key1]); // Set 'allBreeds'
        alert("All data applied, change tab to see result !");
      }
    },
    false
  );
  reader.readAsText(selectedFile);
};

document.getElementById("import-btn").addEventListener("click", importFile);
document.getElementById("export-btn").addEventListener("click", exportFile);
