import { calcularTip, calcularTotal, totalAccount, claseActivo } from "./utilidades.js";

const billInput = document.querySelector("#input-bill");
const percentageButton = [...document.querySelectorAll(".percentage-button")];
const peopleInput = document.querySelector("#input-people");
const tipAmountInput = document.querySelector("#tip-amount");
const totalInput = document.querySelector("#total");
const resetBtn = document.querySelector("#reset-button");
const accountInput = document.querySelector("#total-account");

let tip = 0;
let bill = 0;
let people = 1;

billInput.addEventListener("input", runProgram);
percentageButton.forEach(button => {
    if(button.type === "button"){
        button.addEventListener("click", () => runProgram(button));
    }else {
        button.addEventListener("input", () => runProgram(button));
    }
});

peopleInput.addEventListener("input", runProgram);

function runProgram(button){
    tip = parseFloat(button.value) || tip;
    bill = parseFloat(billInput.value) || 0;
    people = parseFloat(peopleInput.value) || 1;

    tipAmountInput.innerHTML = calcularTip(bill, tip, people);
    totalInput.innerHTML = calcularTotal(bill, tip, people);
    accountInput.innerHTML = totalAccount(bill, tip);
    console.log(accountInput);

    if (button && button.classList) {  // Verifica si button es un elemento con classList
        for (let btn of percentageButton) {
            btn.classList.remove("active");
        }
        claseActivo(button);
    }
}

resetBtn.addEventListener('click', ()=>{
    location.reload();
})

