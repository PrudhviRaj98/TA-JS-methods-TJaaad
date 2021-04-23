Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
- Parameter: parameter is a string 
   - Return: it returns a string combined of multiple string as a single string . if parameters contains only one string it returns same string . and if string is empty no seperator then each element is seperated by commas. 
   - Example:
     ```js
     var a = ['Wind', 'Water', 'Fire'];
      a.join();      // 'Wind,Water,Fire'
      a.join(', ');  // 'Wind, Water, Fire'
      a.join(' + '); // 'Wind + Water + Fire'
      a.join('');    // 'WindWaterFire'
     ```
   - `join` basically join combines multiple strings as a single string 


3. `flat`
- Parameter:it accepts one parmeter to specify depth  
   - Return: it produces a new array with combining of all subarrays
   - Example:
     ```js
     let numbers = [1,2,3,[4,5]];
     numbers.flat(1);//[1,2,3,4,5]
     let marks = [32,33,[[[45,56]]];
     marks.flat(2);//[32,33,[45,46]];
     ```
   - `flat`flat means it finally produces an array by combining of multiple subarrays depending upon on depth provided. And depth defaults to 1 


4. `push`
- Parameter: element to add at the end of an array
   - Return: return new length of an array
   - Example:
     ```js
     let sports = ["football" , "volleyball"];
     sports.push("green");//["football" , "volleyball", "green"];
     ```
   - `push`push adds an element at the end of an array and return new length of an array 


5. `indexOf`
- Parameter: it accepts any element to locate in an array
   - Return: it returns first index of element or -1 as default
   - Example:
     ```js
     let sports = ["football" , "volleyball"];
     console.log(sports.indexof("volleyball"));//1
     ```
   - `indexof`basically it finds the element and returns the index value and it only finds first index 
   value 


6. `lastIndexOf`
- Parameter: it accepts any element to locate in an array
   - Return: it returns first index of element or -1 as default
   - Example:
     ```js
     const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
     console.log(animals.lastIndexOf("tiger"))//2
     ```
   - `lastIndexOf` :baciaally it finds a value from last of array

7. `includes`
- Parameter: it accepts a value to search in an entries
   - Return: it returns true or false 
   - Example:
     ```js
     const pets = ['cat', 'dog', 'bat'];
     console.log(pets.includes("dog")); //true
     ```
   - `includes`basically it finds a value among entries and returns true or false based on value found or not

8. `reverse`
- Parameter: there is no parameters 
   - Return: it returns a reverse array
   - Example:
     ```js
     const pets = ['cat', 'dog', 'bat'];
     console.log(pets.reverse);//["bat" , "dog" , "cat"];
     ```
   - `reverse`it basically reverse an array the last element in an array will be the first element

9. `every`
- Parameter: element to process an array

   - Return: it returns true or false
   - Example:
     ```js
     const isBelowThreshold = (currentValue) => currentValue < 40;

      const array1 = [1, 30, 39, 29, 10, 13];

      console.log(array1.every(isBelowThreshold));
     ```
   - `every` basically returns true when al the element of the array returns true with callback function

10. `shift`
- Parameter:it acccepts the index value 
   - Return: it return the array with removing certain index
   - Example:
     ```js
     colours=["red","blue","green"];
     colours.shift(1);//["red", "green"];
     ```
   - `shift`it deletes the 0th index and shift all other values to the lower index  

11. `splice`
- Parameter: it accepts the index values start and end and value for replacing
   - Return: it returns empty array if nothing is replaced or removed or it returns removed array
   - Example:
     ```js
     
     ```
   - `splice` basically it is used for removing or replacing elements

12. `find`
- Parameter: element of an array
   - Return: it returns the searched element
   - Example:
     ```js
     const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
     ```
   - `find`find returns the first value that matches the condition

13. `unshift`
- Parameter: 
   - Return: 
   - Example:
     ```js
     const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
     ```
   - `unshift`adding the elemetns at the start of the array 

14. `findIndex`
- Parameter: it accepts elemet of an array
   - Return: it returns the index of element
   - Example:
     ```js
     const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
     ```
   - `findIndex`returns the first value index that matches the condition 


15. `filter`
- Parameter: it accepts element of an array
   - Return: it returns new array
   - Example:
     ```js
     const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
     ```
   - `filter`it always returns smaller or smaller size of an array moreover it converts anything into boolean and returns it it creates a new array while returning



17. `forEach`
- Parameter: it accepts element of an array
   - Return: it return undefined
   - Example:
     ```js
      const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
     ```
   - `foreach`basically it takes array into stream of bits and perform operation but it returns undefined  

18. `map`
- Parameter: it accepts element of an array
   - Return: it returns in the form of an array
   - Example: 
     ```js
     var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

     ```
   - `map`it basically returns an array 

19. `pop`
- Parameter: it accepts a parameter that needs to be popped out
   - Return: it returns removed element
   - Example:
     ```js
     var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
     ```
   - `pop `basically it removes element from an array

20. `reduce`
- Parameter: it accepts callback and intial value
   - Return: returns type of intial value
   - Example:
     ```js
     const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
     ```
   - `reduce` it aceepts intial value and call back and perform actions and return type of intial value

21. `slice`
- Parameter: it accepts two parametes as start and end 
   - Return: it returns subsarray 
   - Example:
     ```js
     var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
     ```
   - `slice`basically accepts 2 values and returns a array

 
