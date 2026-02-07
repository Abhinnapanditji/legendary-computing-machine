// Floating hearts
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = "❤";
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = 14 + Math.random()*18 + "px";
  document.getElementById("hearts").appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 450);

// Typewriter
function typeWriter(el, speed=30) {
  const txt = el.innerHTML;
  el.innerHTML = "";
  let i=0;
  (function t(){
    if(i<txt.length){
      el.innerHTML += txt.charAt(i++);
      setTimeout(t,speed);
    }
  })();
}
