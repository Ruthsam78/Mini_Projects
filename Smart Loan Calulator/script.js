const btn = document.getElementById('calculateButton');
const monthlyPaymentElement = document.getElementById('monthlyPayment');
const totalPaymentElement = document.getElementById('totalPayment');
const totalInterestElement = document.getElementById('totalInterest');

btn.addEventListener('click',function(){
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const longTerm = parseInt(document.getElementById('longTerm').value) * 12;
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(longTerm)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -longTerm));
    const totalPayment = monthlyPayment * longTerm; 
    const totalInterest = totalPayment - loanAmount;
    monthlyPaymentElement.textContent = `Monthly Payment: ${monthlyPayment.toFixed(2)}`;
    totalPaymentElement.textContent = `Total Payment: ${totalPayment.toFixed(2)}`;
    totalInterestElement.textContent = `Total Interest: ${totalInterest.toFixed(2)}`;
});
