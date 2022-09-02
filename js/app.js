const sound = new Audio("fx.mp3");
const sound2 = new Audio("fx2.mp3");
const button = document.getElementById('btn');
const cont = document.getElementById('container');
let blue = '#57dfcf';
let red = '#F42272';
let flag = 0;

button.addEventListener('click', () => {
    if(flag == 0) { button.style.backgroundColor = red
    flag++
    cont.style.backgroundColor = blue
    sound.play();
    }
    else {button.style.backgroundColor = blue
    cont.style.backgroundColor = red
    sound2.play();
    flag--};

    console.log('sheesh');
});