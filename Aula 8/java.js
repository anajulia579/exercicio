saldoDisponivel=1000;
ValorDoSaque=prompt("informe o valor do saque")
if(ValorDoSaque<=saldoDisponivel){
saldoDisponivel=saldoDisponivel-ValorDoSaque
document.write("Voce esta sacando R$",Valor do Saque;"." )
} else{
document.write("O Valor solicitado e maior que o valor disponivel para saque!")
}
document.write("Saldo disponivel:R$",saldoDisponivel)
