
$("h1").css("color" , "green");
$("h1").css("font-style" , "italic");
/*
$(".hh").on("click", function(){
    $(".hh").css("font-size","100px");
}); */

$(".hh").text("COMPO");

$("a").attr("href" ,"https://senegindia.com/");

$(".hh").click(function(){
    $(".hh").css("color", "red");

})
/*
$(".hh").click(function(){
    $(".hh").css("font-size", "100px");

}) */

/*
$(document).keydown(function(event){
    $(".hh").text(event.key);
}) */


$(document).click(function(event){
    $(".hh").slideUp().slideDown().animate({opacity:0.5}).animate({fontSize: "90px"});
    $(".hh2").slideUp().slideDown().animate({opacity:0.5}).animate({fontSize: "90px"});
})