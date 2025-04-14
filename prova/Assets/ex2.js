// Utilize as propostas de funções estudadas para fazer um programa
// em JavaScript capaz de calcular o valor a ser pago por um cliente em
// uma compra.
// Sua aplicação deve permitir ao usuário inserir a quantidade e o preço
// unitário dos produtos que serão comprados, assim, ao final será
// calculado o valor total da compra.
// Os tipos de produtos disponíveis são:
// • Café, Leite, Manteiga, Biscoito, Chocolate, Água, Refrigerante,
// Arroz, Macarrão e Feijão.
// Ao final será apresentado o preço da compra com base no cálculo do
// produto selecionado e suas quantidades.

//Ideia: select e arrays dentro de arrays
//ex: array = [["Café", preco, qtd], ["Macarrao", preco, qtd ]];
// não vai precisar do array eu acho

function adicionar(){
    let compras = document.getElementById("compras");
    let preco = document.getElementById("preco");
    let qtd = document.getElementById("qtd")
    let total = 0;

    if (compras instanceof HTMLSelectElement) {
        let comprasItens = compras.value;
        preco?.addEventListener("blur", adicionar   , true)


    }
}