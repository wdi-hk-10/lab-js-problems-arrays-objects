var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

// 1. array.reduce - find the largest number

var largestValue = numbers.reduce(function(a,b){
  if (b>a) {
    a = b;
  } return a;
});

console.log('largest number: ' + largestValue);

// 2. array.reduce - find the longest string

var longest = strings.reduce(function(a,b){
  if (b.length > a.length){
    a = b;
  } return a;
});
console.log('longest word: ' + longest);

// 3. array.filter - find all even numbers

var evens = numbers.filter(function(element){
  if (element%2===0){
    return element;
  }
});
console.log('even numbers: ' + evens);

// 4. array.filter - find all odd numbers

var odds = numbers.filter(function(element){
  return element%2===1;
});
console.log('odds numbers: ' + odds);

// 5. array .filter - find words that contain 'is'

var wordsWithIs = strings.filter(function(element){
  for (var i = 0; i < element.length; i++){
    if (element[i]==='i'&&element[i+1]==='s'){
      return element;
    }
  }
});
console.log('words containing is: ' + wordsWithIs);

// 6. array.map - return an array with all numbers squared (x^2)

var squared = numbers.map(function(element){
  return element*element;
});

console.log('squared array: ' + squared);

// 7. array.every - assert that all numbers are divisible by 3

var divisibleByThree = numbers.every(function(element){
  return element%3===0;
});
console.log('All numbers divisible by three: ' + divisibleByThree);

// 8. array.join - zip two arrays together

var joined = evens.join()+odds.join().split(',');
console.log('joined even and odd arrays: ' + joined);

// 9. array.sort - sort the joined array from smallest to largest

var sorted = joined.sort(function(a,b){
  return a-b;
});
console.log('sorted array ' + sorted);

// 10. remove the last word from strings

var lastWord = strings.pop();
console.log('popped word: ' + lastWord);

// 11. put a new word "yeah" in the array

strings.push("yeah");
console.log('strings: ' + strings);

// 12. remove the first word in the array

var word = strings.shift();
console.log('removed from start: ' + word);
console.log('strings: ' + strings);

// 13. place a new word "this" at the start of the array

strings.unshift('this');
console.log('added to start: ' + 'this');
console.log('strings: ' + strings);

// 14. grab a subset of elements, first 3 elements

var sliced = strings.slice(0,3);;
console.log('subset: '  + sliced);
console.log('strings: ' + strings);

// 15. replace the first three elements, with "test" and "123"

var x = strings.splice(0,3,"test","123")
console.log('removed: ' + x + ' and replaced with test, 123');
console.log(strings);