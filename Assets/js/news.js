let jjj = document.querySelector(".btn-sub");
    jjj.addEventListener("click", () => {
        jjj.classList.add('clicked');
        setTimeout(() => {
            jjj.classList.remove('clicked');
        }, 100);
    });

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        wrapAround: true,
        freeScroll: true,
      
      });