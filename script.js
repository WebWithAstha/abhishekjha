function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();


// ---------------INTRO-ANIMATION---------------


var tl = gsap.timeline();

tl.from(".intro-name>h1,.intro-name>h1 .span",{
  x:70,
  delay:1,
  duration:.2,
  stagger:.1,
  opacity:0,
})
tl.to(".intro-name>h1",{
  transform: "translateY(-100%)",
})
tl.to("#start-anime-page",{
  transform: "translateY(-100%)",
  duration:1,

})
tl.to(".green",{
  height:"0vh",
  delay:-.5,
})
tl.from(".center-h1 .h1 h1",{
  stagger:.3,
  y:200,
})



// ------------------PAGE2----------------------

let screenWidth = document.querySelector("body").getBoundingClientRect().width
console.log(screenWidth)

if(screenWidth>1000){
gsap.from(".img-box img",{
  rotate:-25,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    start:"top 100%",
    end:"top -50%",
    scrub:2,
    // markers:true
  }
})

// ---------------PAGE3-------------------

gsap.from("#page3 h1",{
  y:100,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
    start:"60% 80%",
    end:"top -50%",
    // markers:true
  }
})

// -------------------PAGE4---------------------

gsap.to("#page4 #p4box1",{
  y:-70,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4",
    start:"50% 60%",
    end:"top -100%",
    scrub:2,
  }
})
gsap.to("#page4 #p4box1 img",{
  y:90,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4",
    start:"top 80%",
    end:"top -10%",
    scrub:2,
    // markers:true
  }
})
gsap.from("#page4 #p4box2 img",{
  y:-90,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4",
    start:"top 80%",
    end:"top -40%",
    scrub:2,
    // markers:true
  }
})

// --------------PAGE5-------------------

gsap.from("#page5 img",{
  y:-90,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#p5box",
    start:"10% 90%",
    end:"top -30%",
    scrub:2,
    // markers:true
  }
})

// --------------PAGE6-------------------

gsap.from("#page6 #p6box2 img",{
  y:-50,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page6",
    start:"top 90%",
    end:"top -20%",
    scrub:2,
    // markers:true
  }
})
gsap.to("#page6 #p6box1 img",{
  y:80,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#p6box1",
    start:"top 50%",
    end:"top -100%",
    scrub:2,
    // markers:true
  }
})
gsap.to("#page6 #p6box1",{
  y:70,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#p6box1",
    start:"10% 60%",
    end:"top -50%",
    scrub:2,
    // markers:true
  }
})


// -----------------PAGE4-BOX1-HOVER-------------------



var img = document.querySelector("body .crs-img")

// ------------------COLOR-CHANGE------------------------


// ---------p4box1-------

document.querySelector("#p4box1 img").addEventListener("mouseenter",function(){
  gsap.to("#p4box1 .animated-h4s h4",{
    stagger:.2,
    y:10,
    opacity:1,
  })
  gsap.to("#main",{
    backgroundColor:"#ecffc8",
  })
})
document.querySelector("#p4box1 img").addEventListener("mouseleave",function(){
  gsap.to("#main",{
    backgroundColor:"whitesmoke",
  })
  gsap.to(".above-img-cont .animated-h4s h4",{
    opacity:0,
    y:0
  })
})

// --------p4box2----------


document.querySelector("#p4box2 img").addEventListener("mouseenter",function(){
  gsap.to("#p4box2 .animated-h4s h4",{
    stagger:.2,
    y:10,
    opacity:1,
  })
  gsap.to("#main",{
    backgroundColor:"#deb8dc",
  })
})
document.querySelector("#p4box2 img").addEventListener("mouseleave",function(){
  gsap.to("#main",{
    backgroundColor:"whitesmoke",
  })
  gsap.to("#p4box2 .animated-h4s h4",{
    opacity:0,
    y:0
  })
})

// --------p5box----------


