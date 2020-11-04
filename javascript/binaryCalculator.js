const currBinaryDisplay = document.getElementById("res");

var op1 = "", operator = "", op2 = "";

let clickBinary = function(binary){
    if (operator.length != 0) {
        op2 += binary;
    } else { 
        op1 += binary;
    }
    currBinaryDisplay.innerHTML = op1 + operator + op2;
}
let clickClear = function () { 
    op1 = "";
    op2 = "";
    operator = "";
}

let clickOperator = function (sign) { 
    operator = sign;
    currBinaryDisplay.innerHTML = op1 + operator + op2;
}

let clickEqual = function () { 
    total = 0
    intOP1 = parseInt(op1, 2);
    intOP2 = parseInt(op2, 2);

    switch (operator) {
        case "+":
            total = intOP1 + intOP2;
            break;
        case "-":
            total = intOP1 - intOP2;
            break;
        case "*":
            total = intOP1 * intOP2;
            break;
        case "/":
            total = Math.floor(intOP1/intOP2);
            break;
        default:
            break;
    }

    op1 = "";
    op2 = "";
    operator = "";
    currBinaryDisplay.innerHTML = total.toString(2);
}


