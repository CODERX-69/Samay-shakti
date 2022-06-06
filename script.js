
// owl carousel responsiveness
$('.owl-carousel').owlCarousel({
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    autoWidth: true,
    nav: false,
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
// owl carousel disable enable start

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

// owl carousel disable enable end

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


// Search Half done

const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", e => {
    const value = e.target.value 
    console.log(value)
})

// OTP Number 

$('.otp-number').find('input').each(function () {
    $(this).attr('maxlength', 1);
    $(this).on('keyup', function (e) {
        var parent = $($(this).parent());

        if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find('input#' + $(this).data('previous'));

            if (prev.length) {
                $(prev).select();
            }
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = parent.find('input#' + $(this).data('next'));

            if (next.length) {
                $(next).select();
            } else {
                if (parent.data('autosubmit')) {
                    parent.submit();
                }
            }
        }
    });
});



// overlay
