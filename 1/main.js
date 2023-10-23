window.addEventListener("mousemove",function(dets){
    console.log(dets.clientX);
    var rect = document.querySelector("#rect");
    var xval = gsap.utils.mapRange(0 , window.innerWidth,100 +rect.getBoundingClientRect().width/2,window.innerWidth -(100 + rect.getBoundingClientRect().width/2),dets.clientX)
    gsap.to("#rect",{
        left:xval +"px" ,
        
        ease:Power3
    })
})