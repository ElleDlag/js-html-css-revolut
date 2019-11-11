$(function(){
var drDownRvl = '.dropdown-rvl';
var drDownRvlLink = '.dropdown-rvl>a.nav-link';

//function
function showDrDwRvl(e){
    e.stopPropagation();
    //verify if event click
    if(e.which === 1){
        $(this)
        .children('ul')
        .toggleClass('show-drop')
        
    }
    //verify if mouseenter event
    if(e.which === 0){
        $(this)
        .children('ul')
        .addClass('show-drop')
    }

    $(drDownRvl).not($(this))
        .children('ul')
        .removeClass('show-drop');
}

//handler

//dropDown
    $(drDownRvl).on({
        'click': showDrDwRvl,
        'mouseenter': showDrDwRvl,
        
    });
    //Remove dropDown if is open, when user click on body
    $('body').click(function(e){
        if(e.target != drDownRvlLink){
            $(drDownRvl).each(function (i) {
                if($(drDownRvl).children('ul').hasClass('show-drop') ){
                    $(drDownRvl)
                        .children('ul')
                        .removeClass('show-drop');
                } 
            });
        }
    });

});

$(window).resize(function(){
        if($(window).outerWidth()<= 1080){
            $('.navbar-expand-rvl').removeClass('flex-nowrap')        
        }
})
