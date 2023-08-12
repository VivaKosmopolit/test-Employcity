let slider = document.getElementById("range");
let output = document.getElementById("counter");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

window.addEventListener("scroll", function (){
    const navbar = document.querySelector(".header__navigation-wrapper");
    navbar.classList.toggle("header__navigation-wrapper_sticky", window.scrollY > 0);
})