let screen = document.getElementById('screen');
let btn = document.getElementById('btn');
let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
btn.addEventListener('click', function(){
    let length = 6;
let password = "";
for(let i = 0; i < length; i++){
    let randomIndex = Math.floor(Math.random()*char.length)
    password = password + char[randomIndex]
}
screen.innerHTML ='Password:'+ password;
})


