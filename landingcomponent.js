// $.get("./Header.html",(comp)=>{$("#header").prepend(comp)})
console.log("hi")
$.get("./publish/component/Footer.html",(comp)=>{$("#footer").prepend(comp)})
$.get("./publish/component/classList.html",(comp)=>{$("#classList").prepend(comp)})
$.get("./publish/component/classListMain.html",(comp)=>{$("#classListMain").prepend(comp)})


$(window).scroll(function(){
    var a = window.scrollY
    if(a>10){
        $("#header").addClass("color")
    }else{
        $("#header").removeClass("color")
    }
    
})
