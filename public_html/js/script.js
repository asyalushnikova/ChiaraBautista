/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    
     // set variables
     var speed = 500; // fade speed from transision to transion between images
     var autoswitch = true; // auto slider option
     var autoswitch_speed = 10000; // auto slider speed
     
    // add initial active class
    $(".slide").first().addClass("active");
    
    // hide all slides
    $(".slide").hide();
    
    // show first slide
    $(".active").show();
    
    // next slide handler
    $("#next").on("click", nextSlide);
    
    // previous slide handler
    $("#prev").on("click", prevSlide);
    
    // suto slider handler
    if(autoswitch === true){
        setInterval(nextSlide, autoswitch_speed); 
    }
    
    // next slide rotation
    function nextSlide(){
        $(".active").removeClass("active").addClass("oldActive"); 
        if ($(".oldActive").is(":last-child")){
            $(".slide").first().addClass("active");
        } else {
            $(".oldActive").next().addClass("active");
        }
        
        $(".oldActive").removeClass("oldActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
    }
    
    // previous slide rotation
    function prevSlide() {
        $(".active").removeClass("active").addClass("oldActive"); 
        if ($(".oldActive").is(":first-child")){
            $(".slide").last().addClass("active");
        } else {
            $(".oldActive").prev().addClass("active");
        }
        
        $(".oldActive").removeClass("oldActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
    }
});

