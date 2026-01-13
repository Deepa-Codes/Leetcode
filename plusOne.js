
var plusOne = function(digits) {
   let str = digits.join('') 
   let num =BigInt(str) +BigInt(1)
   return Array.from(String(num), Number) ;
};
plusOne([1,2,3]) 