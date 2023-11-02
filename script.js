gsap.from(".navbar li", {
    x:-0,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    stagger:0.3,
})
gsap.from(".main h1,.main h3,.main h4,.search", {
    x:0,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    stagger:0.3,
    
})
gsap.from("#container1 .text,#container1 .image", {
    x:0,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#container1 .text,#container1 .image",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
gsap.from("#container2 .text,#container2 .image", {
    x:0,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#container2 .text,#container2 .image",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
gsap.from("#container3 .text,#container3 .image", {
    x:0,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#container3 .text,#container3 .image",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
gsap.from("#container4 .text,#container4 .image", {
    x:0,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#container4 .text,#container4 .image",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
gsap.from(".question h1,.question .quest,.question h4,.search1", {
    x:0,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".question h1,.question .quest,.question h4,.search1",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
gsap.from(".footer .flex1,.list1", {
    x:0,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".footer",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})