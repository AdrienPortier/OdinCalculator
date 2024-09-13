function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function exp(a,b){
    return a**b;
}
function identity(a){
    return a;
}
function factorielle(n) {
    let res = 1;
       while(n != 0){
      if(n != 0){
        res *= n;
      }
      n = n-1;
     }
     return res;
  };
let lastbin = identity;
let left = 0;
let op = identity;
let right = NaN;
function operate(operator, a,b){
    return operator(a,b);
}

let NMAXDIGITS = 16;
let number = "";
function changenum(num){
    num = Math.min(num, 9999999999999999)
    number = num.toString().slice(0,NMAXDIGITS);
    let head = document.querySelector(".header");
    head.textContent = number;}

function updatenum(str){
    if (number.length < NMAXDIGITS){
        number += str;
        let head = document.querySelector(".header");
        head.textContent = number;
    }
}
function clear(){
    number = "_";
    left = 0;
    op = identity;
    right = 0;
    let head = document.querySelector(".header");
    head.textContent = number;
    number = "";
}
function clearScreen(){
    number = "_";
    let head = document.querySelector(".header");
    head.textContent = number;
    number = "";
}
function retour(){
    number = number.slice(0,number.length-1);
    if(number === ""){
        clear();
    }
    else{
        let head = document.querySelector(".header");
        head.textContent = number;
    }
}
let boutons = document.querySelectorAll(".bouton");
boutons.forEach(x => {
    x.addEventListener("mouseover", () => x.style.opacity = "0.8")
    x.addEventListener("mouseout", () => x.style.opacity = "1");
})
let numboutons = document.querySelectorAll(".num");
numboutons.forEach(x => x.addEventListener("click", () => {
    updatenum(x.id)
    if(op !== identity){
        right = number;
    }
}
))
let clearbouton = document.querySelector(".clear");
clearbouton.addEventListener("click", ()=> clear());
let retourbouton = document.querySelector(".return");
retourbouton.addEventListener("click", ()=> retour());
let constbouton = [document.querySelector(".pi"), document.querySelector(".e")];
constbouton.forEach(x => x.addEventListener("click", () => {
    changenum(parseFloat(x.id));
}))
let selfbouton = document.querySelectorAll(".self");
selfbouton.forEach(x => x.addEventListener("click", () => {
    let ope = x.id;
    let actualNumber = parseFloat(number);
    let y = 0;
    switch(ope){
        case "carre":
            y = Math.pow(actualNumber,2);
            break;
        case "inverse":
            if(actualNumber === 0){
                let head = document.querySelector(".header");
                head.textContent = "Div. by zero ERROR";
                return;
            }
            else{
                y = 1/actualNumber;
            }
            break;
        case "absol":
            y = Math.abs(actualNumber);
            break;
        case "sqrt":
            if(actualNumber < 0){
                let head = document.querySelector(".header");
                head.textContent = "Only + val., restart.";
                return;
            }
            else{y = Math.sqrt(actualNumber);}
            break;
        case "factorielle":
            if(Number.isInteger(actualNumber) && actualNumber >= 0){
                y = factorielle(actualNumber);
            }
            else{
                let head = document.querySelector(".header");
                head.textContent = "Only int., restart.";
                return;
            }
            break;
        case "10exp":
            y = 10**actualNumber;
            break;
        case "log10":
            if(actualNumber < 0){
                let head = document.querySelector(".header");
                head.textContent = "Only + val., restart.";
                return;
            }
            else{
                y = Math.log10(actualNumber);
            }
            break;
        case "ln":
            if(actualNumber < 0){
                let head = document.querySelector(".header");
                head.textContent = "Only + val., restart.";
                return;
            }
            else{
                y = Math.log(actualNumber);
            }
            break;
        case "neg":
            y = -actualNumber;
            break;
    }
    changenum(y);
}))
let binbouton = document.querySelectorAll(".bin");
binbouton.forEach(x => x.addEventListener("click",() => {
    let ope = x.id;
    if(lastbin !== identity){
        egal();
        number = "";
    }
    else{
        left = number;
        clearScreen();
    }
    op = ope;
    lastbin = ope;
})

)
function egal(){
    let y = number;
    if(op !== identity){
        switch(op){
            case "plus":
                y = add(+left,+right);
                break
            case "minus":
                y = substract(+left,+right);
                break
            case "times":
                y = multiply(+left,+right);
                break
            case "divides":
                y = divide(+left,+right);
                if (+right == 0){
                    let head = document.querySelector(".header");
                    head.textContent = "Div. by zero ERROR";
                    return;
                }
                break
            case "exp":
                y = exp(+left,+right);
                break
            case "identity":
                y = identity(y);
                break
        }    
    }
    changenum(y);
    left = number;
    lastbin = identity;
}
let equalbutton = document.querySelector("#egal");
equalbutton.addEventListener("click", () => egal());
let pointbutton = document.querySelector("#point");
pointbutton.addEventListener("click", () => 
    {updatenum(".")
    if(op !== identity){
        right = number;
    }});

window.addEventListener("keydown", (event) => {
    const key = event.key; // Get the keycode of the pressed key

    switch (key) {
        case '0':
            document.getElementById("0").click(); // No #
            alert("TEST"); // Direct alert call
            break;
        case '1':
            document.getElementById("1").click(); // No #
            break;
        case '2':
            document.getElementById("2").click(); // No #
            break;
        case '3':
            document.getElementById("3").click(); // No #
            break;
        case '4':
            document.getElementById("4").click(); // No #
            break;
        case '5':
            document.getElementById("5").click(); // No #
            break;
        case '6':
            document.getElementById("6").click(); // No #
            break;
        case '7':
            document.getElementById("7").click(); // No #
            break;
        case '8':
            document.getElementById("8").click(); // No #
            break;
        case '9':
            document.getElementById("9").click(); // No #
            break;
        case '.': // Decimal point on regular keyboard
        case 'Decimal': // Decimal point on numpad
            document.getElementById("point").click(); // Use getElementById for consistency
            break;
        case '+': // Plus on regular keyboard
        case 'Add': // Plus on numpad
            document.getElementById("plus").click();
            break;
        case '-': // Minus on regular keyboard
        case 'Subtract': // Minus on numpad
            document.getElementById("minus").click();
            break;
        case '*': // Multiply on regular keyboard
        case 'Multiply': // Multiply on numpad
            document.getElementById("times").click();
            break;
        case '/': // Divide on regular keyboard
        case 'Divide': // Divide on numpad
            document.getElementById("divides").click();
            break;
        case 'Enter': // Equals (Enter key)
            document.getElementById("egal").click();
            break;
        case 'Backspace': // Return (Backspace)
            document.querySelector(".return").click();
            break;
        case 'Escape': // Clear (Escape)
            document.querySelector(".clear").click();
            break;
    }
    
});