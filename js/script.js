// filter method

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// console.log(array.filter(isPrime)); 



// for each methods

// const words = ["one", "two",'jighhgr', "three", "four"];
// words.forEach((word) => {
//   console.log(word);
//   if (word === "two") {
//     words.shift(); 
//   }
// }); 

// console.log(words);




// reduce mwthods


// let numbers = [1, 2, 3, 5];
// let sum = numbers.reduce(function (value1,value2) {
//     return  value1+value2
// });        
// console.log(sum);


// index of method
  // var str = 'Departed Train';
  // var index = str.indexOf('train');
  // console.log(index);


  // push method
  // let number = [10, 20, 30];
  // console.log(number);
  // let length = number.push(40);
  // console.log(number);


  // pop method
  // let num = [10, 20, 30,100];
  // console.log(num);
  // let len = num.pop();
  // console.log(num);



  // shift method
  // var arr = [ "happy","GFG", "Geeks", "for", "Geeks"];
  // var value = arr.shift();
  // console.log(value);
  // console.log(arr);
  // console.log(arr.length)

  // unshift method
//   const array1 = [1, 2, 3];
// console.log(array1.unshift(2, 1));
// console.log(array1);


// concat methods

// const str1 = 'black';
// const str2 = 'red';
// console.log(str1.concat(',', str2));
// console.log(str2.concat(', ', str1));


// every methods


// const ages = [32, 33, 19, 40];
// ages.every(checkAge)
// function checkAge(age) {
//   return age > 18;
// }
// console.log(ages.every(checkAge))



// var num3=13;
// var num4=0;
// var temp=num3
// while(num3<0){
//   num3=++num3
// }
// console.log(temp)


function myfun(){
let num =[1,2,3,4,5,6]
console.log(num[0])
let num1=num[0]
console.log(num1)
let num2= parseInt(prompt("enter the value"))
if(num1==num2){
  console.log("same values")
}
else{
  console.log("not a same number")
}
}
document.getElementById("hi").innerHTML=""










