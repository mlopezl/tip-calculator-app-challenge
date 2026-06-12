const bill = document.getElementById("bill");
const people = document.getElementById("people");
const custom = document.getElementById("custom");
const inputs = document.querySelectorAll('input[type="radio"]');
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const resetButton = document.getElementById("reset-button");
const inputsArray = Array.from(inputs);
const form = document.getElementById("form");
const numberPeople = document.getElementById("number-people");
const textNegative = document.getElementById("text-negative");
const textBillNegative = document.getElementById("text-bill-negative");
const textBillZero = document.getElementById("text-bill-zero");
const textAlert = document.getElementById("text-alert");

console.log(resetButton);

inputsArray.forEach((input) => {
  input.addEventListener("change", () => {
    custom.value = "";
    if (!bill.value && !people.value) {
      return;
    }
    calculteTips();
  });
});

custom.addEventListener("focus", () => {
  inputsArray.forEach((input) => {
    input.checked = false;
  });
});

custom.addEventListener("input", () => {
  const billValue = parseInt(bill.value);
  const peopleValue = parseInt(people.value)
  if (!bill.value && !people.value) {
    return;
  }

  if(billValue <= 0 || poepleValue <= 0){
    return;
  }
  calculteTips();
});

bill.addEventListener("input", () => {
  const checkedInput = inputsArray.find((input) => input.checked);
  const customPercent = Number(custom.value) / 100;
  const billAmount = parseInt(bill.value);
  console.log(billAmount);

  if (billAmount < 0) {
    textBillNegative.classList.remove("hidden");
    return;
  } else if (billAmount === 0) {
    textBillZero.classList.remove("hidden");
    return;
  } else {
    textBillNegative.classList.add("hidden");
    textBillZero.classList.add("hidden");
  }

  if ((!checkedInput || !customPercent) && !people.value) {
    return;
  }
  calculteTips();
});

people.addEventListener("input", () => {
  const checkedInput = inputsArray.find((input) => input.checked);
  const customPercent = Number(custom.value) / 100;
  const peopleAmount = parseInt(people.value);

  if (peopleAmount === 0) {
    numberPeople.classList.add("border-1");
    numberPeople.classList.add("border-red-500");
    textAlert.classList.remove("hidden");
    return;
  } else if (peopleAmount < 0) {
    numberPeople.classList.add("border-1");
    numberPeople.classList.add("border-red-500");
    textNegative.classList.remove("hidden");
  } else {
    numberPeople.classList.remove("border-1");
    numberPeople.classList.remove("border-red-500");
    textAlert.classList.add("hidden");
    textNegative.classList.add("hidden");
  }

  if ((checkedInput || customPercent) && bill.value) {
    calculteTips();
  }
});

tip.addEventListener("change", () => {
  if (tip.value) {
    resetButton.removeAttribute("disabled");
  }
});

form.addEventListener("reset", () => {
  resetButton.setAttribute("disabled", "disabled");
});

function calculteTips() {
  const checkedInput = inputsArray.find((input) => input.checked);
  const billAmount = Number(bill.value);
  const customPercent = Number(custom.value) / 100;
  const peopleAmount = Number(people.value);

  if (peopleAmount <= 0) {
    return;
  }

  if (!checkedInput) {
    const tipPerPerson = (billAmount * customPercent) / peopleAmount;
    const totalPerPerson =
      (billAmount + billAmount * customPercent) / peopleAmount;
    tip.value = "$" + tipPerPerson.toFixed(2);
    total.value = "$" + totalPerPerson.toFixed(2);
    tip.dispatchEvent(new Event("change"));
    if (window.innerWidth <= 669) {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}
    return;
  }
  const tipPerPerson = (billAmount * checkedInput.value) / peopleAmount;
  const totalPerPerson =
    (billAmount + billAmount * checkedInput.value) / peopleAmount;
  tip.value = "$" + tipPerPerson.toFixed(2);
  total.value = "$" + totalPerPerson.toFixed(2);
  tip.dispatchEvent(new Event("change"));

 if (window.innerWidth <= 669) {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}
}
