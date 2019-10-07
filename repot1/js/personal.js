const personalData=document.querySelector(".personalData"),
    usedLanguage=document.querySelector(".usedLanguage");

const personalShow=document.querySelector(".introudecPage");

function UL(){
    var Img=document.createElement("img");
    for(var i = 0 ; i<4 ; i++){
        Img.src=`/Image/${i}.png`;
        personalShow.append(Img);
    }
}

function PD(){
    personalShow.innerHTML="hello";
}

function init(){
    usedLanguage.addEventListener("click",UL);
    personalData.addEventListener("click",PD);

}
init();