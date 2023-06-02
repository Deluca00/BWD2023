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

const back_color_menu = document.querySelector('.menu')
window.addEventListener('wheel', function (event) {
    var delta = event.deltaY; // Lấy giá trị delta cuộn chuột
    function down() {
        back_color_menu.classList.add('menu-scroll-down')

    }
    function up() {
        back_color_menu.classList.remove('menu-scroll-down')

    }
    if (delta > 0) {
        down()
    } else {
        up()
    }
});
var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4){
                counter =1;

            }

        }, 5000);