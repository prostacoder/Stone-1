$(document).ready(function(event) {
$('.header__form-number').focus(function (event) {

$('header').addClass('click');

    })
})

$(document).ready(function (event) {
    $('.header__form-number').blur(function (event) {

        $('header').removeClass('click');

    })
})