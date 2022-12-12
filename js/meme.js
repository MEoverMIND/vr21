const CARD_DATA_KEY = "key";
const CARD_TITLE_ATTRIBUTE = "data-meme-title";

const addForm = document.querySelector("#addMemeModal form");
addForm.addEventListener("submit", handleAddSubmit);
window.addEventListener("load", addAllCardsToUI);

function handleAddSubmit(evt) {
  // This will stop the default behavior on submission, which is page refresh
  evt.preventDefault();

  const closeBtn = document.querySelector('[data-bs-dismiss="modal"]');
  const imageUrl = addForm.elements.imageUrl.value;
  const topText = addForm.elements.topText.value;
  const bottomText = addForm.elements.bottomText.value;

  const cardData = { imageUrl, topText, bottomText };
  addCardtoUI(cardData);
  addCardtoDB(cardData);

  addForm.reset();

  closeBtn.click();
}

function addCardtoUI(cardData) {
  // Create template element with card in it
  //   const cardCol = document.createElement("div");
  //   cardCol.classList.add("col");
  //   cardCol.innerHTML = `<div class="card" style="width: 18rem">
  //   <img class="card-img-top"/>
  //   <div class="card-body">
  //     <h5 class="card-title">Card title</h5>
  //     <p class="card-text"></p>
  //     <button type="button" class="btn btn-danger">Delete</button>
  //   </div>
  // </div>`;

  const cardCol = document.createElement("div");
  cardCol.classList.add("col-lg-3", "col-md-4", "col-sm-6", "d-flex");
  cardCol.innerHTML = `
    <div class="card">
            <img class="card-img-top" />
             <div class="card-body d-flex flex-column justify-content-between align-item-between">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <div>
                  <!-- update button -->
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#createModal"
                  >
                    Update
                  </button>

                  <!-- delete button -->
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    Delete
                  </button>
                </div>
            </div>
    </div>`;

  // Add data to the image title and description
  cardCol.querySelector(".card-img-top").setAttribute("src", cardData.imageUrl);
  cardCol.querySelector(".card-img-top").setAttribute("alt", cardData.topText);

  cardCol.querySelector(".card-title").textContent = cardData.topText;
  cardCol.querySelector(".card-text").textContent = cardData.bottomText;

  // enable delete functionality.

  const deleteBtn = cardCol.querySelector(".btn-danger");
  deleteBtn.addEventListener("click", deleteCard);
  cardCol.setAttribute(CARD_TITLE_ATTRIBUTE, cardData.topText);

  // add cardCol to the UI
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.append(cardCol);
}

function addCardtoDB(cardData) {
  let data = loadDataFromDB();
  data.push(cardData);

  //save it back to local storage
  saveDataToDB(data);
}

function addAllCardsToUI(evt) {
  let data = loadDataFromDB();
  console.log(data);
  data.forEach((cardData) => addCardtoUI(cardData));
}

function loadDataFromDB() {
  let data = JSON.parse(localStorage.getItem(CARD_DATA_KEY));
  if (!data) {
    data = [];
  }
  return data;
}

function deleteCard(evt) {
  //see which button we clicked
  const deleteBtn = evt.target;

  // select the card column that contains it
  //its like queryselector, but works backwards
  const cardCol = deleteBtn.closest(".col");
  const topTextToDelete = cardCol.getAttribute(CARD_TITLE_ATTRIBUTE);
  let data = loadDataFromDB();
  data = data.filter((cardData) => cardData.topText !== topTextToDelete);
  saveDataToDB(data);
  cardCol.remove();
}

function saveDataToDB(data) {
  localStorage.setItem(CARD_DATA_KEY, JSON.stringify(data));
}
