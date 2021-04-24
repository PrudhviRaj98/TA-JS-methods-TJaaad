// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");
// - Add two new words in the strings array "called" and "sentance"
strings.push("called");
strings.push("sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ");
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includ
// - Find all the words that contain 'is' use string method 'indexOf'


let allIs = strings.filter(string =>strings.includes("is"));
  


// - Check if all the numbers in numbers array are divisible by three use array method (every)
let isDivisible = (element) => element % 3 === 0 ;
console.log(numbers.every(isDivisible)); 

// -  Sort Array from smallest to largest
let isSort = (a , b) => a - b; 
[...numbers].sort(isSort);
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
[...numbers].sort((a,b) => a-b).pop();

// - Find longest string in strings
let = longest = strings.sort((a,b)=>a.length - b.length).pop();
// - Find all the even numbers
numbers.filter(num => num%2===0);
// - Find all the odd numbers
numbers.filter(num => num%2!==0);
// - Place a new word at the start of the array use (unshift)
strings.unshift("raj");
// - Make a subset of numbers array [18,9,7,11]
let newOne = [18,9,7,11];
newOne.slice(1,4); 
// - Make a subset of strings array ['a','collection']
let pp = ['a','collection'];
pp.slice(0);
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(numbers.indexOf(12),1,1221);
// - Replace words in strings array with the length of the word
let stringLength = console.log(strings.map(string =>String.length));
// - Find the sum of the length of words using above question
 stringLength.reduce((acc,cv)=>{
   acc = acc + cv;
  return acc
 }0);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filteredCustomers = customers.filter((ele) =>
 ele.firstname.startswith("j")
)
// - Create new array with only first name
let filteredCustomers = customers.map((ele) =>
 ele.firstname
);
// - Create new array with all the full names (ex: "Joe Blogs")
let filteredCustomers = customers.map((ele) =>
 ele.join("")
);
// - Sort the array created above alphabetically
let filteredCustomers = customers.filter(([...ele]) =>
 ele.sort()
);
// - Create a new array that contains only user who has at least one vowel in the firstname.
let filteredCustomers = customers.map((ele) =>
if(
 customer.firstname.toLowerCase().includes("a") ||
 customer.firstname.toLowerCase().includes("e") ||
 customer.firstname.toLowerCase().includes("i") ||
 customer.firstname.toLowerCase().includes("o") ||
 customer.firstname.toLowerCase().includes("u") ||
){
  return true
}else {
  return false;
}
);