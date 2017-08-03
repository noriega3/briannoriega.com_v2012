$(document).ready( function() {


    $('#page_nav_list a').on('click', function(e){
        if($(this).attr('ref')){

            var page = $(this).attr('ref');
            history.pushState('', 'New Url: '+page, page);

            e.preventDefault();

            if(page == 'home'){
                window.location.reload();
            } else {
                _gaq.push(['_trackPageview', '/'+page]);
                loadContent(page);
            }

        }
    });
    if(seg != 'home'){
        $('#page_nav_list a').removeClass('current');
        loadContent(seg);
    } else {
        $('.bxSlider').show();
    }

    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        autoControlsCombine: true,
        useCSS: false,
        captions: true,
        autoHover: true,
        mode: 'fade',
        speed: 3000,
        pause: 3000,
        adaptiveHeight: true,
        adaptiveHeightSpeed: 1200
    });

    function loadContent(url){

        $("#loading").show();
        $('#page_nav_list a').removeClass('current');
        $('a[ref='+url+']').addClass("current");
        $('#main').hide();

        if(url == 'blog'){

            $('#main').html($('#blog').html());
            $('#main').fadeIn();

        } else {

            $.ajax({
                type: "POST",
                url: 'load_content.inc',
                data: 'page='+url,
                dataType: "html",
                success: function(msg){

                    if(parseInt(msg)!=0){

                        $('#main').html(msg);
                        $('#main').fadeIn();
                        $('#loading').css('visibility','hidden');

                    }

                }

            });
        }

        window.onpopstate = function(event) {

            var path = location.pathname.substring(1);

            if(path == 'home'){

                window.location.reload();

            } else {

                loadContent(path);

            }

        };

        return true;
    }



});