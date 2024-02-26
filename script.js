const inputs = document.querySelectorAll(".input-feild");
const toggleBtn = document.querySelectorAll(".toggle");
const main = document.querySelector(".wrapper");
const bullets = document.querySelectorAll(".bullets span");
const image = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggleBtn.forEach((btn ) => {
    btn.addEventListener('click',() => {
        main.classList.toggle('sign-up-mode');
    });
});

let moveBullets = function(){
  let index = this.dataset.value;
  console.log(index);
  let currentImage = document.querySelector(`.img-${index}`)
  image.forEach((img) => img.classList.remove('show'));
  currentImage.classList.add('show');

  let textSlider = document.querySelector('.text-group');
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`


  console.log(index);
  bullets.forEach(bull => {
    bull.classList.remove('active')
  });
  this.classList.add('active')
};





bullets.forEach(bull => {
  bull.addEventListener('click', moveBullets)
});
