$(function(){
    var heaf = $("#heaer");
    var introH = $("#intro").innerHeight();
    var scrollOffset = 0;
    checkScroll(scrollOffset);
    /*Fickes*/
   $(window).on("scroll", function(){
       scrollOffset = $(this).scrollTop();
      checkScroll(scrollOffset);
   });
    function checkScroll(scrollOffset){
    
       if(scrollOffset >= introH){
           heaf.addClass("heading--fic");
       }else{
           heaf.removeClass("heading--fic");
       }
    }
    /*nav*/
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();
       $("#nav").toggleClass("active");
        if(scrollOffset<introH){
            
        
        heaf.toggleClass("heading--fic");
        }
        
       
         
    })
    /*Scroll*/
    $("[data-scroll]").on("click", function(Event){
        Event.preventDefault();
         var blockI = $(this).data('scroll'),
             blockOffset = $(blockI).offset().top;
            var  navigat = $("nav");
        
        $("html, body").animate({
            scrollTop: blockOffset
            
            
            
        });
        navigat.removeClass("active");
        
        
    });
});