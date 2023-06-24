var slideIndex = 1;
showSlider(slideIndex);
var autoSlideInterval = setInterval(function () {
    plusSlider(1);
}, 3000);

function plusSlider(n) {
    showSlider(slideIndex += n);
}

function currentSlider(n) {
    showSlider(slideIndex = n);
}

function showSlider(n) {
    var i;
    var slider = document.getElementsByClassName("mySlider");
    var dots = document.getElementsByClassName("dot");
    if (n > slider.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slider.length }
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slider[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
const back_color_menu = document.querySelector('.menu');
const slider = document.getElementById('slider');


window.addEventListener('scroll', function() {
  const sliderRect = slider.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  if (sliderRect.bottom <= windowHeight && scrollPosition >= sliderRect.top) {
    down();
  } else {
up();
  }
});

function down() {
  back_color_menu.classList.add('menu-scroll-down');
}
function up() {
  back_color_menu.classList.remove('menu-scroll-down');
}
var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4){
            counter =1;

        }
    }, 5000);


const btn = document.querySelector('.menu-btn');

btn.addEventListener('click',
function (event) {
  back_color_menu.classList.add('add')
})