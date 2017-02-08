console.log('Loaded!');

//Changing main text

var element = document.getElementById("text-main");
element.innerHtml = "HI there";

marginRight = 0;
var img= document.getElementById("mali");
function moveRight(){
    marginRight = marginRight + 2;
    img.style.marginRight = marginRight + "px";
}

img.onclick = function(){
    var interval = setInterval(moveRight , 50);
};
