const inputs = document.querySelectorAll(".input-feild");
const toggle_btn = document.querySelectorAll(".toogle");
const main = document.querySelectorAll(".main");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((toggle ) => {
    toggle.addEventListener('click',() => {
        main.classList.add('sign-up-mode')
    })
})
