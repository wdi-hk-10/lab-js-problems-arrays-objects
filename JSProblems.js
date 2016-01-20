
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

//array.reduce - find the largest number

var largestValue = numbers.reduce(function (a,b) {
  if (a>b) {
    return a;
  } else return b;
});
console.log('largest number: ' + largestValue);

//array.reduce - find the longest string

var longest = strings.reduce(function (a,b) {
  if (a.length>b.length) {
    return a;
  } else return b;
});
console.log('longest word: ' + longest);

//array.filter - find all even numbers

var evens = numbers.filter(function (a){
  return a%2==0;
});
console.log('even numbers: ' + evens);
//array.filter - find all odd numbers

var odds = numbers.filter(function (a){
  return a%2!==0;
});
console.log('odds numbers: ' + odds);

//array .filter - find words that contain 'is'

var wordsWithIs = strings.filter(function (a){
  return a.includes("is");
});
console.log('words containing is: ' + wordsWithIs);

//array.map - return an array with all numbers squared (x^2)

var squared = numbers.map(function (a){
  return a*a;
});

console.log('squared array: ' + squared);

//array.every - assert that all numbers are divisible by 3

var divisibleByThree = numbers.every(function (a){
  return a%3==0;
});
console.log('All numbers divisible by three: ' + divisibleByThree);

//array.join - zip two arrays together

var joined =  evens.join()+","+odds.join();
console.log('joined even and odd arrays: ' + joined);

//array.sort - sort the joined array from smallest to largest

var sorted = joined.split(",").sort(function (a,b){
  return a-b;
});
console.log('sorted array ' + sorted);

//remove the last word from strings

var lastWord = strings.pop();
console.log('popped word: ' + lastWord);

//put a new word "yeah" in the array

strings.push("yeah");
console.log('strings: ' + strings);

//remove the first word in the array

var word = strings.shift();
console.log('removed from start: ' + word);
console.log('strings: ' + strings);

//place a new word "this" at the start of the array

strings.unshift("this");
console.log('added to start: ' + 'this');
console.log('strings: ' + strings);

//grab a subset of elements, first 3 elements

var sliced = strings.slice(0,3);
console.log('subset: '  + sliced);
console.log('strings: ' + strings);

//replace the first three elements, with "test" and "123"

var x = strings.splice(0,3,"test","123");
console.log('removed: ' + x + ' and replaced with test, 123');
console.log(strings);

//Customers
//Given the following array, return an array that:
//contains only customers whose firstname starts with 'J',
//where objects have a unique key name that combines the firstname and lastname,
//and sorted alphabetically

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

