// selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const key = document.querySelectorAll("button");


// addEventListener
key.forEach(key=> {
    key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText==="AC"){
        output.innerText = "" ;
        result.innerText = "0" ;
    }
}

