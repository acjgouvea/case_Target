function fibonacci(number) {
    let x = 0;
    let y = 1;
    while (y <= number) {
        if (y === number) {
            return true;
        }
        let tmp = x
        x = y;
        y = tmp + y;
    }
    return false;
}
let inputNumber = parseInt(prompt("coloque um numero para verificar: "));

if (fibonacci(inputNumber)) {
    console.log(inputNumber + " é de fibonacci");
    } else {
        console.log(inputNumber + " não é de fibonacci");
    }