
function process(first,second,operand){
    
    switch(operand){
        case "Add": return addFun(first,second)
                      
        case "Subtract": return subFun(first,second)
        case "Multiply": return mulFun(first,second)
        case "Divide": return divFun(first,second)                  
    }
}
function addFun(first, second){
	if(isNaN(first))
		throw "Not a number";
	if(isNaN(second))
		throw "Not a number";	
	return first + second;
}

function subFun(first, second){
	if(isNaN(first))
		throw "Not a number";
	if(isNaN(second))
		throw "Not a number";	
	return first - second;
}

function mulFun(first, second){
	if(isNaN(first))
		throw "Not a number";
	if(isNaN(second))
		throw "Not a number";	
	return first * second;
}

function divFun(first, second){
	if(IsNaN(first))
		throw "Not a number";
	if(IsNaN(second))
		throw "Not a number";	
	return first / second;
}
