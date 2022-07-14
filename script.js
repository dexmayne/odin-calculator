// Add function
function add(a,b){
    return a + b;
} 

//Subtract function
function subtract(a,b){
    return a - b;
}


//Multiply function
function multiply(a,b){
    return a * b;
}

//divide function
function divide(a,b){
    return a / b;
}

// call function operate
function operate(operator, a, b){
    return operator(a,b);
}

console.log(operate(add,10,10));
console.log(operate(multiply,10,10));