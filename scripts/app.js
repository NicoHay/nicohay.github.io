
$( document ).ready(function() {

   const  divToAnim = $('#intro-content')


    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 250){
            divToAnim.css('top', scroll * 1.8 );
            if (scroll >= 600) {
                divToAnim.fadeOut('slow')
            }else{
                divToAnim.fadeIn('slow')
            }
        }
    });
  





});