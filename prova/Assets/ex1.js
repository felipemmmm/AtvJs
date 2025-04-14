// Escreva um programa em JavaScript que leia dois números
// inteiros informados pelo usuário e contabilize a quantidade de
// múltiplos de 5 entre os números informados.
// Ao fim, o programa deve exibir em tela a quantidade de números
// múltiplos de 5 contidos entre os dois números.

function mult5() {
    let num1Input = document.getElementById("num1");
    let num2Input = document.getElementById("num2");
    let resultado = document.getElementById('resultado');
    let multiplicador = 5;
    let multiplos = 0;

    if (num1Input instanceof HTMLInputElement && num2Input instanceof HTMLInputElement && resultado != null  ) {
        let num1 = parseInt(num1Input.value);
        let num2 = parseInt(num2Input.value);
        let maior = Math.max(num1, num2); //pega o maior numero entre os dois
        let menor = Math.min(num1, num2); //pega o menor

        for(menor; menor <= maior; menor++ ) { //add +1 ao menor numero ate ficar equivalente ao maior e vai divindo enquanto isso
            let result = multiplicador%menor; //pega o resto da multiplicação entre 5 e o menor numero
            if (result == 0) { //se o resto for 0
                multiplos++; //entao adiciona mais um múltiplo
            }
        }
        resultado.textContent= `A quantidade de múltiplos é de ${multiplos}`;
    }
}