let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "https://bit.ly/2ysFran",
};

// 1 Write the command to add the language “Go” to the end of the languages array
programming.languages.push("Go");
console.log(programming);

// 2 Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming);

// 3 Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

// 4 Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming);
