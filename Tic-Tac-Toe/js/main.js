console.log('Hello')
let turn='X'
let over=0;
let st='X';
let start=-1;
let mode=0;
function changeTurn(){
  if(turn==='X')
    turn='O';
  else
    turn='X';
}
let wins=[
  [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
let ans=-1,f=0;
function winch(){
  let boxtexts=document.getElementsByClassName("text"),winner="Player1";
  f=0;
  if(over===1)
   return;
  for(let i=0;i<wins.length;i++)
  { 
    if((boxtexts[wins[i][0]].innerText===boxtexts[wins[i][1]].innerText) && (boxtexts[wins[i][2]].innerText===boxtexts[wins[i][0]].innerText) && boxtexts[wins[i][0]].innerText!=="")
    {
      if(mode===1)
      {
      if(turn!==st)
        winner="Player2";
       document.getElementsByClassName("info")[0].innerText=winner+" ("+turn+") is the Winner";
      }
      if(mode==0)
      {
        let tex;
         if(start===0)
         {
           if(st!==turn)
            tex="You"+" ("+turn+") have won";
           else
             tex="Hexie won,nosignal won";            
         }
         else
         {
          if(start===1)
          {
            if(st===turn)
             tex="You"+" ("+turn+") have won";
            else
              tex="Hexie won,nosignal won";            
          }
         }
         document.getElementsByClassName("info")[0].innerText=tex;
      }
       boxes[wins[i][0]].style.backgroundColor="rgb(113,137,187)";
       boxes[wins[i][1]].style.backgroundColor="rgb(113,137,187)";
       boxes[wins[i][2]].style.backgroundColor="rgb(113,137,187)";
       over=1;
       ans=i;
       console.log("Over")
       break;

    }
  }
  if(over===0)
  {
  for(let i=0;i<9;i++)
  {
    if(boxtexts[i].innerText==='')
    {
      f=1;
      break;
    }
  }
  if(f===0)
  {
    over=1;
    console.log("Draw");
    document.getElementsByClassName("info")[0].innerText="Draw";
    return;
  }    
}
}
let boxes=document.getElementsByClassName("box");
console.log(boxes);
Array.from(boxes).forEach(i =>{
  let boxtext=i.querySelector('.text');
  i.addEventListener('click',()=>{
    if(boxtext.innerText===''){
      boxtext.innerText=turn;
      winch();
      changeTurn();
      if(over===0)
        document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
      if((mode===0) && (over===0))
      {
         let boxtexts=document.getElementsByClassName("text");
         var empty=[];
         for(let i=0;i<9;i++)
         {
           if(boxtexts[i].innerText==='')
             empty.push(i);
         }
        //  console.log(empty);
         var ra=Math.floor(Math.random()*empty.length);
         console.log(ra)
         boxtexts[empty[ra]].innerText=turn;
         winch();
         changeTurn();
         if(over===0)
        document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
      }     
    }
  })    
})

reset.addEventListener('click',()=>{
  let boxtext=document.getElementsByClassName('text');
  for(let i=0;i<boxtext.length;i++)
    boxtext[i].innerText='';
  turn=st;
  document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
  if(ans!==-1)
  {
  boxes[wins[ans][0]].style.backgroundColor="rgb(255, 238, 0)";
  boxes[wins[ans][1]].style.backgroundColor="rgb(255, 238, 0)";
  boxes[wins[ans][2]].style.backgroundColor="rgb(255, 238, 0)";
  }
  over=0;
  ans=-1;
  f=0;
  if((mode===0) && (start===0))
    firstmove();
})

function compressed()
{
  document.getElementsByClassName("prestart1")[0].style.display="none";
  document.getElementsByClassName("prestartcomp")[0].style.display="block";
  document.getElementsByClassName("choicecomp")[0].style.display="block";
  mode=0;
}

function twoplayer()
{
  document.getElementsByClassName("prestart1")[0].style.display="none";
  document.getElementsByClassName("choice2p")[0].style.display="block";
  mode=1;
}
function comp()
{
  start=0;
}
function you()
{
  start=1;
} 
function cross1()
{
  if(start===-1)
  {
   alert("Choose start player first");
   return;
  }
  if(start===0)
  {
  turn='O';
  st='O';
  }
  else
  {
  turn='X';
  st='X';
  }
  document.getElementsByClassName("choicecomp")[0].style.display="none";
  document.getElementsByClassName("prestartcomp")[0].style.display="none";
  document.getElementsByClassName("grid")[0].style.display="grid";
  t=document.getElementsByClassName("info")[0];
  t.innerText="Turn for "+turn;
  t.style.display="flex";
  document.getElementById("reset").style.display="flex";
  if(start===0)
    firstmove();
}
function dot1()
{
  if(start===-1)
  {
   alert("Choose start player first");
   return;
  }
  if(start===0)
  {
  turn='X';
  st='X';
  }
  else
  {
    turn='O';
    st='O';
  }
  document.getElementsByClassName("choicecomp")[0].style.display="none";
  document.getElementsByClassName("prestartcomp")[0].style.display="none";
  document.getElementsByClassName("grid")[0].style.display="grid";
  t=document.getElementsByClassName("info")[0];
  t.innerText="Turn for "+turn;
  t.style.display="flex";
  document.getElementById("reset").style.display="flex";
  if(start===0)
    firstmove();
}
function cross2()
{
  turn='X';
  st='X';
  document.getElementsByClassName("choice2p")[0].style.display="none";
  document.getElementsByClassName("grid")[0].style.display="grid";
  t=document.getElementsByClassName("info")[0];
  t.innerText="Turn for "+turn;
  t.style.display="flex";
  document.getElementById("reset").style.display="flex";
}
function dot2()
{
  turn='O';
  st='O';
  document.getElementsByClassName("choice2p")[0].style.display="none";
  document.getElementsByClassName("grid")[0].style.display="grid";
  t=document.getElementsByClassName("info")[0];
  t.innerText="Turn for "+turn;
  t.style.display="flex";
  document.getElementById("reset").style.display="flex";
}
function firstmove()
{
         var ra=Math.floor(Math.random()*9);
         let boxtexts=document.getElementsByClassName("text");
         boxtexts[ra].innerText=turn;
         winch();
         changeTurn();
         if(over===0)
        document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
}