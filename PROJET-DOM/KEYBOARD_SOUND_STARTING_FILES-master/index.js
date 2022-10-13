var bg = document.getElementById('particles-js');

document.addEventListener("keydown", function(event){
    //var key = event.key;
     bg.style.backgroundColor = RandomColor();
     var key = event.key
     PlayMusic(key);

    console.log(event);
});

function PlayMusic(key){
    switch(key){
        case "a":
            var audio = new Audio("kick.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("kick1.wav");
            audio.play();
            break;    
        case "b":
            var audio = new Audio("kick2.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("kick.mp3");
            audio.play();
            break;
    }

}

function RandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i<6; i++){
        color = color + letters[Math.floor(Math.random() * letters.length)];

    }
    return color;

}
