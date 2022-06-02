$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoWidth: true,
    nav: false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }

})

var $homeSlider = $(".home-slider");

$(window).resize(function () {
    showHomeSlider();
});

function showHomeSlider() {
    if ($homeSlider.data("owlCarousel") !== "undefined") {
        if (window.matchMedia('(max-width: 600px)').matches) {
            destroyHomeSlider();
        } else {
            initialHomeSlider();
        }
    }
}
showHomeSlider();

function initialHomeSlider() {
    $homeSlider.addClass("owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000
    });
}

function destroyHomeSlider() {
    $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}



function menuToggle() {
    const toggleMenu = document.querySelector('.pro-menu');
    toggleMenu.classList.toggle('active')
}

window.addEventListener('mouseup', function(event){
    var box = this.document.getElementById('drpdwn');
    if(event.target != box && event.target.parentNode != box ){
        box.style.display = 'none' ;

    }
});

const $menu = $('#clickable');

$(document).mouseup(e => {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
        && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $menu.removeClass('is-active');
    }
});

$('.toggle').on('click', () => {
    $menu.toggleClass('is-active');
});




const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", e => {
    const value = e.target.value 
    console.log(value)
})



