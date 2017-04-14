
jQuery(document).ready(function($) { 
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $("#toTop").fadeIn();       
        } else {
            $("#toTop").fadeOut();
        }
    });

    $("#toTop").click(function() {
        $("body,html").animate({scrollTop:0},800);
    }); 

});


jQuery(document).ready(function($){
    $("div.manage").click(function(){
        $("div#block-test-local-tasks").toggle(700);
	
    });
});


jQuery(document).ready(function($){
    $("div.newcomm").click(function(){
        $("div.comm_add_form").toggle(700);
    });
});

