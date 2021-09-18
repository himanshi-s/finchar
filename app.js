let client1 = document.querySelector('.client-1');
let client2 = document.querySelector('.client-2');

window.setInterval(function(){
  client1.classList.toggle("hide");
  client2.classList.toggle("hide");
},3000)
let hamburger = document.querySelector('.hamburger');
let nav= document.getElementById('nav');
function showMenu(){
  nav.style.left= "0";
  hamburger.style.display= "none";
}
function hideMenu(){
  nav.style.left= "-250px";
  hamburger.style.display= "initial";
}

// function animateValue(obj, start, end, duration) {
//   let startTimestamp = null;
//   const step = (timestamp) => {
//     if (!startTimestamp) startTimestamp = timestamp;
//     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//     obj.innerHTML = Math.floor(progress * (end - start) + start);
//     if (progress < 1) {
//       window.requestAnimationFrame(step);
//     }
//   };
//   window.requestAnimationFrame(step);
// }

// const obj1 = document.getElementById("value1");
// const obj2 = document.getElementById("value2");
// animateValue(obj1, 0, 100, 2000);
// animateValue(obj2, 0, 500, 2000);


// modal 
// Get the modal
let envel = document.getElementById('envelope-container');
let modal = document.querySelector('#quote-container');
let close = document.querySelector('.close');
envel.addEventListener("click",function(){
  // alert("sdhfsauk");  
  modal.style.display="block";
});
close.addEventListener("click",function(){
  modal.style.display="none";  
})

setTimeout(function(){
  modal.style.display="block";
}, 3000);
