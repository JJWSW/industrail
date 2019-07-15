const loginbutton = document.querySelector(".js-login"),
    getId=document.querySelector(".IDInput"),
    getPasswd=document.querySelector(".PwdInput");

const SHOW = "showing";

function login(event){
    let Status=document.createElement("span");
    const IDValue = getId.value,
        PasswdValue=getPasswd.value;
    
    if (IDValue=="정준우" && PasswdValue=="test"){
        loginBox.classList.remove(SHOW);
    }
}


function init(){
    loginbutton.addEventListener("click",login);
}
init()