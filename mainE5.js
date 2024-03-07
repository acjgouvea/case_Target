function inverterString(string) {
    let acabaxi = '';
    for (let i = string.length - 1; i >= 0 ; i--) {
        acabaxi +=string.charAt(i);
    }
    return acabaxi;
}


let laranja = "Olá mundo!!!";
let maca = inverterString (laranja);
console.log("original: ", laranja);
console.log("invertida: ", maca);
