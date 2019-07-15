const   openLogin=document.querySelector(".js-getlogin"),
    loginBox=document.querySelector(".inputBox");

    
function openLoginBox(event){
    loginBox.classList.add(SHOW);
}

function init(){
    openLogin.addEventListener("click",openLoginBox);

}
init();