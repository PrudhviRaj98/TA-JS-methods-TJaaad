let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord (arr){
   return [...arr].sort((a,b) => a.length - b.length).pop() ;
}
// - Convert the above array "words" into an array of length of word instead of word.
words.map((ele)=> ele.length);
// - Create a new array that only contains word with atleast one vowel.
function checkVowel (word){
  if(word.includes("a") || word.includes("e") || word.includes("i") || word.includes("o") || word.includes("u") ){
    return word
  }
}
words.filter((ele) => checkVowel(ele));
// - Find the index of the word "rhythm"
words.indexOf((w)=> w == "rhythm");

// - Create a new array that contians words not starting with vowel.
function checkVowel (word){
  if(word.startsWith("a") || word.startsWith("e") || word.startsWith("i") || word.startsWith("o") || word.startsWith("u") ){
    return false
  }else{
    return word
  }
}
words.filter((ele) => checkVowel(ele));
// - Create a new array that contianse words not ending with vowel
words.filter((ele) => !checkVowel(ele[ele.length - 1]));


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray (arr){
  return arr.reduce((acc , cv) => {
    return acc + cv;
  },0)
}


// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function multiplied (arr){
  return arr.filter(ele => 
     ele % 3 == 0 
  );
}
multiplied(numbers);
// - Create a new array that contains only even numbers
function newArrey (arr){
  return arr.filter((ele) =>
    ele % 2 === 0
  );
}
newArrey(numbers);
// - Create  a new array that contains only odd numbers.
function newArrey (arr){
  return arr.filter((ele) =>
    ele % 2 !== 0
  );
}
newArrey(numbers);
// - Create a new array that should have true for even number and false for odd numbers.
let odd = numbers.map((num) => num % 2 === 0);
// - Sort the above number in assending order.
function sorting (arr){
  return [...arr].sort((a,b) => a - b );
}
// - Does sort mutate the original array?
Ans: yes sort it will mutate the original array
// - Find the sum of the numbers in the array.
function sumOf (arr){
  return arr.reduce((acc , cv) => {
      return acc + cv
  },0);
}
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength (arr){
  return arr.map((w) => w.length).reduce((acc , cv) =>{
    return acc + cv;
  },0)/arr.length
}

