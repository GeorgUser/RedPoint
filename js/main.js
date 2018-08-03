$(document).ready(function(){

    $('.red-point').click(function () {
        $('.wind').addClass('win');
    })

    animateDiv();
});

function makeNewPosition(){
    var h = $(window).height() - 30;
    var w = $(window).width() - 30;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
}


function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.red-point').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.red-point').animate({ top: newq[0], left: newq[1] }, speed, function(){
        animateDiv();
    })
};

var speedModifier = 0.1;

function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
}
$('.wind').click(function() {
    speedModifier = speedModifier + 0.2;
    $('.wind').removeClass('win');
    console.log(speedModifier);
});

// function uplvl(oldSpeed) {
//     var newSpeed = oldSpeed + 0.2;
//     console.log(newSpeed);
//     return newSpeed;
//     }


