// console.log(Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]))
let total = process.argv.length;
let sum = 0;
for (let index = 2; index < total; index++) {
  sum += Number(process.argv[index]); 
  
}
console.log(sum)