const menuBtnStyle = document.querySelector('.menuBtn');
const navberStyel = document.querySelector('.link');
const closeBtn = document.querySelector('.closeBtn');
menuBtnStyle.addEventListener('click', navberShow);
function menuBtnNone(){
    menuBtnStyle.style.display = 'none';
}
function navberShow(){
    navberStyel.style.display = 'flex';
    navberStyel.style.justifyContent = 'center';
    navberStyel.style.width = '500px';
    navberStyel.style.flexDirection = 'column';
    navberStyel.style.marginTop = '40px';
    menuBtnNone();
    closeBtnShow();
}
function closeBtnShow(){
    closeBtn.style.display = "inline-block";
}
function a(){
    navberStyel.style.display = "none";
    menuBtnStyle.style.display = 'flex';
    // menuBtnStyle.style.display = 'block';
    closeBtn.style.display = "none";
}
closeBtn.addEventListener('click', a)