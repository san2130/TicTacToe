let single=document.getElementById("single");
let multi=document.getElementById("multi");
var mode=0;
let start=document.getElementById("start");
single.addEventListener("click",()=>{
  mode=0;
  sessionStorage.setItem("mode", mode);
  location.href = "./Main/bootop.html";
})
multi.addEventListener("click",()=>{
  mode=1;
  sessionStorage.setItem("mode", mode);
  location.href = "./Main/multi.html";
})
