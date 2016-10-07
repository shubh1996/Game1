
var correct = function(){
    $('.bottom').html("<h2>Correct !!!!!!!</h2>");
};

var wrong = function(){
     $('.bottom').html("<h2>Wrong (refresh and try again</h2>");
};

    $('.olpbtn').on('mouseover',function(){
    var btnid=$(this).attr('id');
    $('#'+btnid).html(".");
    $('#'+btnid).css({'background-color':'transparent'});
});
