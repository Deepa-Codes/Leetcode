var isPalindrome = function(x) { //121
    if(x<0){
        return false
    }else if(x===0){
        return true
    }else{ 
          let reversed = 0;
          let original = x;;
 while(x!=0){
            let lastElement = Math.floor(x%10); //1
            reversed =reversed*10 + lastElement; 
            console.log('reversed', reversed);
             x = Math.floor(x/10) //12
   }    
   return reversed === original;
      }
};
// isPalindrome(prompt("Enter a number to check if it's palindrome: "))