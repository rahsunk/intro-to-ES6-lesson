/* Arrow Functions */

// Arrow Function Syntax
const introduce = (name, age, location) => {
  // Template Literal
  return `Hi, my name is ${name}. I'm ${age} years old and I'm from ${location}.`;
};

//const abdel = introduce("Abdelmonem Khedr", 22, "Egypt"); // Hi, my name is Abdelmonem Khedr, I'm 22 years old and I'm from Egypt

//Arrow Function Shorthand
let exponent = (num, exp) => num ** exp;
const fourSquared = exponent(4, 2); // 16

/* Objects & Property Access with Destructuring */

// Object describing our teaching fellow Kenneth
let kenneth = {
  name: {
    first: "Kenneth",
    last: "Gonzalez",
  },
  age: 17,
  personLocation: "New York",
  favoriteAnimeList: ["One Piece", "Naruto", "Demon Slayer"],
  role: "Teaching Fellow at All Star Code",

  introduce: function () {
    return "Hi, I'm " + this.name.first + " and I'm a " + this.role;
  },

  setAge(n) {
    this.age = n;
  },
};

// Object Destructuring & Property Access
const { personLocation, age, role } = kenneth;
//console.log(personLocation, age, role); // New York 17 Teaching Fellow at All Star Code

/* Rest/Spread Operator with Objects */
const abdel = {
  name: "Abdelmonem",
  age: 22,
};

// "...abdel" "unpacks" the abdel's object properties into the new object
const abdelUpdated = {
  ...abdel,
  role: "Lead Instructor",
  nationality: "Egyptian",
  hasGlasses: true,
};

/* Arrays */

// Numbers Array
const numbers = [3, 4, 5, 6, 7, 8, 9];

// New Array that has the even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
//console.log(evenNumbers); // [ 4, 6, 8 ]

// New Array that has the numbers squared
const squaredNumbers = numbers.map((num) => num ** 2);
//console.log(squaredNumbers); // [ 9, 16, 25, 36, 49, 64, 81 ]

// .map(), & .filter() chaining, for getting the even squared numbers
let squaredEvenNumbers = numbers
  .map((num) => num ** 2)
  .filter((num) => num % 2 === 0);

//console.log(squaredEvenNumbers); // [16, 36, 64]

// Printing info of squared numbers
squaredEvenNumbers.forEach((number, index) => {
  let elementInfo = `The number at index ${index} is ${number}`;
  //console.log(elementInfo);
});

/* Fetch with async/await */

// Fetch with async/await arrow function
const getStudents = async () => {
  const proxy = "https://nextjs-cors-anywhere.vercel.app/api?endpoint=";
  const api = "https://mlb-md-firebase-demo.vercel.app/api/students";
  const response = await fetch(proxy + api);
  const data = await response.json();

  console.log(data);

  data.forEach((student) => {
    console.log(student);
  });
};

//getStudents();
