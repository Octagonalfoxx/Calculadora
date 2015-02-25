// JavaScript Document
function formReset(){
document.calc.reset();
}

function calcula(operacion){
	if ((document.calc.resultado.value == null) || (document.calc.resultado.value == '0') || (document.calc.resultado.value == 'NaN')){
		if ((document.calc.resultado.value == 0)&& (operacion == '.')){
			document.calc.resultado.value = '0.'
		}
		else{
			document.calc.resultado.value = operacion
		}
	}
	else{
		document.calc.resultado.value += operacion
	}
}

function total(){
	document.calc.resultado.value = eval (document.calc.resultado.value)
}