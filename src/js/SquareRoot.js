function calcRoot() {
    //make the references
    let lnNumber = document.getElementById("lnNumber");
    let outAnswer = document.getElementById("outAnswer");

    let number = Number(lnNumber.value); // get value of element and parse to a Number

    // if not fill the field or NaN
    if(number == 0 || isNaN(number)){
        alert("Informe um número válido...") // show a alert
        lnNumber.focus(); // in focus
        return
    }

    let root = Math.sqrt(number); // calc square root number

    // if value is equal round down
    if(root == Math.floor(root)){
        outAnswer.textContent = "Raiz: " + root; // show root
    } else {
        // if not, displays a message indicating that there is no exact root
        outAnswer.textContent = "Não há raiz exata para " + number;
    }
}

// make reference to element btShow and register a event that will load a function

let btShow = document.getElementById("btShow");
btShow.addEventListener("click", calcRoot);