var largestValue = numbers.reduce(function(a,b){
  return a > b ? a : b;
});
console.log('largest number: ' + largestValue);

var longest = strings.reduce(function(a,b){
  return a.length > b.length ? a : b;
});
console.log('longest word: ' + longest);

var evens = numbers.filter(function(a){
  return a % 2 === 0;
});
console.log('even numbers: ' + evens);

var odds = numbers.filter(function(a){
  return a % 2 === 1;
});
console.log('odds numbers: ' + odds);

//var wordsWithIs = strings.filter(function(a){
//  return a ___________________
//});
//console.log('words containing is: ' + wordsWithIs);

var squared = numbers.map(function(a) {
  return Math.pow(a,2)
});
console.log('squared array: ' + squared);

var divisibleByThree = numbers.every(function(a) {
  return a % 3 === 0;
});
console.log('All numbers divisible by three: ' + divisibleByThree);

//var joined = numbers.join();
//console.log('joined even and odd arrays: ' + joined);

//var sorted = ___;
//console.log('sorted array ' + sorted);

//var lastWord = ___;
//console.log('popped word: ' + lastWord);

strings.push('yeah');
console.log('strings: ' + strings);

var word = strings.shift();
console.log('removed from start: ' + word);
console.log('strings: ' + strings);

strings.unshift(['this']);
console.log('added to start: ' + 'this');
console.log('strings: ' + strings);

var sliced = strings.slice(0, 3);
console.log('subset: '  + sliced);
console.log('strings: ' + strings);

var x = strings.unshift('test', '123');
console.log('removed: ' + x + ' and replaced with test, 123');
console.log(strings);


contains only customers whose firstname starts with 'J',
where objects have a unique key name that combines the firstname and lastname,
and sorted alphabetically
