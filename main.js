// Array.prototype.myMap = function (num,num1) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this.property(i)) {
//       result.push(num.call(num1, this[i], i, this));
//     }
//   }
//   return result;
// };

// =============

// Array.prototype.myFilter = function (num) {
//   var result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// var newArr = arr.myFilter(1);

// console.log(newArr);

// ========
// Array.prototype.mySome = function(callback, thisArg) {
//     for (let i = 0; i < this.length; i++) {
//         if (this.hasOwnProperty(i)) {
//             if (callback.call(thisArg, this[i], i, this)) {
//                 return true;
//             }
//         }
//     }

//     return false;
// };
// const numbers = [1, 3, 5, 8];

// const hasEven = numbers.mySome(num => num % 2 === 0);

// console.log(hasEven);
