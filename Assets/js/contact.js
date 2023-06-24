
    document.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
    });

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
   
var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4){
                counter =1;

            }
        }, 5000);


  
