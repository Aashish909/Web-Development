const btn = document.getElementById("genPass");
const newPass = document.getElementById("newPass");

const slider = document.getElementById("range");
const rangeValue = document.getElementById("rangeValue");

const CapitalLetter = document.getElementById("CapitalLetter");
const SmallLetter = document.getElementById("SmallLetter");
const Number = document.getElementById("Number");
const Symbol = document.getElementById("Symbol");

const copyBtn = document.getElementById("copyBtn");

rangeValue.innerText = slider.value;

slider.addEventListener("input", (e) => {
  rangeValue.innerText = e.target.value;
});

btn.addEventListener("click", () => {
  let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallLetter = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let symbol = "!@#$%^&*()";
  let allChar = "";

  if (CapitalLetter.checked) {
    allChar += capitalLetter;
  }
  if (SmallLetter.checked) {
    allChar += smallLetter;
  }
  if (Number.checked) {
    allChar += number;
  }
  if (Symbol.checked) {
    allChar += symbol;
  }

  if (allChar.length === 0) {
    alert("Please select at least one option");
    return;
  }

  let password = "";
  for (let i = 0; i < slider.value; i++) {
    let random = Math.floor(Math.random() * allChar.length);
    password += allChar.charAt(random);
  }
  newPass.innerText = password;

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  });
});
