const buttonStart = document.getElementById('button-start');

const outerOne = document.getElementById('outer-one');
const outerTwo = document.getElementById('outer-two');

buttonStart.addEventListener('click', startFunction);

function startFunction() {
    // $('.outer-one').slideToggle('slow');
    // $('.outer-two').css('display', 'flex');

    $('#button-start').hide('slow');

    // slide($('.outer-one .s40'));

    $('.outer-one .s40').hide('slide', {direction: 'right'}, 1000);

    // $('.outer-one .s40').slideToggle('slow');
    $('.outer-one .s60').slideToggle('fast');

    $('.outer-two').css('display', 'flex');
}

function slide($element) {
    // marginLeft = $element.css('margin-left');

    // marginLeftSplit = marginLeft.split('px');

    // marginLeftPx = marginLeftSplit[0];

    // windowWidth = $(window).width();

    // while($element.css('margin-left'))
}
