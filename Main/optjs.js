let ystart=document.getElementById("youstart");
let cstart=document.getElementById("compstart");
var choice='X';
ystart.addEventListener("click",()=>{
  let name=document.getElementById("nameyou").value;
  console.log(name);
  sessionStorage.setItem("name1",name);
  sessionStorage.setItem("turn",choice);
  sessionStorage.setItem("start",1);
  location.href="boot.html";
})
cstart.addEventListener("click",()=>{
  let name=document.getElementById("nameyou").value;
  console.log(name);
  sessionStorage.setItem("name1",name);
  sessionStorage.setItem("turn",choice);
  sessionStorage.setItem("start",0);
  location.href="boot.html";
})
let btnx=document.getElementById("btnradio1");
btnx.addEventListener("click",()=>{
  choice='X';
})
let btno=document.getElementById("btnradio2");
btno.addEventListener("click",()=>{
  choice='O';
})
