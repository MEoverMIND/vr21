function difference(num1, num2) {
  return num1 - num2;
}

difference(2, 2);

const differences = (num1, num2) => {
  return num1 - num2;
};

const product = (num1, num2) => {
  return num1 * num2;
};

const dayOfWeek = (num1) => {
  switch (num1) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;
    case 6:
      return "Friday";
      break;
    case 7:
      return "Saturday";
      break;
    default:
      return undefined;
  }
};

const lastPosition = (numArray) => {
  if (numArray.length < 1) {
    return undefined;
  } else {
    return numArray.slice(-1);
  }
};

const numberCompare = (num1, num2) => {
  if (num1 > num2) {
    return "First is greater";
  } else if (num2 > num1) {
    return "Second is greater";
  } else {
    return "Numbers are equal";
  }
};

// cool that null is taken as false
const singleLetterCount = (word, letter) => {
  word = word.toUpperCase();
  letter = letter.toUpperCase();

  if (!word.match(new RegExp(letter, "g"))) {
    return 0;
  }
  return word.match(new RegExp(letter, "g")).length;
};

// const isPalindrome = (str) => {
//   return str.toUpperCase().split("").reverse().join("") === str.toUpperCase();
// };

// console.log(difference(2, 2));
// console.log(differences(0, 2));

// console.log(product(2, 2));

// console.log(dayOfWeek(1));
// console.log(dayOfWeek(8));

// console.log(lastPosition([]));
// console.log(lastPosition([1, 4, 3]));

// console.log(numberCompare(8, 3));
// console.log(numberCompare(8, 10));
// console.log(numberCompare(8, 8));

const people = ["Greg", "Mary", "Devon", "James"];
people.pop();

console.log(singleLetterCount("hello", "l"));
console.log(singleLetterCount("hello", "k"));
