var salario= parseInt(prompt("digite seu salario"));
var A10= salario*1.10;
var A12= salario*1.125;
var A15= salario*1.15;
if(salario<=500){
document.write("seu salario sera ",A15.toFixed(2))
}else if(salario>500 && salario<=1000){
document.write("seu salario sera ",A12.toFixed(2))
}else
document.write("seu salario sera ",A10.toFixed(2))