function calculateLoan(){
   loanAmountValue = document.getElementById("loan-amount").value
  
   intersetRateValue =  document.getElementById("intereset-rate").value

   MonthsToPayValue = document.getElementById("months-to-pay").value

   interest = (loanAmountValue * (intersetRateValue * 0.01)) / MonthsToPayValue;

   monthlypayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

   document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlypayment}`;

}