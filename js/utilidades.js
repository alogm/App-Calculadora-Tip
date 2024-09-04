export function reset(billInput, customPercentageBtn, peopleInput){
    billInput = 0,
    customPercentageBtn = 0,
    peopleInput = 1
}

export function calcularTip(bill, tip, people){
    return(bill * tip / 100)/people
}

export function calcularTotal(bill, tip, people){
    return(bill * tip / 100 + bill)/people
}

export function claseActivo(input) {
 input.classList.add("active")
}