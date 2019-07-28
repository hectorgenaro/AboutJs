function isPal(str) {
return str === str.split('').reverse().join('');
}

console.log(isPal('abba'))
console.log(isPal('oso'))
console.log(isPal('aabbbaa'))
 
