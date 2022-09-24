var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click",submitHandler);

function submitHandler(e){
    if(initialPrice.value!=="" && stocksQuantity.value!=="" && currentPrice.value!==""){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    // console.log(ip,qty,curr);
    calculateProfitAndLoss(ip,qty,curr);
}else{showOutput("Please enter all the three fields😡");}
}


function calculateProfitAndLoss(initial, quantity, current){
    if(initial>current){
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;
        showOutput(`<div style="color:red">Sorry😔, Its a loss😥.<br>The loss is ${loss} and the loss percentage is ${lossPercentage}%</div>`);
        // loss logic 
    }else if(current>initial){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        showOutput(`<div style="color:green">Yay🥳, Its a profit🤑.<br> The profit is ${profit} and the profit percentage is ${profitPercentage}%</div>`);
        // profit logic
    }else{
        showOutput(`<div style="color:orange">Neither a profit🤷‍♂️ nor a loss🤷<br>(NO PAIN NO GAIN 🤜🌓🤛 NO GAIN NO PAIN🤜🌓🤛)</div>`);
        // the rest of logic
    }
}
// calculateProfitAndLoss(100,10,10);
// calculateProfitAndLoss(100,10,200);
// calculateProfitAndLoss(10,10,10);

function showOutput(message){
    outputBox.innerHTML = message;
}