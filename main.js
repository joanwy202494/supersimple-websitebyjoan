/*conceptchangediagram
var click_count = 4;


a.addEventListener("click", page1, false);

function page1(){
  if (click_count % 4 == 0){
      a.style.backgroundColor="blue";
      b.style.backgroundColor="blue";
      c.style.backgroundColor="#f1f1f1";
      d.style.backgroundColor="#000000";

  } else if (click_count % 4 == 1){
      a.style.backgroundColor="blue";
      b.style.backgroundColor="blue";
      c.style.backgroundColor="#f1f1f1";
      d.style.backgroundColor="#000000";

  } else if (click_count % 4 == 2){
      a.style.backgroundColor="yellow";
      b.style.backgroundColor="yellow";
      c.style.backgroundColor="#000000";
      d.style.backgroundColor="#f1f1f1";

  } else if (click_count % 4 == 3){
      a.style.backgroundColor="green"
      b.style.backgroundColor="yellow";
      c.style.backgroundColor="#000000";
      d.style.backgroundColor="#f1f1f1";
}
click_count++;
}



const wholepage=document.getElementById("page1");
const a=document.getElementById("diagramLeftTop");
const b=document.getElementById("diagramRightTop");
const c=document.getElementById("diagramLeftBottom");
const d=document.getElementById("diagramRightBottom");
*/



/*navbar*/
const navbarbutton = document.getElementById("navbarbutton");
const navbar = document.getElementById("navbar");
const navbarconcept = document.getElementById("navbarconcept");
const navbarwork = document.getElementById("navbarwork");
const navbarextra = document.getElementById("navbarextra");
const navbartop = document.getElementById("navbartop");

navbarbutton.addEventListener("click",funcNavbar,false);
function funcNavbar(){
  if (navbar.style.transform == "translateX(300px)"){
      navbar.style.transform = "translateX(0px)";
      navbarconcept.style.display = "inline-block";
      navbarwork.style.display = "inline-block";
      navbarextra.style.display = "inline-block";
      navbartop.style.display = "inline-block";
  } else {
      navbar.style.transform = "translateX(300px)";
      navbarconcept.style.display = "none";
      navbarwork.style.display = "none";
      navbarextra.style.display = "none";
      navbartop.style.display = "none";
  }
}


/* 9/14: retrigger animation doesn't work

navbarbutton.addEventListener("click",funcNavbar,false);
function funcNavbar(){
  if (navbar.style.display == "none"){
      navbar.style.display = "block";
      navbar.classList.add("navbarOut")
      setTimeout((function(){
        navbar.classList.remove("navbarOut"),1000
       }))
  } else {
      navbar.style.display = "none";
      navbar.classList.add("navbarOn");
      setTimeout((function(){
        navbar.classList.remore("navbarOn"),1000
       }))
  }
}

*/



/*changeworkcontent*/
const work1 = document.getElementById("work1");
const work2 = document.getElementById("work2");
const work3 = document.getElementById("work3");

const hashtag1 = document.getElementById("workhashtag1");
const hashtag2 = document.getElementById("workhashtag2");
const hashtag3 = document.getElementById("workhashtag3");
const hashtag4 = document.getElementById("workhashtag4");
const hashtag5 = document.getElementById("workhashtag5");
const hashtag6 = document.getElementById("workhashtag6");
const hashtag7 = document.getElementById("workhashtag7");
const hashtag8 = document.getElementById("workhashtag8");
const hashtag9 = document.getElementById("workhashtag9");
const hashtag10 = document.getElementById("workhashtag10");
const hashtag11 = document.getElementById("workhashtag11");
const hashtag12 = document.getElementById("workhashtag12");

const workcontent1 = document.getElementById("workcontent1");
const workcontent2 = document.getElementById("workcontent2");
const workcontent3 = document.getElementById("workcontent3");


work1.addEventListener("click", func1, false);
work2.addEventListener("click", func2, false);
work3.addEventListener("click", func3, false);

function func1(){
   work1.setAttribute("style","width:600px");
   work2.setAttribute("style","width:50px;");
   work3.setAttribute("style","width:50px;");
   work1.style.backgroundColor = "white";
   work2.style.backgroundColor = "black";
   work3.style.backgroundColor = "black";
   work1.style.color = "black";
   work2.style.color = "white";
   work3.style.color = "white";
   hashtag1.style.display = "inline-block";
   hashtag2.style.display = "inline-block";
   hashtag3.style.display = "inline-block";
   hashtag4.style.display = "inline-block";
   hashtag5.style.display = "none";
   hashtag6.style.display = "none";
   hashtag7.style.display = "none";
   hashtag8.style.display = "none";
   hashtag9.style.display = "none";
   hashtag10.style.display = "none";
   hashtag11.style.display = "none";
   hashtag12.style.display = "none";
   workcontent1.style.display = "block";
   workcontent2.style.display = "none";
   workcontent3.style.display = "none";
  }

function func2(){
   work1.setAttribute("style", "width:50px");
   work2.setAttribute("style", "width:600px;");
   work3.setAttribute("style", "width:50px;");
   work1.style.backgroundColor = "black";
   work2.style.backgroundColor = "white";
   work3.style.backgroundColor = "black";
   work1.style.color = "white";
   work2.style.color = "black";
   work3.style.color = "white";
   hashtag1.style.display = "none";
   hashtag2.style.display = "none";
   hashtag3.style.display = "none";
   hashtag4.style.display = "none";
   hashtag5.style.display = "inline-block";
   hashtag6.style.display = "inline-block";
   hashtag7.style.display = "inline-block";
   hashtag8.style.display = "inline-block";
   hashtag9.style.display = "none";
   hashtag10.style.display = "none";
   hashtag11.style.display = "none";
   hashtag12.style.display = "none";
   workcontent1.style.display = "none";
   workcontent2.style.display = "block";
   workcontent3.style.display = "none";
  }

function func3(){
   work1.setAttribute("style", "width:50px");
   work2.setAttribute("style", "width:50px;");
   work3.setAttribute("style", "width:600px;");
   work1.style.backgroundColor = "black";
   work2.style.backgroundColor = "black";
   work3.style.backgroundColor = "white";
   work1.style.color = "white";
   work2.style.color = "white";
   work3.style.color = "black";
   hashtag1.style.display = "none";
   hashtag2.style.display = "none";
   hashtag3.style.display = "none";
   hashtag4.style.display = "none";
   hashtag5.style.display = "none";
   hashtag6.style.display = "none";
   hashtag7.style.display = "none";
   hashtag8.style.display = "none";
   hashtag9.style.display = "inline-block";
   hashtag10.style.display = "inline-block";
   hashtag11.style.display = "inline-block";
   hashtag12.style.display = "inline-block";
   workcontent1.style.display = "none";
   workcontent2.style.display = "none";
   workcontent3.style.display = "block";
  }

/*
const ctx = canvas.getContext("2d");
const width = 4;
const height = 4;
const maxWH = Math.max(width, height);

function setup() {
  ctx.beginPath
  context.fillStyle = color;
}
*/


