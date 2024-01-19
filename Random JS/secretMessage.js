let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// Removes last element of an array
secretMessage.pop();
// Adds elements to the end of array
secretMessage.push('to', 'Program');
// Changing array element at index 7 (after using .indexOf() to find its index.)
secretMessage[7] = 'right'
// Removes first element of an array
secretMessage.shift();
// Adds element to the start of an array
secretMessage.unshift('Programming');
// array.splice(indexToStart, numberOfIndices, 'stringToAdd'); Removes and replaces elements of an array
secretMessage.splice(6, 5, 'know');
// Returns the array elements joined together (like in last comment)
console.log(secretMessage.join());
//Output: Programming,is,not,about,what,you,know,it,is,about,what,you,can,figure,out.,-2015,,Chris,Pine,,Learn,to,Program


