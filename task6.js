const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';
mainHeading.style.marginRight = ' 30px';


const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.margin = '30px';
fruits.style.padding = '30px';
fruits.style.borderRadius = '5px';
fruits.style.width = '50%';
fruits.style.listStyleType = 'none';





const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';
basketHeading.style.color = 'brown';

const fruitItems = document.querySelectorAll('.fruit');

for(let i = 0; i < fruitItems.length; i++) {
    fruitItems[i].style.backgroundColor = 'white';
    fruitItems[i].style.margin = '5px';
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.borderRadius = '5px';
}

const SecondFruitItems = document.querySelectorAll('.fruit:nth-child(2)');
for(let i = 0; i < SecondFruitItems.length; i++) {
    fruitItems[1].style.backgroundColor = 'brown';
    fruitItems[1].style.color = 'white';
}

const FourthFruitItems = document.querySelectorAll('.fruit:nth-child(4)');

for(let i = 0; i < FourthFruitItems.length; i++) {
    fruitItems[3].style.backgroundColor = 'brown';
    fruitItems[3].style.color = 'white';

  
}

const FirstFruitItems = document.querySelectorAll('.fruit:nth-child(1)');

for(let i = 0; i < FirstFruitItems.length; i++){
  fruitItems[0].style.backgroundColor = 'lightgrey';
  
}

const ThirdFruitItems = document.querySelectorAll('.fruit:nth-child(3)');
for(let i = 0; i < ThirdFruitItems.length; i++) {
  fruitItems[2].style.backgroundColor = 'lightgrey'
}