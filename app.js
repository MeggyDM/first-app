const button = document.getElementById('clickMe');
const greeting = document.getElementById('greeting');
const color = document.getElementById('changeColor');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

button.addEventListener('click', function() {
    //alert('yayayyyy u clicked the button!!');
    greeting.innerText= 'Im learning javascript! hehe';
    greeting.style.color= '#4CAF50';
    greeting.style.fontWeight='bold';
});

button.addEventListener('click', function(){
    popup.style.display = 'block';
});

closePopup.addEventListener('click', function(){
    popup.style.display = 'none';
});

color.addEventListener('click', function(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor= randomColor;
});