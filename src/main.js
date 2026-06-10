const bill = document.getElementById("bill");
const people = document.getElementById("people");
const custom = document.getElementById("custom");
const inputs = document.querySelectorAll('input[type="radio"]');
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const resetButton = document.getElementById('reset-button');
const inputsArray = Array.from(inputs);
const form = document.getElementById('form');
const numberPeople = document.getElementById('number-people');
const textAlert = document.getElementById('text-alert');

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
  if (!bill.value && !people.value) {
    return;
  }
  calculteTips();
});

bill.addEventListener("input", () => {
  const checkedInput = inputsArray.find((input) => input.checked);
  const customPercent = Number(custom.value) / 100;
  if ((!checkedInput || !customPercent) && !people.value) {
    return;
  }
  calculteTips();
});

people.addEventListener("input", () => {
  const checkedInput = inputsArray.find((input) => input.checked);
  const customPercent = Number(custom.value) / 100;

  if(people.value === "0"){
    numberPeople.classList.add('border-1');
    numberPeople.classList.add('border-red-500');
    textAlert.classList.remove('hidden');
    return;
  } else{
    numberPeople.classList.remove('border-1');
    numberPeople.classList.remove('border-red-500');
    textAlert.classList.add('hidden');
  }

  if ((checkedInput || customPercent) && bill.value) {
    calculteTips();
  }
});

tip.addEventListener('change', () =>{
    if(tip.value){
     resetButton.removeAttribute('disabled');
    }
});

form.addEventListener('reset', () =>{
  resetButton.setAttribute('disabled', 'disabled');
})

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
    const totalPerPerson = (billAmount + billAmount * customPercent) / peopleAmount;
    tip.value = "$" + tipPerPerson.toFixed(2);
    total.value = "$" + totalPerPerson.toFixed(2);
    tip.dispatchEvent(new Event('change'));
    return;
  }
  const tipPerPerson = (billAmount * checkedInput.value) / peopleAmount;
  const totalPerPerson = (billAmount + billAmount * checkedInput.value) / peopleAmount;
  tip.value = "$" + tipPerPerson.toFixed(2);
  total.value = "$" + totalPerPerson.toFixed(2);
  tip.dispatchEvent(new Event('change'));
}
