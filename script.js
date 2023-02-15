const buttons = document.querySelectorAll('button');
const display = document.querySelector('.grid-item-display');
const button_clear = document.querySelector('.grid-item-clear');
let userInput = "";
let operator = ""; 
let first = "";
let second = "";
result = "";

buttons.forEach((button) => {

    button.addEventListener('click', () => {    

		console.log(button.textContent);
		// Assigning Variables
		if(isDigit(Number(button.textContent)) || button.textContent == "."){
			
			// if the operator not yet assigned, set input to first variable 
			if(operator == ""){
	
			first += button.textContent;
			display.textContent = first;
			console.log(`${first} = first`);
			
			}else{
				
			second += button.textContent;
			display.textContent = second;
			console.log(`${second} = second`);
				
			}
			
		}else{
			
		// Handles adding non-numbers to the stack
		switch(button.textContent){
	
			case '+':
			
				//if an operator is already set, calculate 
				if(operator != ""){
					
					result = operate(first,second,operator);
					display.textContent = result;
					first = result; 
					second = ""; 
				}
					
				operator = String(button.textContent);
				console.log(operator);

				break;
				
			case '-':
			
				//if an operator is already set, calculate 
				if(operator != ""){
					
					result = operate(first,second,operator);
					display.textContent = result;
					first = result; 
					second = ""; 
				}
					
				operator = String(button.textContent);
				console.log(operator);

				break;
				
			case '/':
			
				//if an operator is already set, calculate 
				if(operator != ""){
					
					result = operate(first,second,operator);
					display.textContent = result;
					first = result; 
					second = ""; 
				}
					
				operator = String(button.textContent);
				console.log(operator);

				break;
				
			case '*':
			
				//if an operator is already set, calculate 
				if(operator != ""){
					
					result = operate(first,second,operator);
					display.textContent = result;
					first = result; 
					second = ""; 
				}
					
				operator = String(button.textContent);
				console.log(operator);
			
				break;
				
			case '=':
			
				result = operate(first,second,operator);
				display.textContent = result;
	
				operator = "";
				second = ""; 
				first = result; 
				break;
				
			case 'Clear':
			
				clear();
				break;
				
			case 'Back':
				backspace();
				break;
				
		}
		}
	
    });
});


function add(a,b){
	
	return Number(a) + Number(b);
}

function subtract(a,b){
	
	return a - b;
}

function divide(a,b){
	
	return a / b;
}

function multiply(a,b){
	
	return a * b;
}

// check if passed variable is a number
function isDigit(a){
	
	if(isNaN(a)){
		return false;
	}
	
	return true;
	
}

// check if passed variable is an operator (+,-,/,*)
function isOperator(a){
	
	if(a == '+' || a == '-' || a == '/' || a == '*'){
		return true;
	}
	
	return false;
}


function roundResult(result){
	
	return Number.parseFloat(result).toFixed(10);
	
}

function findNumDecimals(result){
	
	let numDecimals = 0; 
	result = result.toString();
	let x = result.indexOf(".");
	numDecimals = result.length - x - 1;
	
	return numDecimals;
}

function operate(a,b,operator){
	
	let result = 0;

	switch(operator){
		case '+':
			result = add(a,b); 
			break;
		case '-':
			result = subtract(a,b); 
			break;
			
		case '/':
			if(b == 0){
				console.log("True");
				result = "ERROR DIVIDE ZERO!";
				break;
			}
			result = divide(a,b); 
			break;
		case '*':
			result = multiply(a,b); 
			break;
	}
	console.log(result);
	return result; 
}

function clear(){
	
	//Clear all Variables and reset the display 
	operator = ""
	first = "";
	second = ""; 
	display.textContent = 0;
}

//convert to array and remove character, convert back to string...
function backspace(){

	if(second == ""){
		
		let x = first.split('');
		x.pop();
		let xx = x.join('');
		first = xx;
		display.textContent = first;
		
	}else{
		
		let x = second.split('');
		x.pop();
		let xx = x.join('');
		second = xx;
		display.textContent = second;
		
	}

	if(display.textContent.length == 0){
		console.log("updated now0");
		display.textContent = "0";
	}
	
}