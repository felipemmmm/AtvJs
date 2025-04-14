// Escreva um programa em JavaScript que leia dois números
// inteiros informados pelo usuário e contabilize a quantidade de
// múltiplos de 5 entre os números informados.
// Ao fim, o programa deve exibir em tela a quantidade de números
// múltiplos de 5 contidos entre os dois números.

function mult5() {
    let num1Input = document.getElementById("num1");
    let num2Input = document.getElementById("num2");
    let resultado = document.getElementById('resultado');
    let mult = 5;
    let multiplos = 0;

    if (num1Input instanceof HTMLInputElement && num2Input instanceof HTMLInputElement && resultado != null  ) {
        let num1 = parseInt(num1Input.value);
        let num2 = parseInt(num2Input.value);
        let max = Math.max(num1, num2); //pega o maior numero entre os dois
        let min = Math.min(num1, num2); //pega o menor

        for(min; min <= max; min++ ) {
            let result = mult%min;
            console.log(min);
            if (result <= 0) {
                multiplos++;
                console.log(multiplos);
            }
        }
        resultado.textContent= `A quantidade de múltiplos é de ${multiplos}`;
    }
}