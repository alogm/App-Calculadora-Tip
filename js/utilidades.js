/**
 * La función calcularTip calcula la cantidad de tip(propina) que cada 
 * people(persona) debe pagar en función de la cuenta total, el porcentaje 
 * de propina y el número de personas que compartirán el pago.
 * @param {*} bill 
 * @param {*} tip 
 * @param {*} people 
 * @returns 
 */
export function calcularTip(bill, tip, people){
    return(bill * tip / 100)/people
}

/**
 * La función calcularTotal calcula el total del tip + bill, el total se divide 
 * por el numero total de personas
 * @param {*} bill 
 * @param {*} tip 
 * @param {*} people 
 * @returns 
 */
export function calcularTotal(bill, tip, people){
    return(bill * tip / 100 + bill)/people
}

/**
 * La función totalAccount suma el total del tip + bill
 * @param {*} bill 
 * @param {*} tip 
 * @returns 
 */
export function totalAccount(bill, tip){
    return(bill * tip / 100 + bill )
}

/**
 * 
 * la función claseActivo sirve para cambiar dinamicamente la apariencia
 * del input atraves del CSS
 */
export function claseActivo(input) {
 input.classList.add("active")
}

