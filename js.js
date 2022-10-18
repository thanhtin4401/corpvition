document.querySelector('.mode-container').addEventListener("click", () => {
    document.body.classList.toggle('dark__theme');
    if (document.body.classList.contains('dark__theme')) {
        document.querySelector('.mode-container').innerHTML = `<i class="fa-regular fa-sun"></i>`;

    } else {
        document.querySelector('.mode-container').innerHTML = `<i class="fa-solid fa-moon"></i>`;


    }
})

var navbar_toggle = document.querySelector(".navbar-toggler");
// console.log(navbar_toggle);

var site_header = document.getElementById('site-header');
navbar_toggle.addEventListener('click', () => {
    site_header.classList.toggle('active')
});


// slick
// $('.banner__slider').slick({
//     dots: false,
//     infinite: true,
//     // speed: 500,
//     fade: true,
//     cssEase: 'linear',
//     auto: true,
//     autoplay: 200,
// });

// document.querySelector('.slick-next').innerHTML = `<i class="fa-solid fa-arrow-left"></i>`
// document.querySelector('.slick-prev').innerHTML = `<i class="fa-solid fa-arrow-right"></i>`
// // sticky
// $(document).ready(function () {
//     $(window).scroll(function () {
//         if (this.scrollY > 30) {
//             $('.main-header').addClass('sticky');
//         } else {
//             $('.main-header').removeClass('sticky');

//         }

//     })
// })


$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 30) {
            $('.main-header').addClass('sticky');
        } else {
            $('.main-header').removeClass('sticky');

        }

    })
})


// click search
var body = document.getElementById('body')
document.querySelector('.control').addEventListener('click', () => {
    body.classList.add("search__active");
    // console.log(e.target);
});

document.querySelector('.icon-close-search').addEventListener('click', () => {
    $('.body').removeClass('search__active');

});
// move top
mybutton = document.getElementById("movetop")
window.onscroll = function () { scrollFunction() }
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}