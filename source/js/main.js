var mainbody = document.getElementById("main-body");
var darkmod = 0;
var imgs=document.getElementsByTagName('img');
for (var i=0; i<imgs.length; i++){
    imgs[i].classList.add('mdui-img-fluid')
}
if (window.matchMedia('(prefers-color-scheme: dark)').matches){
    mainbody.classList.add("mdui-theme-layout-dark");
    darkmod = 1
}
function darkmod_use(){
    if (darkmod == 1){mainbody.classList.remove("mdui-theme-layout-dark");
    darkmod = 0;} else {
        mainbody.classList.add("mdui-theme-layout-dark");
        darkmod = 1;}};
