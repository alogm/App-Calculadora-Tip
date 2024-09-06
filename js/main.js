import { calcularTip, calcularTotal, totalAccount, claseActivo } from "./utilidades.js";

// Selecciona elementos del HTML para poder manipular el DOM atraves de #id y .class
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

// El input de bill detecta el cambio de valor y runPrograma procesa el calculo
// tip 
billInput.addEventListener("input", runProgram);

// Se seleccionan todos los botones de los porcentajes, el metodo forEach recorre
// cada button al detectar el evento click se ejecuta el runProgram pasando 
// el button como argumento para optener su valor
percentageButton.forEach(button => {
    if(button.type === "button"){
        button.addEventListener("click", () => runProgram(button));
    }else {
        button.addEventListener("input", () => runProgram(button));
    }
});

// addEventListener detecta los cambios que hay en el input 
// aqui detecta el cambio de personas esto se escribe manual mente
peopleInput.addEventListener("input", runProgram);

// runProgram se encarga de realizar todos los calculos, 
function runProgram(button){
    bill = parseFloat(billInput.value) || 0;
    tip = parseFloat(button.value) || tip;
    people = parseFloat(peopleInput.value) || 1;

    // Atravez de innerHTML se actualizan los campos de la interfas html 
    // de este modo se manipula el DOM 
    tipAmountInput.innerHTML = calcularTip(bill, tip, people);
    totalInput.innerHTML = calcularTotal(bill, tip, people);
    accountInput.innerHTML = totalAccount(bill, tip);

    // Comprueba si el estado del button esta activo, el for recorre todos los
    // buttons de porcentaje y elimina la clase active de cada uno, esto 
    // asegura que cuando se seleccione un button se deseleccione el anterior 
    if (button && button.classList) {
        for (let btn of percentageButton) {
            btn.classList.remove("active");
        }
        // Lama a la funcion claseActivo que añade la clase active, cambiando 
        // su estilo visual para que indique que esta seleccionado y activo
        claseActivo(button);
    }
}

// Esta funcion hace que la pagina se recargue con reload al escuchar el evento 
// click, al escuchar el evento se recarga la pagina y resetea los valores
resetBtn.addEventListener('click', ()=>{
    location.reload();
})

