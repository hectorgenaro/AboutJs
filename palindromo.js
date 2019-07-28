isPalindrome = (string) => {
  let strLen = Math.floor(string.length / 2);
  string = string.toLocaleLowerCase();

  for (let i = 0; i < strLen; i++) {
    if (string[i] !== string[strLen - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(" "))
console.log(isPalindrome('abba'))
console.log(isPalindrome('oso'))
console.log(isPalindrome('aabbbaa'))
