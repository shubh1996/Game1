
var correct = function(){
    $('.bottom').html("<h2>Correct !!!!!!!</h2>");
    $('#cor').css({'background-color':'green'});
};

var wrong = function(){
     $('.bottom').html("<h2>Wrong (refresh and try again</h2>");
     $('#wro').css({'background-color':'red'});
};

    $('.olpbtn').on('mouseover',function(){
    var btnid=$(this).attr('id');
    $('#'+btnid).html(".");
    $('#'+btnid).css({'background-color':'transparent'});
});
