var input =document.getElementById("inpCalc");
var buttons = document.querySelectorAll("button");
console.log(buttons)
var input = document.getElementById("inpCalc");

let string = "";
let arr = Array.from(buttons);
arr.forEach(function(button){
    button.addEventListener('click', function(event){
        let value = event.target.innerHTML;
        if(value == "="){
            if(string != ""){
                try {
                    string = string.replace("sin", "*Math.sin");
                    input.value = eval(string);
                    string = eval(string);
                } catch (error) {
                    console.log(error)
                    alert("Invalid Input");
                }
            }
        }else if(value == "AC"){
            string = "";
            input.value = "";
        }else if(value == "DEL"){
            string = string.slice(0, -1);
            input.value = string;
        }else{
            string += value;
            input.value = string;
        }
    });
});

input.addEventListener('keypress', function(event){
    // let value = event.keyCode;
    if(event.keyCode == 13){
        if(string != ""){
            try {
                string = string.replace("sin", "*Math.sin");
                input.value = eval(string);
                string = eval(string);
            } catch (error) {
                console.log(error)
                input.value = "Syntax Error"
            }
        }
    }
});

input.addEventListener('input', function(event){
    string = input.value;
    input.value = string;
})
input.addEventListener('keypress', function(event){
    console.log(event.keyCode)
})

document.querySelector("body").addEventListener('keypress', function(){
    string = input.value;
    input.value = string;
})

const radDeg = (x) =>{
    deg = x * (180/Math.PI);
    return deg
}

console.log(radDeg(1))