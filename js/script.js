// filter method

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); 



// for each methods

const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); 
  }
}); 

console.log(words);




// reduce mwthods


let numbers = [1, 2, 3, 5];
let sum = numbers.reduce(function (value1,value2) {
    return  value1+value2
});        
console.log(sum);