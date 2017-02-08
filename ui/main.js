console.log('Loaded!');

//Changing main text

var element = getElementById("text-main");
element.InnerHtml = "HI there";

var img= getElementById("mali");
img.onClick = function(){
    img.style.marginRight = "100px";
};
