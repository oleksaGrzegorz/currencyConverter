const inputElement = document.querySelector(".form__input");
const buttonElement = document.querySelector(".form__button");
const resultElement = document.querySelector(".form__result");
const selectElement = document.querySelector(".form__select");

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  calculateResult();
});

const calculateResult = () => {
  const currency = selectElement.value;
  const amount = +inputElement.value;
  let result;

  let EUR = 4.3;
  let USD = 5;

  switch (currency) {
    case "EUR":
      result = amount / EUR;
      break;
    case "USD":
      result = amount / USD;
      break;
  }
  showResult(amount, result, currency);
};

const showResult = (amount, result, currency) => {
  resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
};
