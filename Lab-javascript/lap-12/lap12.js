/*
Tạo hàm 'checkDogs', nhận 2 array tuổi của chó ('dogJulia' và 'dogKate') và thực hiện những điều sau:

Julia phát hiện ra rằng chủ nhân của chú chó đầu tiên và cuối cùng thực ra nuôi mèo chứ không phải chó!
 Vì vậy, hãy tạo một bản sao array của Julia và xóa tuổi mèo khỏi array đã sao chép đó (không nên thay
     đổi các tham số hàm).
Tạo một array với cả dữ liệu của Julia (đã sửa) và của Kate.
Đối với mỗi chú chó còn lại, hãy in ra console đó là chú chó trưởng thành ("Dog number 1 is an adult,
 and is 5 years old") hay chó con ("Dog number 2 is still a puppy").
Chạy hàm cho cả hai tập dữ liệu kiểm tra.
2. Dữ liệu kiểm tra

Dữ liệu 1: Dữ liệu của Julia [3, 5, 2, 12, 7], dữ liệu của Kate [4, 1, 15, 8, 3]
Dữ liệu 2: Dữ liệu của Julia [9, 16, 6, 8, 3], dữ liệu của Kate [10, 5, 6, 1, 4]

*/
"use strict";
const cl = (obj) => console.log(obj);

const checkDogs = function (dogJulia = [], dogKate = []) {
  const copyDogJulia = dogJulia.slice(1);
  const allDogs = [...copyDogJulia, ...dogKate];
  for (let i = 0; i < allDogs.length; i++)
    cl(
      `${
        allDogs[i] < 3
          ? `Dog number ${i + 1} is still a puppy`
          : `Dog number ${i + 1} is an adult, and is ${allDogs[i]} years old`
      } `
    );
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
cl("------- round 2 ------");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/* -------------------------------------2----------------------------------------------
1. Nhiệm vụ của bạn:

Tạo hàm 'calcAverageHumanAge', hàm này nhận array tuổi của chó ('age') và thực hiện những việc sau theo thứ tự:

Tính tuổi của chó theo năm như tuổi người theo công thức sau: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

Loại trừ tất cả những chú chó có humanAge dưới 18 (điều này cũng giống như việc giữ những chú chó có humanAge từ 18 tuổi trở lên).

Tính humanage trung bình của các chú chó trưởng thành (bạn nên biết từ những thử thách khác về cách tính trung bình).
Chạy hàm cho hai tập dữ liệu kiểm tra.
2. Dữ liệu kiểm tra:

Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]
*/
cl("----------------------2-----------------------");
const calcAverageHumanAge = function (age = []) {
  // tinh tuoi cho theo nam nguoi
  const humanAgeCalc = [];
  age.forEach(function (value, index, arr) {
    humanAgeCalc.push(value <= 2 ? value * 2 : value * 4 + 16);
  });

  //Loại trừ tất cả những chú chó có humanAge dưới 18
  humanAgeCalc.forEach(function (value, index, arr) {
    if (value < 18) {
      arr.splice(index, 1);
    }
  });
  //Tính humanage trung bình của các chú chó trưởng thành
  let sum = 0;
  for (const age of humanAgeCalc) {
    sum += age;
  }
  let calcAverage = (sum / humanAgeCalc.length).toFixed(2);
  cl(humanAgeCalc);
  cl(`average : ${calcAverage}`);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
cl("-------------------value 2 ----------------");
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//--------------------------- 3----------------------
/*1. Nhiệm vụ của bạn

Viết lại hàm 'calcAverageHumanAge' từ Lab 12.2, nhưng lần này là hàm mũi tên và sử dụng chaining!

2. Dữ liệu kiểm tra

Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]

Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]
*/

console.clear();
const calcAverageHumanAge2 = (age) => {
  // tinh tuoi cho theo nam nguoi
  const humanAgeCalc = [];
  age.forEach((value) =>
    humanAgeCalc.push(value <= 2 ? value * 2 : value * 4 + 16)
  );

  //Loại trừ tất cả những chú chó có humanAge dưới 18
  humanAgeCalc.forEach((value, index) => {
    if (value < 18) {
      humanAgeCalc.splice(index, 1);
    }
  });
  //Tính humanage trung bình của các chú chó trưởng thành
  let sum = 0;
  humanAgeCalc.forEach((value) => (sum += value));
  cl(humanAgeCalc);
  cl(`average : ${(sum / humanAgeCalc.length).toFixed(2)}`);
};

// using map, filter , reduce

const useMapFilRedd = (arr) => {
  const _map = arr.map((value) => (value <= 2 ? value * 2 : value * 4 + 16));
  const _filter = _map.filter((age) => age >= 18);
  const _reduce = _filter.reduce(
    (acc, age, _, arr) => (acc += age / arr.length),
    0
  );
  cl(_map);
  cl(_filter);
  cl(_reduce);
};
calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
cl("------------------!-----------------");
useMapFilRedd([5, 2, 4, 1, 15, 8, 3]);
useMapFilRedd([16, 6, 10, 5, 6, 1, 4]);
