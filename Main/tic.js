var turn = 'X'
let over = 0;
var st = 'X';
var start = 1;
var mode = 0;
var name1 = "";
var name2 = "";
var nt = "";
var stnt = "";
var modex = sessionStorage.getItem("mode");
console.log(modex);
mode = Number(modex);
turn = sessionStorage.getItem("turn");
var star = sessionStorage.getItem("start");
start = Number(star);
if (mode === 0) {
  name1 = sessionStorage.getItem("name1");
  if (name1 === "")
    name1 = "You";
  if (name1.toLowerCase() === "computer")
    name1 = "You";
}
if (mode === 1) {
  name1 = sessionStorage.getItem("name1");
  name2 = sessionStorage.getItem("name2");
  if (name1 === "")
    name1 = "Player1";
  if (name2 === "")
    name2 = "Player2";
}
name1 = name1.slice(0, 9);
name2 = name2.slice(0, 9);
if (name1 === name2) {
  name1 += '1';
  name2 += '2';
}
if ((mode === 0) && (start === 0)) {
  if (turn === 'X')
    turn = 'O';
  else if (turn === 'O')
    turn = 'X';
  nt = "Computer";
}
else if (mode === 0)
  nt = name1;
if ((mode === 1) && (start === 1)) {
  if (turn === 'X')
    turn = 'O';
  else if (turn === 'O')
    turn = 'X';
  nt = name2;
}
else if (mode === 1)
  nt = name1;
st = turn;
stnt = nt;
document.getElementsByClassName("tur")[0].innerText = "Turn for " + nt + " (" + turn + ")";
let sy = document.getElementById("syou");
let sco = document.getElementById("scomp");
if (mode === 1) {
  sy.innerText = name1 + " :";
  sco.innerText = name2 + " :";
}
if (mode === 0) {
  sy.innerText = name1 + " :";
}
function changeTurn() {
  if (turn === 'X')
    turn = 'O';
  else
    turn = 'X';
  if (mode === 0) {
    if (nt === name1)
      nt = "Computer";
    else
      nt = name1;
  }
  if (mode === 1) {
    if (nt === name1)
      nt = name2;
    else
      nt = name1;
  }
}
let wins = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];
let ans = -1, f = 0;
let grid = document.getElementById("main");
let boxes = grid.getElementsByClassName("btn");
let reset1 = document.getElementById("reset1");
let reset2 = document.getElementById("reset2");
let yousc = document.getElementById("you");
let comsc = document.getElementById("computer");
let ys = 0, cs = 0;
if ((mode === 0) && (start === 0))
  firstmove();
