let single=document.getElementById("single");
let multi=document.getElementById("multi");
var mode=0;
let start=document.getElementById("start");
single.addEventListener("click",()=>{
  mode=0;
  sessionStorage.setItem("mode", mode);
  single.style.visibility="hidden";
  location.href = "bootop.html";
  let cont=document.getElementById("singmul");
  let sta=document.getElementById("sta");
  cont.style.display="none";
  sta.classList.remove("disp");
  start.classList.remove("disp");
  sta.classList.add("pt-5");
})
multi.addEventListener("click",()=>{
  mode=1;
  sessionStorage.setItem("mode", mode);
  multi.style.visibility="hidden";
  location.href = "multi.html";
})
