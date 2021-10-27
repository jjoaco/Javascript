$(document).ready(function(){
    $(".ocultar-btn").click(function(){
        $("p").slideUp();
    });
    
    $(".mostrar-btn").click(function(){
        $("p").slideDown();
    });
});

$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).slideUp();
    });
});

$(document).ready(function(){
    $(".cambioColor").click(function(){
        $(this).toggleClass("cambiarColor4");
    });
    $(".cambioColor2").click(function(){
        $(this).toggleClass("cambiarColor6");
    });
});
