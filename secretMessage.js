// discover the secret mesagge follow the clues and code the instructions

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.pop());
console.log(secretMessage.length);
console.log(secretMessage.push('to', 'program'));
secretMessage[7] = 'right'
console.log(secretMessage.shift());
console.log(secretMessage.unshift('Programming'))
secretMessage.splice(6, 5, 'know');
console.log(secretMessage.join(' '));
