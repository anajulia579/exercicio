// Função Principal
functioncaixademercado()
let totalGeral=0;
 let numProdutos= parseInt(prompt("Quantos produtos voce esta comprando"));
letrecibo="";

// Estrutura de repetição para capturar informaçoes de cada produto  
for(let i=0;i<numProdutos; i++){
let nomeProduto= prompt('Nome do Produto $ {i+1}:');
letquantidade= parseInt(prompt('Quantidade de ${NomeProduto}:'));
letvalorUnitario= parseFloat(prompt('Valorunitario de ${NomeProduto}:'))
// Calcula o valor total do Produto 
let ValorTotalProduto= quantidade*valorunitario;
totalGeral+= ValorTotalProduto;

// Adiciona as informaçoes ao recibo 
recibo+= `${NomeProduto}:, ${quantidade} x R$ ${Valorunitario.tofixed(2)} ${ValorTotalProduto.toFixed}`
}

// Exibe o recibo e o total geral
recibo+= '\n totalgeral: R$ $ {totalGeral.tofixed(2)}';
alert(recibo);

// Chama a Funçao 
Caixademercado();
                                                                                                        


