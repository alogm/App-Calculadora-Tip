export function reset(billInput, customPercentageBtn, peopleInput, accountInput){
    billInput = 0,
    customPercentageBtn = 0,
    peopleInput = 1, 
    accountInput = 0
}

export function calcularTip(bill, tip, people){
    return(bill * tip / 100)/people
}

export function calcularTotal(bill, tip, people){
    return(bill * tip / 100 + bill)/people
}

export function totalAccount(bill, tip){
    return(bill * tip / 100 + bill )
}

export function claseActivo(input) {
 input.classList.add("active")
}

