const IncreaseBtn = document.getElementById('increase');
const DecreaseBtn = document.getElementById('decrease');
const ResetBtn = document.getElementById('reset');
const Show = document.getElementById('result');

let count = 0;

IncreaseBtn.addEventListener('click',function(){
    count++;
    disp();
});
DecreaseBtn.addEventListener('click',function(){
    count--;
    disp();
});
ResetBtn.addEventListener('click',function(){
    count = 0;
    disp();
});

const disp = () => Show.textContent = count;