document.querySelector("#p5box img").addEventListener("mouseenter",function(){
  gsap.to("#p5box .animated-h4s h4",{
    stagger:.2,
    y:10,
    opacity:1,
  })
  gsap.to("#main",{
    backgroundColor:"#b8d7de",
  })
})
document.querySelector("#p5box img").addEventListener("mouseleave",function(){
  gsap.to("#main",{
    backgroundColor:"whitesmoke",
  })
  gsap.to("#p5box .animated-h4s h4",{
    opacity:0,
    y:0
  })
})

// --------p6box1----------


document.querySelector("#p6box1 img").addEventListener("mouseenter",function(){
  gsap.to("#p6box1 .animated-h4s h4",{
    stagger:.2,
    y:10,
    opacity:1,
  })
  gsap.to("#main",{
    backgroundColor:"#c1c199",
  })
})
document.querySelector("#p6box1 img").addEventListener("mouseleave",function(){
  gsap.to("#main",{
    backgroundColor:"whitesmoke",
  })
  gsap.to("#p6box1 .animated-h4s h4",{
    opacity:0,
    y:0
  })
})

// --------p6box2----------

document.querySelector("#p6box2 img").addEventListener("mouseenter",function(){
  gsap.to("#p6box2 .animated-h4s h4",{
    stagger:.2,
    y:10,
    opacity:1,
  })
  gsap.to("#main",{
    backgroundColor:"#99c1b7",
  })
})
document.querySelector("#p6box2 img").addEventListener("mouseleave",function(){
  gsap.to("#main",{
    backgroundColor:"whitesmoke",
  })
  gsap.to("#p6box2 .animated-h4s h4",{
    opacity:0,
    y:0
  })
})


// -----------------PAGE4-BOX2-HOVER-------------------


document.querySelector("#p4box2").addEventListener("mouseenter",function(){
  document.querySelector(".crs-img").setAttribute("src",`images/card3.b705d81b.png`)
  gsap.to(img,{
    scale:1,
    opacity:1
  })
})
document.querySelector("#p4box2").addEventListener("mouseleave",function(){
  gsap.to(img,{
    scale:0,
    opacity:0
  })
})
document.querySelector("#p4box2").addEventListener("mousemove",function(dets){
  img.style.left = dets.x +"px"
  img.style.top = dets.y +"px"
})


document.querySelector("#p5box").addEventListener("mouseenter",function(){
  document.querySelector(".crs-img").setAttribute("src",`images/mut2.06596ac6.png`)
  gsap.to(img,{
    scale:1,
    opacity:1
  })
})
document.querySelector("#p5box").addEventListener("mouseleave",function(){
  gsap.to(img,{
    scale:0,
    opacity:0
  })
})

document.querySelector("#p5box").addEventListener("mousemove",function(dets){
  img.style.left = dets.x +"px"
  img.style.top = dets.y +"px"
})

document.querySelector("#p6box1").addEventListener("mouseenter",function(){
  document.querySelector(".crs-img").setAttribute("src",`images/mut4.a21e1ca0.png`)
  gsap.to(img,{
    scale:1,
    opacity:1
  })
})
document.querySelector("#p6box1").addEventListener("mouseleave",function(){
  gsap.to(img,{
    scale:0,
    opacity:0
  })
})
document.querySelector("#p6box1").addEventListener("mousemove",function(dets){
  img.style.left = dets.x +"px"
  img.style.top = dets.y +"px"
})

document.querySelector("#p6box2").addEventListener("mouseenter",function(){
  document.querySelector(".crs-img").setAttribute("src",`images/quaive.6fc624fe.png`)
  gsap.to(img,{
    scale:1,
    opacity:1
  })
})
document.querySelector("#p6box2").addEventListener("mouseleave",function(){
  gsap.to(img,{
    scale:0,
    opacity:0
  })
})
document.querySelector("#p6box2").addEventListener("mousemove",function(dets){
  img.style.left = dets.x +"px"
  img.style.top = dets.y +"px"
})

}
