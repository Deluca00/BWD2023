const search = document.querySelector('.js-search-btn')
const searchInput = document.querySelector('.search-input')
const closeInput = document.querySelector('.js-search-close');


search.addEventListener('click',
    function (event) {
        searchInput.classList.add('open')
    })

closeInput.addEventListener('click',
    function (event) {
        searchInput.classList.remove('open')
    })

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