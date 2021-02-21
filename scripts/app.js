
const scroll_lottie = document.querySelector('#lottie-scroll');
const lottie_burger = document.querySelector('#lottie-burger');
const menu_box = document.querySelector('#menuBox');



// lottie.loadAnimation({
//     container: scroll_lottie, // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: './../images/scroll-animation.json' // the path to the animation json
// });
let menu_burger_animation = lottie.loadAnimation({
    container: lottie_burger, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './../images/menu-animation.json' // the path to the animation json
});

// menu animation
lottie_burger.addEventListener('click', function (e) {

    if (lottie_burger.classList.contains("closed-burger")) {
        menu_box.classList.toggle('open-menu')
        lottie_burger.classList.toggle("closed-burger")
        menu_burger_animation.playSegments([0, 90], true)
        lottie_burger.classList.add("opened-burger")

    } else {
        lottie_burger.classList.add("closed-burger")
        menu_burger_animation.playSegments([90, 180], true)
        lottie_burger.classList.toggle("opened-burger")
        menu_box.classList.remove('open-menu')
    }
});


window.addEventListener('scroll', function (e) {

    const target = document.querySelectorAll('.scrollMe');

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.speed;

        if (target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;

            target[index].style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0px)';
        }
    }
});