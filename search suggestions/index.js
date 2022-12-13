const arrayOfObjects = [
  { name: "Fox", link: "foxnews.com" },
  { name: "Fandango", link: "fandango.com" },
  { name: "CNN", link: "cnn.com" },
];
const SUGGESTIONS_ID = "suggestions";

const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", debounce(handleKeyUp));

function handleKeyUp(e) {
  const userInput = searchInput.value.toLowerCase();
  clearSuggestions();

  if (userInput) {
    const suggestions = arrayOfObjects.filter((result) =>
      result.name.toLowerCase().startsWith(userInput)
    );
    showSuggestions(suggestions);
  }

  function showSuggestions(suggestions) {
    // const ul = document.getElementById(SUGGESTIONS_ID);

    // clearSuggestions();

    // //Show new suggestions
    // suggestions.forEach((result) => {
    //   const li = document.createElement("li");

    //   li.innerHTML = `<a href="${result.link}">${result.name}</a>`;
    //   ul.append(li);
    // });
    const ul = document.querySelector("#suggestions");

    if (suggestions.length === 0) {
      ul.innerHTML = `<li>No Matching Words, Please Try Again"</li>`;
    } else {
      //looping to each result

      suggestions.forEach((result) => {
        const li = document.createElement("li");

        li.innerHTML = `

          <a href ="${result.link}">${result.name}</a>

          `;

        ul.append(li);
      });
    }
  }

  function clearSuggestions() {
    const ul = document.getElementById(SUGGESTIONS_ID);
    while (ul.firstElementChild) {
      ul.firstElementChild.remove();
    }
  }
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
// function saveInput(){
//   console.log('Saving data');
// }
// const processChange = debounce(() => saveInput());
