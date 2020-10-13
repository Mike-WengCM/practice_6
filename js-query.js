$(document).ready(function () {
    $('.controller1').click(function () {
        $('.text1').slideToggle();        
    });
    
    $('.controller2').click(function () {
        $('.text2').fadeToggle();;        
    });  
    
    $('.btn-close').click(function () { 
        $('.full-screen').fadeOut();        
    });

});