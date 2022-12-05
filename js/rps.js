function RPS() {
  function determineComputer(num) {
    if (num === 1) {
      return "rock";
    } else if (num === 2) {
      return "paper";
    } else {
      return "scissor";
    }
  }

  let answers = ["rock", "paper", "scissor"];
  let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
  let computerChoice = determineComputer(Math.floor(Math.random() * 3));
  debugger;

  if (!userChoice || answers.indexOf(userChoice) === -1) {
    alert("Please select a valid option");
  }

  if (userChoice === computerChoice) {
    alert("Tie!");
    return;
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    alert("You lose, computer picked " + computerChoice);
  } else if (userChoice === "paper" && computerChoice === "scissor") {
    alert("You lose, computer picked " + computerChoice);
  } else if (userChoice === "scissor" && computerChoice === "rock") {
    alert("You lose, computer picked " + computerChoice);
  } else {
    alert("You win! Computer picked " + computerChoice);
  }
}
