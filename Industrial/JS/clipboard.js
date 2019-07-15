const clipMail=document.querySelector(".js-clipEmail");

function clipped(e){
    var tempElem = document.createElement('textarea'),
        toolbar = document.createElement("title");
    clipMail.classList.add(toolbar);
    tempElem.value = "wjdwnsdn745@gamil.com";
    document.body.appendChild(tempElem);
  
    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);    
}

function init(event){
    clipMail.addEventListener("click",clipped);
}
init()