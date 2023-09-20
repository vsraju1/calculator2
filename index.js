const buttons = document.querySelectorAll("button");
let inputText = document.querySelector("input");

let string = "";
Array.from(buttons);
buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
        if (e.target.innerHTML == '='){
           inputText.value = eval(inputText.value)
        }else if(e.target.innerHTML == "C"){
            inputText.value = "";
        } 
        else{
        string = e.target.innerHTML;
        inputText.value = inputText.value + string;
    }

    })
});