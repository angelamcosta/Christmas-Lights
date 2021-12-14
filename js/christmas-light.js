var screen = Math.round(screen.width / 128);
var isOn = true;

function addLights() {
    if (screen >= 4) {
        for (var i = 0; i < screen; i++) {
            $('#container').append('<div class="light"> </div>');
        }
    } else {
        for (var j = 0; j < 4; j++) {
            $('#container').append('<div class="light"> </div>');
        }
    }
}

function changeAnimation(time) {
    switch (time) {
        case '1':
            animationCss(1, 0.5);
            break;
        case '2':
            animationCss(2, 1);
            break;
        case '3':
            animationCss(3, 1.5);
            break;
    }
}

function animationCss(time, delay) {
    $('.light:nth-child(4n + 1)').css({
        animation: 'green '+ time +'s '+ delay * 0 +'s linear infinite alternate',
    });
    $('.light:nth-child(4n + 2)').css({
        animation: 'yellow '+ time +'s '+ delay * 1 +'s linear infinite alternate',
    });
    $('.light:nth-child(4n + 3)').css({
        animation: 'red '+ time +'s '+ delay * 2 +'s linear infinite alternate',
    });
    $('.light:nth-child(4n)').css({
        animation: 'blue '+ time +'s '+ delay * 3+'s linear infinite alternate',
    });
}

function toggleLights() {
    if (isOn) {
        $('.light').css({
            animation: 'none',
            'box-shadow': 'none',
            opacity: '.3',
        });
        isOn = false;
        $('#lightSwitch').html('Turn on!');
    } else {
        isOn = true;
        $('#container').empty();
        addLights();
        $('#lightSwitch').html('Turn off');
    }
}

$('#changeTime').click(function () {
    changeAnimation($('#time').val());
});

addLights();
