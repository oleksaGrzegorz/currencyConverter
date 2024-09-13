const inputElement = document.querySelector(".form__input");
const buttonElement = document.querySelector(".form__button");
const resultElement = document.querySelector(".form__result");
const selectElement = document.querySelector(".form__select");

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();

  const currencies = selectElement.value;
  const amount = +inputElement.value;

  let EUR = 4.3;
  let USD = 5;
  let result;

  switch (currencies) {
    case "EUR":
      result = amount / EUR;
      break;
    case "USD":
      result = amount / USD;
      break; 
  }
  resultElement.innerText = `${inputElement.value} PLN = ${result.toFixed(2)} ${currencies}`;
});
