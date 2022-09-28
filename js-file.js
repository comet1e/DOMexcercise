// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container



// const para = document.innerHTML= "<p> Hey I'm red! </p>" ; 
// document.style.para = 'color: red; ';

// document.innerHTML= "<h3> I'm a blue h3!<h3>" ; 

// const content = document.createElement('div');

// content.classList.add('content');
// content.style.cssText = "background-color: pink; border:2px; border-color:black;";

// const heading1 = content.createElement("<h1> I'm in a div </h1>");
// heading1.classList.add('heading-one');
// heading1.style.backgroundColor = blue;  
// const 
const container = document.querySelector('#container');


const para = inner.createElement('p');
para.classList.add('para');
para.textContent = "Hey I'm red !";
para.style.cssText = 'color: red; ';

const heading3 = document.createElement('h3');
heading3.classList.add('heading3');
heading3.textContent = "Hey I'm red !";
heading3.style.cssText = 'color: blue; ';


const content = document.createElement('div');
content.classList.add('content');
content.style.cssText = "background-color: pink; border:2px; border-color:black;";

const heading1= document.createElement('h1');
heading1.classList.add('heading1');
heading1.textContent="i'm in a div!";

const paraDiv = document.createElement('p');
paraDiv.classList.add('paraDiv');
paraDiv.textContent='ME TOO!';

div.appendChild(heading1);
div.appendChild(paraDiv);

container.append(div);
container.appendChild(content);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
