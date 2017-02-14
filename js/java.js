var inputs = "";
var inputA = "";
var inputB = "";
var result = false;

var plus = false;
var minus = false;
var keer = false;
var gedeeld = false;
var point = false;

function input(choice)
{
	if(choice == "1" || choice == "2" || choice == "3" || choice == "4" || choice == "5" || choice == "6" || choice == "7" || choice == "8" || choice =="9" || choice =="0")
	{
		if(result == false)
		{
			document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + choice;
			inputs = document.querySelector('.screen').innerHTML;
		} else if (result == true)
		{
			document.querySelector('.screen').innerHTML = "";
			document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + choice;
			inputs = document.querySelector('.screen').innerHTML;
		}
	}
	
	if(choice == "+" & plus == false)
	{
		inputA = inputs;
		inputs = "";
		document.querySelector('.screen').innerHTML = "";
		plus = true;

	} else if(choice == "-" & minus == false)
	{
		inputA = inputs;
		inputs = "";
		document.querySelector('.screen').innerHTML = "";
		minus = true;
	} else if(choice == "x" & keer == false)
	{
		inputA = inputs;
		inputs = "";
		document.querySelector('.screen').innerHTML = "";
		keer = true;
	} else if(choice == ":" & gedeeld == false)
	{
		inputA = inputs;
		inputs = "";
		document.querySelector('.screen').innerHTML = "";
		gedeeld = true;
	} else if(choice == "=")
	{
		if(plus == true)
		{
			inputB = inputs;
			document.querySelector('.screen').innerHTML = "";
			inputs = parseInt(inputA) + parseInt(inputB);
			document.querySelector('.screen').innerHTML = inputs;
			result = true;
		}else if(minus == true)
		{
			inputB = inputs;
			document.querySelector('.screen').innerHTML = "";
			inputs = parseInt(inputA) - parseInt(inputB);
			document.querySelector('.screen').innerHTML = inputs;
			result = true;
		}else if(keer == true)
		{
			inputB = inputs;
			document.querySelector('.screen').innerHTML = "";
			inputs = parseInt(inputA) * parseInt(inputB);
			document.querySelector('.screen').innerHTML = inputs;
			result = true;
		}else if(gedeeld == true)
		{
			inputB = inputs;
			document.querySelector('.screen').innerHTML = "";
			inputs = parseInt(inputA) / parseInt(inputB);
			document.querySelector('.screen').innerHTML = inputs;
			result = true;
		}
	} else if(choice == "C")
	{
		inputA = "";
		inputB = "";
		inputs = "";
		plus = false;
		minus = false;
		keer = false;
		gedeeld = false;
		point = false;
		document.querySelector('.screen').innerHTML = "";
	} else if(choice == "." & point == false)
	{
		document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + choice;
		point = true;
	}
	if(result == true)
	{
		plus = false;
		minus = false;
		keer = false;
		gedeeld = false;
		point = false;
		inputA = document.querySelector('.screen').innerHTML;
		result = false;
	}
}