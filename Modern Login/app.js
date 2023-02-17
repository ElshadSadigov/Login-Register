
// Box Inputs
let clickBtn = document.querySelector(".header-word")
let headWord = document.querySelector(".head-h4");
let box = document.querySelector(".box-inputs");
let bodyAll = document.querySelector(".body-all");

clickBtn.addEventListener("click", change);

function change(){
    bodyAll.classList.toggle("active")
    if(headWord.innerHTML === "Sign In"){
        headWord.innerHTML="Login"
    }else{
        headWord.innerHTML="Sign In"
    }
};
// Box Inputs


// BackGround
let colorBtn1 = document.querySelector(".right-1")
let colorBtn2 = document.querySelector(".right-2")
let colorBtn3 = document.querySelector(".right-3")
let colorBtn4 = document.querySelector(".right-4")
let BackGround = document.querySelector(".bg-1")

colorBtn1.addEventListener("click", col1);
function col1(){
        BackGround.style.backgroundColor ="rgb(127, 27, 27)"
}
colorBtn2.addEventListener("click", col2);
function col2(){
        BackGround.style.backgroundColor ="rgb(70, 185, 70)"
}
colorBtn3.addEventListener("click", col3);
function col3(){
        BackGround.style.backgroundColor ="slateblue"
}
colorBtn4.addEventListener("click", col4);
function col4(){
        BackGround.style.backgroundColor ="rgb(67, 67, 207)"
}
// BackGround