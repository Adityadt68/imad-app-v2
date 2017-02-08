console.log('Loaded!');

//Changing main text

var element = document.getElementById("text-main");
element.innerHtml = "HI there";

marginLeft = 0;
var img= document.getElementById("mali");
function moveLeft(){
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + "px";
}

img.onclick = function(){
    var interval = setInterval(moveLeft , 50);
};
