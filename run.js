var inst=document.querySelectorAll(".drum");

var n=inst.length;
console.log(inst,n);
for(var i=0;i<n;i++){
    // var al=inst[i].textContent;
//document.querySelector("."+al)
inst[i].addEventListener('click',function(e){
var c=e.target.textContent;
addSound(c);
shadowEffect(c);
});

}
document.addEventListener('keydown',function(e){
  // console.log(e);
    addSound(e.key);
    shadowEffect(e.key);
});
function shadowEffect(key){

    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+key).classList.remove("pressed");
      }, 80);
}
function addSound(key){
switch (key) {
    case 'w':
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
        break;

    case 'a':
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
        break;
        
    case 's':
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
        break;
        
    case 'd':
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
        break;
    case 'j':
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
        break;
    case 'k':
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
        break;
    case 'l':
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
        break;
    

    default:console.log(key);
        break;
}



}

