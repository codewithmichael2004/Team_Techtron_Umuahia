let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// console.log("home")

const userName = window.prompt('UserName');

document.getElementById('userN').textContent = `Welcome ${userName}`;
// Visitor Count Display 

const countEl = document.getElementById('counter');

visitorCountUpdate();

function visitorCountUpdate() {
    fetch('https://api.countapi.xyz/update/shopping/tech/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        });

    console.log(res.value);
}