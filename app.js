var form = document.querySelector(".main-form");
var inputs = document.querySelectorAll(".inputField");
var output = document.querySelector(".output");
var pageWrapy = document.querySelector(".page-wrap");
var footerDiv = document.querySelector('footer');

let costPrice = 0;
let quant = 0;
let currentPrice = 0;


form.addEventListener("submit", formHandler);

function formHandler(e) {
    e.preventDefault();


    costPrice = Number(inputs[0].value);
    quant = Number(inputs[1].value);
    currentPrice = Number(inputs[2].value);


    if(currentPrice === costPrice) {


        output.innerHTML = `Neither a gain, nor a loss`;


    }
    
    else if(currentPrice > costPrice) {

        let profit = (currentPrice - costPrice)*quant;
        let profitPer = (((currentPrice - costPrice)*100)/costPrice).toFixed(2);

        output.innerHTML = `Congratulations!🥳 You gained ${profitPer}%. Your total profit is ₹${profit}`;



    }

    else {

        let loss = (costPrice - currentPrice)*quant;
        let lossPer = (((costPrice - currentPrice)*100)/costPrice).toFixed(2);

        output.innerHTML = `Oh No!😦 You lost ${lossPer}%. Your total loss is ₹${loss}`;



    }

     
}