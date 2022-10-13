var bg = $("#particles-js");

$(document).keydown(function(){
    $(bg).css("background-color" ,randomcolor);
    
});


$(".img").on("click",function(){
     //PREMIERE ACTION
    var name = $(this).attr("name");
    const initial  = name.charAt(0).toUpperCase();
    var first_letters_capitalize = initial + name.slice(1); 
    $(".titre").text(first_letters_capitalize);
   
    
    // DEUXIEME ACTION
    $(this).toggleClass("flash");
    
    // TROISIEME ACTION
    var music = $(this).attr("name");
    music += ".mp3";
    playMusic(music);
});

function playMusic(music){
    var audio = new Audio(music);
    audio.play();
}

$("#btn").click(function(){
    var artiste = $("#input").val();
    var music = artiste + ".mp3";
    playMusic(music);
})


function randomcolor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i=0; i<6; i++){
        color+= letters[Math.floor(Math.random() * 16)];
        
    }
    return color;
}
