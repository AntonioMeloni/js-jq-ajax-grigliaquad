$(document).ready(function() {

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
                }else {
                    $(that).addClass('green');
                }
            },
            error: function () {
                alert('ERRORE');
            }
        });



    });



});
