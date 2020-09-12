const buttonStart = document.getElementById('button-start');

const outerOne = document.getElementById('outer-one');
const outerTwo = document.getElementById('outer-two');

buttonStart.addEventListener('click', startFunction);

function startFunction() {
    // $('.outer-one').slideToggle('slow');
    // $('.outer-two').css('display', 'flex');

    // $('#button-start').hide('slow');

    slide($('.outer-one .s40'));

    // $('.outer-one .s40').hide('slide', {direction: 'right'}, 1000);

    // $('.outer-one .s40').slideToggle('slow');
    $('.outer-one .s60').slideToggle('fast');

    $('.outer-two').css('display', 'flex');
}

function slide($element) {
    marginLeft = $element.css('margin-left');

    marginLeftSplit = marginLeft.split('px');

    marginLeftPx = parseInt(marginLeftSplit[0]);

    windowWidth = $(window).width();

    var edgePosition = document.getElementById('s40').getBoundingClientRect();

    // console.log(windowWidth);
    // console.log(edgePosition.right);

    // marginLeftPx += 1000;

    // $element.css('margin-left', marginLeftPx.toString() + 'px');

    // console.log(edgePosition.right);

    var id = setInterval(frame, 1);

    function frame() {
        // if(marginLeftPx == edgePosition.right || marginLeftPx > edgePosition.right) {
        //     console.log('canceled!');
        //     clearInterval(id);
        // } else {
        //     marginLeftPx += 100;
        //     edgePosition = document.getElementById('s40').getBoundingClientRect();

        //     $element.css('margin-left', marginLeftPx.toString() + 'px');
        // }

        if(edgePosition.right == windowWidth || edgePosition.right > windowWidth) {
            console.log(edgePosition.right);
            console.log(windowWidth);
            console.log('ended!');
            console.log(marginLeftPx);
            clearInterval(id);
        }

        marginLeftPx += 1;

        edgePosition = document.getElementById('s40').getBoundingClientRect();

        $element.css('margin-left', marginLeftPx.toString() + 'px');
    }


    // while(edgePosition.right < windowWidth) {
    //     edgePosition = document.getElementById('s40').getBoundingClientRect();
    //     console.log('update');
    // }
}
