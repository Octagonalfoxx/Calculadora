// JavaScript Document
function formReset()
{
	document.calc.reset();
}

function calcula(operacion)
{
	if ((document.calc.resultado.value == null) || (document.calc.resultado.value == '0') || (document.calc.resultado.value == 'NaN'))
	{
		if ((document.calc.resultado.value == 0)&& (operacion == '.'))
		{
			document.calc.resultado.value = '0.'
		}
		else
		{
			document.calc.resultado.value = operacion
		}
	}
	else
	{
		document.calc.resultado.value += operacion
	}
}

function total()
{
	document.calc.resultado.value = eval (document.calc.resultado.value)
}

function sct(variable)
{
    if(variable == "sen")
    {
        document.calc.resultado.value = Math.sin(document.calc.resultado.value)
    }
    if(variable == "cos")
    {
        document.calc.resultado.value = Math.cos(document.calc.resultado.value)
    }
    if(variable == "tan")
    {
        document.calc.resultado.value = Math.tan(document.calc.resultado.value)
    }
}

function elevado()
{
    document.calc.resultado.value = document.calc.resultado.value*document.calc.resultado.value
}
