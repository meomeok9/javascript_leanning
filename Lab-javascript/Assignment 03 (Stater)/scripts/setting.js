'use strict';
const cl = somthing => console.log(somthing);

const inputSize = document.getElementById('input-page-size');
const inputCategory = document.getElementById('input-category');
const btn = document.getElementById('btn-submit');

const submit = function (e) {
  let size = Number(inputSize.value);
  //validate
  if (size <= 0) {
    alert('Number Pages must greeter than 0!');
    return;
  }
  if (size === '') {
    alert('Page size set to default = 5');
    size = 5;
  }
  // save to local where ok
  if (confirm('Save setting ?')) {
    setNumberItemInPage(size);
    setCategory(inputCategory.value);
    alert('Your setting saved!');
  }
};

btn.addEventListener('click', submit);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') submit();
});
