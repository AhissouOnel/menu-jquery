$('document').ready(function(){
    
    $(".menu a").hover(function(){
        $(this).css("background-color", "white");
        $(this).css("color", "black");
        var sousMenu = $(this).next(".sous-menu");
        if(sousMenu.length > 0){
            sousMenu.stop().slideDown();
        }
    }, function(){
        $(this).css("background-color", "");
        $(this).css("color", "");
        var sousMenu = $(this).next(".sous-menu");
        if(sousMenu.length > 0){
            sousMenu.stop().slideUp();
        }
    });

})