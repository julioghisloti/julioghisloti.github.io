$(function(){
    $('.menu').on('click', function(event){
        event.preventDefault();

        $('.menu-over').toggleClass('m-o-a');
    });
});