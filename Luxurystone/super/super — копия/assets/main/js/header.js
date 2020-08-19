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

document.querySelector('.header__form-number').addEventListener('keyup', function(){
    this.value = this.value.replace(/[^\d]/g, '');
});