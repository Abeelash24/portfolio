/*=========================
   NEON PORTFOLIO
   SCRIPT.JS
=========================*/


//================ LOADER =================

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.display="none";

    },1500);

});



//================ TYPING EFFECT =================


const words=[

"Computer Science Engineering Student",
"Java Developer",
"Web Developer",
"AI & Cloud Computing Enthusiast",
"Software Developer"

];


let wordIndex=0;
let charIndex=0;

const typing=document.getElementById("typing");


function type(){

if(charIndex < words[wordIndex].length){

typing.innerHTML += words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}



function erase(){

if(charIndex>0){

typing.innerHTML =
words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,50);

}

else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

setTimeout(type,500);

}

}


type();



//================ CUSTOM CURSOR =================
// Replaced by cursor.js (global scorpion/creature cursor overlay).




//================ MOBILE MENU =================


const menu=document.querySelector(".menu");

const nav=document.querySelector("nav ul");


menu.onclick=()=>{

nav.style.display =
nav.style.display==="flex"
?
"none"
:
"flex";

nav.style.flexDirection="column";

};




//================ PARTICLE BACKGROUND =================


const canvas=document.getElementById("particles");

const ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;



let particles=[];


window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});



class Particle{


constructor(){

this.x=Math.random()*canvas.width;

this.y=Math.random()*canvas.height;

this.size=Math.random()*3+1;

this.speedX=(Math.random()-.5)*1;

this.speedY=(Math.random()-.5)*1;

}



update(){

this.x+=this.speedX;

this.y+=this.speedY;



if(this.x<0||this.x>canvas.width)

this.speedX*=-1;



if(this.y<0||this.y>canvas.height)

this.speedY*=-1;


}



draw(){

ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.size,
0,
Math.PI*2
);


ctx.fillStyle="#00f7ff";

ctx.shadowBlur=20;

ctx.shadowColor="#00f7ff";

ctx.fill();


}

}



for(let i=0;i<120;i++){

particles.push(new Particle());

}



function animateParticles(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


particles.forEach(p=>{

p.update();

p.draw();

});


requestAnimationFrame(animateParticles);

}


animateParticles();




//================ COUNTER ANIMATION =================


// Maps a counter's <p> label to the DOM selector whose items should be counted.
// Lets counters infer what to count without an explicit data-count attribute.
const LABEL_SELECTORS = {
  projects: "#projects .card",
  certificates: "#certificates img",
  internships: "#internships .card",
};

// Resolve the final value for a single counter element.
//  AUTO   (data-auto="true" or attribute omitted): count matching DOM items.
//          Uses an explicit data-count selector when present, otherwise the
//          selector derived from the counter's <p> label. Missing sections
//          are handled gracefully and return 0 (querySelectorAll never throws).
//  MANUAL (data-auto="false"): ignore automatic counting, use data-target.
function getCounterTarget(counter) {
  const isAuto = counter.dataset.auto !== "false";

  if (isAuto) {
    const label =
      (counter.nextElementSibling &&
        counter.nextElementSibling.textContent.trim().toLowerCase()) ||
      "";
    const selector = counter.dataset.count || LABEL_SELECTORS[label];
    const items = selector ? document.querySelectorAll(selector) : [];
    return items.length;
  }

  return parseInt(counter.dataset.target, 10) || 0;
}

const counters=document.querySelectorAll(".counter");


counters.forEach(counter=>{


counter.innerText="0";


const updateCounter=()=>{


const target=
+getCounterTarget(counter);


const current=
+counter.innerText;



const increment=
target/100;



if(current<target){

counter.innerText=
Math.ceil(current+increment);

setTimeout(updateCounter,30);

}

else{

counter.innerText=target;

}



};


updateCounter();



});





//================ SCROLL REVEAL =================


const sections=document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let top=
window.innerHeight*.8;


let position=
section.getBoundingClientRect().top;



if(position<top){

section.style.opacity=1;

section.style.transform="translateY(0)";

}



});


});



sections.forEach(section=>{


section.style.opacity=0;

section.style.transform="translateY(50px)";

section.style.transition="1s";


});




//================ BACK TO TOP =================


const topBtn=document.getElementById("top");


window.addEventListener("scroll",()=>{


if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}


});



topBtn.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};




//================ FORM MESSAGE =================


const form=document.querySelector("form");


form.addEventListener("submit",(e)=>{


e.preventDefault();


alert(
"Thank you! Your message has been received."
);


form.reset();


});



//================ NEON HOVER EFFECT =================


document.querySelectorAll("a,button").forEach(item=>{


item.addEventListener("mouseenter",()=>{


item.style.textShadow=
"0 0 20px #00f7ff";


});


item.addEventListener("mouseleave",()=>{


item.style.textShadow="none";


});


});