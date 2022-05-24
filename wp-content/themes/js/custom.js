
$(document).ready(function() {
    $('.menu-toggle').on('click', function() {
        $('.menu-toggle').toggleClass('active');
        $('#header').toggleClass('open-menu');
        $('#main-menu').toggleClass('active');
        $('body').toggleClass('overlay');
    });
    $('.main-menu-close').on('click', function() {
        $('.menu-toggle').toggleClass('active');
        $('#header').toggleClass('open-menu');
        $('#main-menu').toggleClass('active');
        $('body').toggleClass('overlay');
    });


});


// Анкоры

if(location.href.indexOf('montaj')!=(-1)){
$('#tab-4-list').click();
}else{
if(location.href.indexOf('service')!=(-1)){
    var serv = location.href.split('services/');
    var id;
    var scr;
    if(serv[1]==''){
        id = '#'+$('.list-group').find('.list-group-item').eq(0).attr('id');
        $(id).click();

        console.log(id);

        var name = $(id).text();
        scr = id.replace("-list","")
    }else{
        id = serv[1]; 
        $(id+'-list').click();
        var name = $(id+'-list').text();
        scr=id;
    }




    setTimeout(function() {
        $('html, body').animate({
            scrollTop: $(scr).offset().top-100
        }, 1500);

        $("#tab-content ._title").remove();

        if($("#tab-content>.active.show").find('_title').length==0){
            $("#tab-content>.active.show").prepend('<span style="display: block; font-size: 20px; margin-bottom: 22px; transition: 0.3s all;" class="_title">'+name+'</span>'); 
        }



    }, 900);    
}

}



$("body").on('click', '[href*="#"]', function (e) {

if($(this).hasClass('list-group-item-action')){
    var fixed_offset = 195;
    var elem_id = $(this).attr('href');

    setTimeout(function() {
        $('html, body').animate({
            scrollTop: $(elem_id).offset().top-100
        }, 1500);
    }, 500);

}else{
    location.href=$(this).attr('href');
}

e.preventDefault();
});

