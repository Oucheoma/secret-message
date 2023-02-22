let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//removes last string
secretMessage.pop()
// console.log(secretMessage)

//logs the number of strings in text
// console.log(secretMessage.length)

//add the strings to the end of the text
secretMessage.push('to', 'program')
// console.log(secretMessage)

//to chack the text/string at index 7 to right
secretMessage[7]='right'
// console.log(secretMessage)

//removes the first element in the array. I ttakes noa rgumen
secretMessage.shift()
console.log(secretMessage)

//to add an element to the beginning of an arrasy
secretMessage.unshift('Programming');
// console.log(secretMessage)

// to remove some strings .splice(indexToStart, numberOfIndices, 'stringToAdd')
secretMessage.splice(6,5, 'know')
// console.log(secretMessage)

// joins strings to as a sentence, text
// console.log(secretMessage.join(' '))
