const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
input = input.split("\n");
let str = "";
const a = input[0];
const b = input[1];
for (let i = 0; i < a.length; i++) {
  if (a[i] === b[i]) {
    str += "0";
  } else {
    str += "1";
  }
}
ws.write(str + "\n");
const fs = require('fs');
