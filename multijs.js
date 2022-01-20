let p1st=document.getElementById("p1start");
let p2st=document.getElementById("p2start");
var choice='X';
p1st.addEventListener("click",()=>{
  let name1=document.getElementById("name1").value;
  let name2=document.getElementById("name2").value;
  sessionStorage.setItem("name1",name1);
  sessionStorage.setItem("name2",name2);
  sessionStorage.setItem("start",0);
  sessionStorage.setItem("turn",choice);
  location.href="index.html";
})
p2st.addEventListener("click",()=>{
  let name1=document.getElementById("name1").value;
  let name2=document.getElementById("name2").value;
  sessionStorage.setItem("name1",name1);
  sessionStorage.setItem("name2",name2);
  sessionStorage.setItem("start",1);
  sessionStorage.setItem("turn",choice);
  location.href="index.html";
})
let btnx=document.getElementById("btnradio1");
btnx.addEventListener("click",()=>{
  choice='X';
})
let btno=document.getElementById("btnradio2");
btno.addEventListener("click",()=>{
  choice='O';
})