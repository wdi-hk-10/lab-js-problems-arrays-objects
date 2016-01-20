# JavaScript Problems

## Numbers and Strings

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];



### Q1 array.reduce - find the largest number

var largestValue = numbers.reduce(function (previous,current){
    return previous > current ? previous : current;
});

console.log('largest number: ' + largestValue);



### Q2 array.reduce - find the longest string

var longest = strings.reduce(function (previous,current) {
    return previous.length > current.length ? previous : current;
});

console.log('longest word: ' + longest);



### Q3 array.filter - find all even numbers

var evens = numbers.filter(function(numbers) {
    return (numbers & 1) === 0;
});

console.log('even numbers: ' + evens);



### Q4 array.filter - find all odd numbers

var odds = numbers.filter(function(numbers) {
    return (numbers & 1) !== 0;
});

console.log('odds numbers: ' + odds);



### Q5 array.filter - find words that contain 'is'

var wordsWithIs = strings.filter(function(strings) {
    return strings.indexOf("is") !== -1;
});

console.log('words containing is: ' + wordsWithIs);



### Q6 array.map - return an array with all numbers squared (x^2)

var squared = numbers.map(squared);

function squared(numbers) {
    return numbers*numbers;
}

console.log('squared array: ' + squared);



### Q7 array.every - assert that all numbers are divisible by 3

var divisibleByThree = numbers.every(divisibleByThree);

function divisibleByThree(element, index, array) {
  return element % 3 === 0;
}

console.log('All numbers divisible by three: ' + divisibleByThree);



### Q8 array.join - zip two arrays together

var evens = [12,4,18,6];
var odds = [1,9,7,11,3,101,5];

var joined = evens.join()+odds.join();
// work in progress as stil a string.

console.log('joined even and odd arrays: ' + joined);



### Q9 array.sort - sort the `joined` array from smallest to largest

var joined = [12,4,18,6,1,9,7,11,3,101,5];

var sorted = joined.sort(function (a, b) {
    return a - b;
});

console.log('sorted array ' + sorted);



### Q10 remove the last word from `strings`

var lastWord = strings.pop();

console.log('popped word: ' + lastWord);



### Q11 put a new word "yeah" in the array

var added = strings.push("yeah");

console.log('strings: ' + strings);



### Q12 remove the first word in the array

var word = strings.shift();

console.log('removed from start: ' + word);
console.log('strings: ' + strings);



### Q13 place a new word "this" at the start of the array

strings.unshift();

console.log('added to start: ' + 'this');
console.log('strings: ' + strings);



### Q14 grab a subset of elements, first 3 elements

var sliced = strings.slice(0,3);

console.log('subset: '  + sliced);
console.log('strings: ' + strings);



### Q15 replace the first three elements, with `"test"` and `"123"`

var x = strings.splice(0,3,"test","123");

console.log('removed: ' + x + ' and replaced with test, 123');
console.log(strings);



## Q16 Customers

Given the following array, return an array that:
- contains only customers whose firstname starts with 'J',
- where objects have a unique key `name` that combines the firstname and lastname,
- and sorted alphabetically

var customers = [
    { firstname : 'Joe',  lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];

var result = [
    { name : 'Jack White'},
    { name : 'Joe Blogs'},
    { name : 'John Smith'}
];


var result = [];
for (var i = 0; i < customers.length; i++) {
//work in progress
}