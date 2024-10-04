/*intersection observer
remember dont overlap multiple animation in CSS, otherwise doesnt work*/
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  
const callback1 = function (entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer1.unobserve(entry.target);
      }
  });
};

const observer1 = new IntersectionObserver(callback1, options);
const targets1 = document.querySelectorAll('.target');
targets1.forEach(target => {observer1.observe(target);});


const callback2 = function (entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animateddiagram');
          observer2.unobserve(entry.target);
      }
  });
};

const observer2 = new IntersectionObserver(callback2, options);
const targets2 = document.querySelectorAll('.target2');
targets2.forEach(target => {observer2.observe(target);});




/*navbar*/
const navbarbutton = document.getElementById("navbarbutton");
const navbar = document.getElementById("navbar");
const navbarconcept = document.getElementById("navbarconcept");
const navbarwork = document.getElementById("navbarwork");
const navbarextra = document.getElementById("navbarextra");
const navbartop = document.getElementById("navbartop");
const navbarcontact = document.getElementById("navbarcontact");

navbarbutton.addEventListener("click", funcNavbar, false);

function funcNavbar() {
  if (navbar.style.transform === "translateX(300px)" || navbar.style.transform === "") {
      navbar.style.transform = "translateX(0px)";
      navbar.style.borderWidth = "1px";
      navbarconcept.style.display = "block";
      navbarwork.style.display = "block";
      navbarextra.style.display = "block";
      navbartop.style.display = "block";
      navbarcontact.style.display = "block";
  } else {
      navbar.style.transform = "translateX(300px)";
      navbarconcept.style.display = "none";
      navbarwork.style.display = "none";
      navbarextra.style.display = "none";
      navbartop.style.display = "none";
      navbarcontact.style.display = "none";
  }
}

/*extra button*/
document.getElementById('navbarextra').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent any default action
  // Add your custom logic here
});


/*change work content*/


const workno1 = document.getElementById("workno1");
const workno2 = document.getElementById("workno2");
const workno3 = document.getElementById("workno3");

const workcontentbackgroundon = document.getElementById("workcontentbackgroundon"); 

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
const workcontentbelowimage1 = document.getElementById("workcontentbelowimage1");
const workcontentbelowimage2 = document.getElementById("workcontentbelowimage2");
const workcontentbelowimage3 = document.getElementById("workcontentbelowimage3");

const workimage1 = document.getElementById("workimage1");
const workimage2 = document.getElementById("workimage2");
const workimage3 = document.getElementById("workimage3");


workno1.addEventListener("click", func1, false);
workno2.addEventListener("click", func2, false);
workno3.addEventListener("click", func3, false);

function func1(){
    workno1.style.backgroundColor = "#F1F1F1";
    workno2.style.backgroundColor = "#222222";
    workno3.style.backgroundColor = "#222222";
    workno1.style.color = "#222222";
    workno2.style.color = "#F1F1F1";
    workno3.style.color = "#F1F1F1";
    hashtag1.style.display = "inline-block";
    hashtag2.style.display = "inline-block";
    hashtag3.style.display = "inline-block";
    hashtag4.style.display = "inline-block";
    for (let i = 5; i <= 12; i++) {
      document.getElementById(`workhashtag${i}`).style.display = "none";
  }
  workcontent1.style.display = "block";
  workcontent2.style.display = "none";
  workcontent3.style.display = "none";
  workcontentbelowimage1.style.display = "block";
  workcontentbelowimage2.style.display = "none";
  workcontentbelowimage3.style.display = "none";

  workcontentbelowimage1.style.zIndex = 0;
  workcontentbelowimage2.style.zIndex = -2;
  workcontentbelowimage3.style.zIndex = -2;

  workimage1.style.display = "block";
  workimage2.style.display = "none";
  workimage3.style.display = "none";

  workcontentbackgroundon.style.borderImageSource ="radial-gradient(circle, rgba(242,191,172,1) 4%, rgba(70,109,252,1) 33%, rgba(183,51,210,1) 65%, rgba(76,245,213,1) 100%)";


};


function func2(){
   workno1.style.backgroundColor = "#222222";
   workno2.style.backgroundColor = "#F1F1F1";
   workno3.style.backgroundColor = "#222222";
   workno1.style.color = "#F1F1F1";
   workno2.style.color = "#222222";
   workno3.style.color = "#F1F1F1";
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
   workcontent2.style.display = "inline-block";
   workcontent3.style.display = "none";
   workcontentbelowimage1.style.display = "none";
   workcontentbelowimage2.style.display = "block";
   workcontentbelowimage3.style.display = "none";

   workcontentbelowimage1.style.zIndex = -2;
   workcontentbelowimage2.style.zIndex = 0;
   workcontentbelowimage3.style.zIndex = -2;

   workimage1.style.display = "none";
   workimage2.style.display = "inline-block";
   workimage3.style.display = "none";

   workcontentbackgroundon.style.borderImageSource ="radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(76,245,239,1) 45%, rgba(252,70,200,1) 81%)";
   
  }

function func3(){
   workno1.style.backgroundColor = "#222222";
   workno2.style.backgroundColor = "#222222";
   workno3.style.backgroundColor = "#F1F1F1";
   workno1.style.color = "#F1F1F1";
   workno2.style.color = "#F1F1F1";
   workno3.style.color = "#222222";

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
   workcontent3.style.display = "inline-block";
   workcontentbelowimage1.style.display = "none";
   workcontentbelowimage2.style.display = "none";
   workcontentbelowimage3.style.display = "block";

   workcontentbelowimage1.style.zIndex = -2;
   workcontentbelowimage2.style.zIndex = -2;
   workcontentbelowimage3.style.zIndex = 0;

   workimage1.style.display = "none";
   workimage2.style.display = "none";
   workimage3.style.display = "inline-block";

   workcontentbackgroundon.style.borderImageSource ="radial-gradient(circle, rgba(251,130,63,1) 13%, rgba(252,105,70,1) 33%, rgba(170,143,176,1) 62%, rgba(76,245,239,1) 100%)";

}
