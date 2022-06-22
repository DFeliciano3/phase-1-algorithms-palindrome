function isPalindrome(str) {
  return str.split('').every((CharacterData, i) => {
    return CharacterData === str[str.length - i - 1]; 
  });
  // Write your algorithm here
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

  console.log("=>", isPalindrome("mom")); 
  console.log("=>", isPalindrome("noon"));
  console.log("=>", isPalindrome("rotator"));
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("today"));
  console.log("=>", isPalindrome("now"));
  console.log("=>", isPalindrome("sam"));
}

module.exports = isPalindrome;
