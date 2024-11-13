let body = document.querySelector('body');

let p = document.createElement('p');
p.innerText = "Hey I am red!";
p.style.color = "red";

body.appendChild(p);

let h3 = document.createElement('h3');
h3.innerText = "I m blue h3";
h3.style.color = "blue";

body.appendChild(h3);

let div = document.createElement('div');

let h1 = document.createElement('h1');
h1.innerText = "I m in a div";

let p2 = document.createElement('p2');
p2.innerText = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);
body.appendChild(div);

div.classList.add('box');