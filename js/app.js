const button = document.getElementById('btn');
let blue = '#4A5899';
let red = '#ED1C24';
let flag = 0;

button.addEventListener('click', () => {
    if(flag == 0) { button.style.backgroundColor = red
    flag++}
    else {button.style.backgroundColor = blue
    flag--};
    
    console.log('sheesh');
});