for (let i = 0; i < 9; i++) {
  boxes[i].addEventListener("click", function () {
    turndone(i);
  });
}
reset1.addEventListener('click', () => {
  let boxtext = document.getElementsByClassName("txt");
  for (let i = 0; i < boxtext.length; i++)
    boxtext[i].innerText = '';
  turn = st;
  document.getElementsByClassName("tur")[0].innerText = "Turn for " + stnt + " (" + turn + ")";
  nt = stnt;
  if (ans !== -1) {
    boxes[wins[ans][0]].style.backgroundColor = "rgb(13, 202, 240)";
    boxes[wins[ans][1]].style.backgroundColor = "rgb(13, 202, 240)";
    boxes[wins[ans][2]].style.backgroundColor = "rgb(13, 202, 240)";
    boxes[wins[ans][0]].classList.remove("active");
    boxes[wins[ans][1]].classList.remove("active");
    boxes[wins[ans][2]].classList.remove("active");
  }
  for (let i = 0; i < 9; i++)
    boxes[i].style.pointerEvents = "initial";
  over = 0;
  ans = -1;
  f = 0;
  if ((mode === 0) && (start === 0))
    firstmove();
});
reset2.addEventListener('click', () => {
  ys = 0;
  cs = 0;
  yousc.innerText = ys;
  comsc.innerText = cs;
});
function turndone(i) {
  if (over == 1)
    return;
  let tx = boxes[i].getElementsByClassName("txt");
  if (tx[0].innerText !== '')
    return;
  tx[0].innerText = turn;
  console.log(tx[0].innerText);
  winch();
  changeTurn();
  if (over === 0)
    document.getElementsByClassName("tur")[0].innerText = "Turn for " + nt + " (" + turn + ")";
  if ((mode === 0) && (over === 0)) {
    var empty = [];
    for (let i = 0; i < 9; i++) {
      let boxtexts = boxes[i].getElementsByClassName("txt");
      if (boxtexts[0].innerText === '')
        empty.push(i);
    }
    //  console.log(empty);
    var ra = Math.floor(Math.random() * empty.length);
    console.log(ra)
    let boxtexts = boxes[empty[ra]].getElementsByClassName("txt");
    boxtexts[0].innerText = turn;
    winch();
    changeTurn();
    if (over === 0)
      document.getElementsByClassName("tur")[0].innerText = "Turn for " + nt + " (" + turn + ")";
  }
}
function winch() {
  let boxtexts = document.getElementsByClassName("txt"), winner = name1;
  f = 0;
  if (over === 1)
    return;
  for (let i = 0; i < wins.length; i++) {
    if ((boxtexts[wins[i][0]].innerText === boxtexts[wins[i][1]].innerText) && (boxtexts[wins[i][2]].innerText === boxtexts[wins[i][0]].innerText) && boxtexts[wins[i][0]].innerText !== "") {
      if (mode === 1) {
        if (turn !== st) {
          winner = name2;
          cs += 1;
        }
        else
          ys += 1;
        document.getElementsByClassName("tur")[0].innerText = winner + " (" + turn + ") is the Winner";
        yousc.innerText = ys;
        comsc.innerText = cs;
      }
      if (mode === 0) {
        let tex;
        if (start === 0) {
          if (st !== turn) {
            tex = name1 + " (" + turn + ") won";
            ys += 1;
          }
          else {
            tex = "DotBot" + " (" + turn + ") won";
            cs += 1;
          }
        }
        else {
          if (start === 1) {
            if (st === turn) {
              tex = name1 + " (" + turn + ") won";
              ys += 1;
            }
            else {
              tex = "DotBot" + " (" + turn + ") won";
              cs += 1;
            }
          }
        }
        document.getElementsByClassName("tur")[0].innerText = tex;
        yousc.innerText = ys;
        comsc.innerText = cs;
      }
      boxes[wins[i][0]].style.backgroundColor = "rgb(25, 108, 190)";
      boxes[wins[i][1]].style.backgroundColor = "rgb(25, 108, 190)";
      boxes[wins[i][2]].style.backgroundColor = "rgb(25, 108, 190)";
      boxes[wins[i][0]].className += " active"
      boxes[wins[i][1]].className += " active"
      boxes[wins[i][2]].className += " active"
      for (let i = 0; i < 9; i++)
        boxes[i].style.pointerEvents = "none";
      over = 1;
      ans = i;
      console.log("Over")
      break;

    }
  }
  if (over === 0) {
    for (let i = 0; i < 9; i++) {
      if (boxtexts[i].innerText === '') {
        f = 1;
        break;
      }
    }
    if (f === 0) {
      over = 1;
      console.log("Draw");
      document.getElementsByClassName("tur")[0].innerText = "Draw";
      for (let i = 0; i < 9; i++)
        boxes[i].style.pointerEvents = "none";
      return;
    }
  }
}
function firstmove() {
  var ra = Math.floor(Math.random() * 9);
  let boxtexts = document.getElementsByClassName("txt");
  boxtexts[ra].innerText = turn;
  winch();
  changeTurn();
  if (over === 0)
    document.getElementsByClassName("tur")[0].innerText = "Turn for " + nt + " (" + turn + ")";
}
let fas = document.getElementsByClassName("fa");
for (let i = 0; i < 5; i++) {
  fas[i].addEventListener("click", () => {
    update(i);
  })
}
function update(i) {
  for (let j = 0; j < 5; j++)
    fas[j].classList.remove("checked");
  for (let j = 0; j <= i; j++)
    fas[j].classList += " checked";
}
let rev = document.getElementById("rev");
let clo = document.getElementById("close");
let revi = document.getElementById("review");
rev.addEventListener("click", () => {
  for (let j = 0; j < 5; j++)
    fas[j].classList.remove("checked");
  revi.value = "";
})
clo.addEventListener("click", () => {
  for (let j = 0; j < 5; j++)
    fas[j].classList.remove("checked");
  revi.value = "";
})