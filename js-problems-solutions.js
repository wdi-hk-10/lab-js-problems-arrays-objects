var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

var largestValue = numbers.reduce(function(a, b) {
    return a > b ? a: b;
});
console.log('largest number: ' + largestValue);

console.log("----------------------------------");

var longest = strings.reduce(function(a,b) {
    return a.length > b.length ? a: b;
});
console.log('longest word: ' + longest);

console.log("----------------------------------");

var evens = numbers.filter(function(numbers) {
    return (numbers & 1) === 0;
});
console.log('even numbers: ' + evens);

console.log("----------------------------------");

var odds = numbers.filter(function(numbers) {
    return (numbers % 2 ) === 1;
});
console.log('odds numbers: ' + odds);

console.log("----------------------------------");

var wordsWithIs = strings.filter(function(strings) {
    return strings.match("is");
});
console.log('words containing is: ' + wordsWithIs);

console.log("----------------------------------");

var squared = numbers.map(Math.sqrt);
console.log('squared array: ' + squared);
console.log("----------------------------------");

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

var divisibleByThree = numbers.every(function (numbers) {
    return (numbers % 3) === 0;
});
console.log('All numbers divisible by three: ' + divisibleByThree);
console.log("----------------------------------");

var joined = odds.join() + (",") + evens.join();
console.log('joined even and odd arrays: ' + joined);
console.log("----------------------------------");

// var sorted = joined.sort();
// console.log('sorted array ' + sorted);
// console.log("----------------------------------");

var lastWord = strings.pop();
console.log('popped word: ' + lastWord);
console.log("----------------------------------");

strings.push("yeah");
console.log('strings: ' + strings);

console.log("----------------------------------");

var word = strings.shift();
console.log('removed from start: ' + word);
console.log('strings: ' + strings);
console.log("----------------------------------");

strings.unshift("this");
console.log('added to start: ' + 'this');
console.log('strings: ' + strings);
console.log("----------------------------------");

var sliced = strings.slice(0,3);;
console.log('subset: '  + sliced);
console.log('strings: ' + strings);

console.log("----------------------------------");

var x = strings.splice(0,3,"test",123);
console.log('removed: ' + x + ' and replaced with test, 123');
console.log(strings);
console.log("----------------------------------");

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

// 1. contains only customers whose firstname starts with 'J',
// 2. where objects have a unique key name that combines the firstname and lastname,
// 3. and sorted alphabetically

var firstNameJ = customers.filter(function(customers) {
    return customers.firstname(0)='J';
})

var wordsWithIs = strings.filter(function(strings) {
    return strings.match("is");
});
console.log('words containing is: ' + wordsWithIs);