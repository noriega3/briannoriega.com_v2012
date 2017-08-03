$(document).ready(function(e) {

    $('.nav li a').bind('click', function(e) {
        if(this.hash){
            e.preventDefault();
            $('html,body').animate({scrollTop: $(this.hash).offset().top});
            _gaq.push(['_setAccount', 'UA-41937965-1']);
            _gaq.push(['_trackPageview', '/'+this.hash]);
        }
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});