var screen = Math.round(screen.width / 128);
var isOn = true;

function addLights() {
    if (screen >= 4) {
        for (var i = 0; i < screen; i++) {
            $('#container').append('<div class="light"> </div>');
        }
    } else {
        for (var i = 0; i < 4; i++) {
            $('#container').append('<div class="light"> </div>');
        }
    }
}

function changeAnimation(time) {
    switch (time) {
        case '1':
            $('.light:nth-child(4n + 1)').css({
                animation: 'green 1s linear infinite alternate',
            });
            $('.light:nth-child(4n + 2)').css({
                animation: 'yellow 1s 0.5s linear infinite alternate',
            });
            $('.light:nth-child(4n + 3)').css({
                animation: 'red 1s 1s linear infinite alternate',
            });
            $('.light:nth-child(4n)').css({
                animation: 'blue 1s 1.5s linear infinite alternate',
            });
            break;
        case '2':
            $('.light:nth-child(4n + 1)').css({
                animation: 'green 2s linear infinite alternate',
            });
            $('.light:nth-child(4n + 2)').css({
                animation: 'yellow 2s 1s linear infinite alternate',
            });
            $('.light:nth-child(4n + 3)').css({
                animation: 'red 2s 2s linear infinite alternate',
            });
            $('.light:nth-child(4n)').css({
                animation: 'blue 2s 3s linear infinite alternate',
            });
            break;
        case '3':
            $('.light:nth-child(4n + 1)').css({
                animation: 'green 3s linear infinite alternate',
            });
            $('.light:nth-child(4n + 2)').css({
                animation: 'yellow 3s 1.5s linear infinite alternate',
            });
            $('.light:nth-child(4n + 3)').css({
                animation: 'red 3s 3s linear infinite alternate',
            });
            $('.light:nth-child(4n)').css({
                animation: 'blue 3s 4.5s linear infinite alternate',
            });
            break;
    }
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
        addLights(screen);
        $('#lightSwitch').html('Turn off');
    }
}

$('#changeTime').click(function () {
    changeAnimation($('#time').val());
});

addLights(screen);
