{
  const init = () => {
    const buttonElement = document.querySelector(".form__button");

    buttonElement.addEventListener("click", onFormClick);
  };

  const onFormClick = (e) => {
    e.preventDefault();
    calculateResult();
  };

  const calculateResult = () => {
    const selectElement = document.querySelector(".form__select");
    const inputElement = document.querySelector(".form__input");

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
    const resultElement = document.querySelector(".form__result");

    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
  };

  init();
}
