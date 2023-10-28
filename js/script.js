let input  = document.querySelector('input');
let btn  = document.querySelector('btn'); 
let check  = document.querySelector('check');
let help  = document.querySelector('help');
let count  = document.querySelector('count');

let item = 0;
let randNum = Math.floor((Math.random() * 20) +1);
let userNum;
  btn.onclick = function(event) 
{ event.preventDefault();

    
userNum = input.value;
console.log(userNum, randNum);
if ( userNum > randNum) { 
    check.textContent = 'К сожелению, вы не угадали ... ';
help.textContent = 'многовато будет';
count.textContent = item; }

else if ( userNum < randNum) { 
    check.textContent = 'К сожелению, вы не угадали ... ';
help.textContent = 'Маловато  будет';
item++;count.textContent = item;
 }
 else if  ( userNum == randNum)  { 
    check.textContent = 'Вы угадали';
help.textContent = 'ПРАВИЛЬНО!!!';
item++;count.textContent = item;
}
};

