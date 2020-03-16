$(document).ready(function() {
    var source = $('#square-template').html();
    var template = Handlebars.compile(source);

        var datiSquare = {};

    var templateSquare = template(datiSquare);
    for (var i = 0; i < 36; i++) {
        $('.container').append(templateSquare);
    }


    $('.square').click(function () {
        var that = $(this);
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function (data) {
                var numeroPC = data.response;
                console.log(numeroPC);
                if(numeroPC > 5){
                    $(that).addClass('red');
                    $(that).children('span').text(numeroPC);
                }else {
                    $(that).addClass('green');
                    $(that).children('span').text(numeroPC);
                }
            },
            error: function () {
                alert('ERRORE');
            }
        });

    });



});
