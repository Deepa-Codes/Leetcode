
var mergeAlternately = function(word1, word2) {
  let max=Math.max(word1.length, word2.length); console.log('max', max); 
  
  let result='';
  for(let i=0;i<max; i++){
    if(word1[i]) result+=word1[i];
    if(word2[i]) result+=word2[i];
  }
  return result;
};
let fun=mergeAlternately('abc', 'pqrstu');
console.log(fun);
