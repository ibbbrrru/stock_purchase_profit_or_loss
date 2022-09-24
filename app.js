var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


function calculateProfitAndLoss(initial, quantity, current){
    if(initial>current){
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;
        console.log(`the loss is ${loss}and % is ${lossPercentage}`)
        // loss logic 
    }else if(current>initial){

        // profit logic here
    }else{
        // the rest of logic
    }
}