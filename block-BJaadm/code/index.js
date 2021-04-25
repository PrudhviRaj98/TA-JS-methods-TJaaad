let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopelName = persons.map((ele) => ele.name);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((ele) => ele.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((ele) => ele.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'


let filtered = peopelName.filter((ele) => 
  ele.startsWith("J") || ele.startsWith("P")
)
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(
  persons.filter((person) => person.sex == "F").filter((person) => person.name.startsWith("C") || person.name.startsWith("J") )
);

// Log all the even numbers from peopleGrade array
let peopleGrade = persons.map((ele) => ele.grade);

console.log(
  peopleGrade.filter((grade)=> grade % 2 === 0 )
);
// Find the first name that starts with 'J' in persons array and log the object
let nameOne = persons.map((names)=>names.name);
let mapped = nameOne.filter((namere) => namere.startsWith("J") );
console.log(mapped);
// Find the first name that starts with 'P' in persons array and log the object
let nameOne = persons.map((names)=>names.name);
let mapped = nameOne.filter((namere) => namere.startsWith("P") );
console.log(mapped);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let two = persons.filter((person) => person.name.startsWith("J")).filter((person)=> person.grade > 10).filter((person)=>person.sex = "F");
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person)=> person.sex === "F");
// Filter all the male from persons array and store in malePersons array
let femalePersons = persons.filter((person)=> person.sex === "M");
// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.map((person) => person.grade).reduce((acc , cv)=>{
 return acc + cv;
},0)

// Find the average grade
let gradeLength = persons.map((person) => person.grade)
let gradeTotal = persons.map((person) => person.grade).reduce((acc , cv)=>{
  return acc + cv;
 },0)

 gradeTotal / gradeLength
// Find the average grade of male

let gradeTotal = persons.filter((person)=> person.sex === "M");
let gradie = gradeTotal.map((grades) => grades.grade).reduce((acc,cv)=>{
  return acc + cv
},0);
let sub = gradeTotal.map((grades) => grades.grade);

 gradie/sub.length

// Find the average grade of female

let gradeTotal = persons.filter((person)=> person.sex === "F");
let gradie = gradeTotal.map((grades) => grades.grade).reduce((acc,cv)=>{
  return acc + cv
},0);
let sub = gradeTotal.map((grades) => grades.grade);

 gradie/sub.length

// Find the highest grade
let peopleGrade = persons.map((person)=> person.grade);
let sorting = peopleGrade.sort((a , b) => a - b);
// Find the highest grade in male
let gradeTotal = persons.filter((person)=> person.sex === "M");
let gg = gradeTotal.map((gr)=> gr.grade);
let hhh = gg.sort((a,b)=> a - b ).pop();
// Find the highest grade in female
let gradeTotal = persons.filter((person)=> person.sex === "F");
let gg = gradeTotal.map((gr)=> gr.grade);
let hhh = gg.sort((a,b)=> a - b ).pop();
// Find the highest grade for people whose name starts with 'J' or 'P'
let blue = persons.filter((person) => 
  person.name.startsWith("J") || person.name.startsWith("P")
)
let pink = blue.map((nn)=> nn.grade);
let highest = pink.sort((a,b)=> a - b).pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let peopleGrade = persons.map((ele) => ele.grade);
peopleGrade.sort((a,b)=> a - b);
// Sort the peopleGrade in descending order
peopleGrade.sort((a,b)=> b - a);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
peopleGrade.sort((a,b)=> a - b);
// Sort the array peopelName in ascending `ABCD..Za....z`
[...peopleGrade].sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleGrade].sort();