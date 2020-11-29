const long = document.getElementById('long');
const small = document.getElementById('small');
const second = document.getElementById('second');
let d = new Date();
let hr = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
hrs = hr * 30 + min * 0.5;
small.style.transform = "rotateZ(" + hrs + "deg)";
long.style.transform = "rotateZ(" + min * 6 + "deg)";
second.style.transform = "rotateZ(" + sec * 6 + "deg)";
setInterval(() => {
    d = new Date();
    let sec = d.getSeconds();
    second.style.transform = "rotateZ(" + sec * 6 + "deg)";
    setTimeout(() => {
        d = new Date();
        let min = d.getMinutes();
        let hr = d.getHours();
        hrs = hr * 30 + min * 0.5;
        long.style.transform = "rotateZ(" + min * 6 + "deg)";
        small.style.transform = "rotateZ(" + hrs + "deg)";
    },0)
},1000)