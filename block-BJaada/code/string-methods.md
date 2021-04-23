Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase();

     let houseName = 'Starks';
     houseName.toUpperCase() //
     ```
   - `toUpperCase:` The toUpperCase() method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable
3. `toLowerCase`
return:A new string representing the calling string converted to lower case.
 Example:
     ```js
     let name = 'Arya Stark';
     name.toLowerCase(); 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toLowerCase();

     let houseName = 'Starks';
     houseName.toLowerCase() //
     ```
   - `toUpperCase:` The toLowerCase() method returns the value of the string converted to lower case. toLowerCase() does not affect the value of the string str itself.
4. `trim`
return:A new string representing str stripped of whitespace from both its beginning and end.
 Example:
     ```js
     let name = 'Arya Stark';
     name.trim(); 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.trim();

     var orig = '   foo  ';
    console.log(orig.trim()); // 'foo'
     ```
   - `trim:`If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str), with no exception being thrown. 
5. `trimEnd`
return:A new string representing str stripped of whitespace from its end (right side).
 Example:
     ```js
     let name = 'Arya Stark';
     name.trimEnd(); 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.trimEnd();

     var orig = '   foo  ';
    console.log(orig.trimEnd()); // 'foo'
     ```
   - `trimEnd:`The trimEnd() method removes whitespace from the end of a string
6. `trimStart`
return:A new string representing str stripped of whitespace from its beginning (left side).
 Example:
     ```js
     let name = 'Arya Stark';
     name.trimStart(); 
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.trimStart();

     var orig = '   foo  ';
    console.log(orig.trimStart()); // 'foo'
     ```
   - `trimStart:`The trimStart() method removes whitespace from the beginning of a string
7. `concat`
return:The concat() method concatenates the string arguments to the calling string and returns a new string.
 Example:
     ```js
     const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
     ```
   - `concat:`The concat() method concatenates the string arguments to the calling string and returns a new string.

8. `endsWith`
return:The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate
 Example:
     ```js
     const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));
// expected output: false
     ```
   - `endsWith:`The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate
9. `includes`
return:The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
 Example:
     ```js
   const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
     ```
   - `includes:`The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
10. `indexOf`
return:The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 Example:
     ```js
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"
     ```
   - `indexOf:`The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

11. `lastIndexOf`
  return:The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
 Example:
     ```js
   const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// expected output: "The index of the first "dog" from the end is 52"
     ```
   - `LastindexOf:`The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
12. `padEnd`
return:The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
 Example:
     ```js
 
    const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// expected output: "200 
     ```
   - `padEnd:`The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.


13. `padStart`
return:The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
 Example:
     ```js
    const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"
     
     ```
   - `padstart:`The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
14. `repeat`
return:The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.



 Example:
     ```js
    const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

     
     ```
   - `repeat:`The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.



15. `replace`
return:The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
 Example:
     ```js
    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

     
     ```
   - `replace:`The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
16. `slice`
return:The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

 Example:
     ```js
    onst str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"
     ```
   - `slice:`The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
17. `split`
return:The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call. 

 Example:
     ```js
    const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
     ```
   - `split:`The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call. 
18. `substring`
return:The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

 Example:
     ```js
      const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"

     ```
   - `substring:`The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
