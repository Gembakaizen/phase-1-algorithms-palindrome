function isPalindrome(word) {
    // Write your algorithm here
    const len = word.length;
    for(let i = 0; i < len/2; i++){
      if(word[i] !== word[len -1 -i]){
        return false;
      }
    }
    return true;
  }
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("shawarma"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("lucy"));
}

module.exports = isPalindrome;
