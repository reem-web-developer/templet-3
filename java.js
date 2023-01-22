let nums = document.querySelectorAll(".state .number");
let section2 = document.querySelector(".state");
let started = false; // Function Started ? No
let spans = document.querySelectorAll(".skills .progress span");
let section3 = document.querySelector(".our-skills");

window.onscroll = function () {
  if (window.scrollY >= section2.offsetTop - 100) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }

  if (window.scrollY >= section3.offsetTop - 100) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

 
   
  
