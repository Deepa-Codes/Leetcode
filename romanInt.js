

var romanToInt = function(s) {
    let map = {
        I:1,
        V:5,
        X:10,       
        L:50,
        C:100,
        D:500,  
        M:1000
    }
        let t = 0;    
for(let i=0; i<s.length; i++){ 
let c=map[s[i]];   
let n=map[s[i+1]]; 
   
if(n && c<n) t =c-t;
else t =c+t;  
    }
    return t
}; 
romanToInt('III');
// console.log(romanToInt('III'));.
//   IIIVI - only one small before large
// MCMXCIV 

// console.log(romanToInt("MCMXCIV"), 'function');  
