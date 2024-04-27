//grab the display element from the stylesheet, keeping naming consistent
const display = document.getElementById('display');




//here are the implementations for the functionality 

function calcDraw(input){
    display.value += input;
}

function solveExp(){
    try{display.value = eval(display.value);}
    catch(error){display.value = 'Invalid Exp';}
    
}

function clearDisp(){display.value = '';}