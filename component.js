// $.get("./Header.html",(comp)=>{$("#header").prepend(comp)})
$.get("/Footer.html",(comp)=>{$("#footer").prepend(comp)})
$.get("/classList.html",(comp)=>{$("#classList").prepend(comp)})
$.get("/classListMain.html",(comp)=>{$("#classListMain").prepend(comp)})


$(window).scroll(function(){
    var a = window.scrollY
    if(a>10){
        $("#header").addClass("color")
    }else{
        $("#header").removeClass("color")
    }
    
})
