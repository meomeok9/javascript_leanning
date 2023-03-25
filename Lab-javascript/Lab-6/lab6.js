const value1 = [17, 21, 23];
const value2 = [12, 5, -5, 0, 4];
const printForecast = function(arr) {
                        for(var i=0; i<arr.length; i++){
                            console.log(`${arr[i]}ºC in ${i+1} day${i==0 ? '' :'s'}`)
                        }
                        };
printForecast(value1);
console.log('-----------------------------------------');
printForecast(value2);
