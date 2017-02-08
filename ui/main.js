console.log('Loaded!');

//Changing main text

var element = document.getElementById("text-main");
element.innerHtml = "HI there";

marginRight = 0;
function moveRight(){
    marginRight = marginRight + 2;
    img.set.style.marginRight = marginRight + "px";
}
var img= document.getElementById("mali");
img.onclick = function(){
    var interval = setInterval(moveRight , 50);
};
