const slider = document.querySelector('.slider-7 ul');
slider.addEventListener('mouseenter', function () {
    slider.style.animationPlayState = 'paused';
});
slider.addEventListener('mouseleave', function () {
    slider.style.animationPlayState = 'running';
});

const list7 = document.querySelectorAll(".slider-7 ul li img");

function ev(i) {
    list7[i].onclick = () => {
        var data = list7[i].getAttribute("src");

        var backg = document.querySelector(".main-7");
        backg.style.background = `url("/img/—Pngtree—blurred colored lights a textured_15213161.png"), linear-gradient(45deg, rgba(61, 28, 2, 0.5), rgba(166, 129, 76, 0.5)), url("${data}") center center fixed`;
    }
}

for(var i = 0; i < list7.length; i++){
    ev(i);
}
