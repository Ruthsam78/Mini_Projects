document.addEventListener('DOMContentLoaded', function() {

    const Btn = document.getElementById('Btn');
    
    Btn.addEventListener('click', function() {
        const BillAmount = parseFloat(document.getElementById('Bill').value);
        const ServiceRating = parseFloat(document.getElementById('Service').value);
        const NoPeople = parseInt(document.getElementById('People').value, 10);
        const TipAmount = document.getElementById('out1');
        const TotalBill = document.getElementById('out2');
        const TipPerPerson = document.getElementById('out3');
        const PerPerson = document.getElementById('out4');

        if (isNaN(BillAmount) || BillAmount < 1) {
            alert('Enter a valid BillAmount as Number!');
            return;
        }
        if (isNaN(NoPeople) || NoPeople < 1) {
            alert('Enter a valid No.of.People as Number or Atleast 1!');
            return;
        }

        const TipAmountTot = BillAmount * ServiceRating;
        const TotalBillTot = BillAmount + TipAmountTot;
        const PerPersonTot = TotalBillTot / NoPeople;
        const TipPerPersonTot = TipAmountTot / NoPeople;

        TipAmount.textContent = `$${TipAmountTot.toFixed(2)}`;
        TotalBill.textContent = `$${TotalBillTot.toFixed(2)}`;
        TipPerPerson.textContent = `$${TipPerPersonTot.toFixed(2)}`;
        PerPerson.textContent = `$${PerPersonTot.toFixed(2)}`;
    });
});