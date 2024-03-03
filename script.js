var tl =  gsap.timeline()

tl.from("nav",{
    opacity:0,
    delay:.4,
})
tl.from(" #logoo, .nav-bar ul ,.btn ",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:.2 
})

tl.from(" .left h1,.left img,h3,.right, h2",{
    y:100,
    opacity:0,
    duration:.5,
    stagger:.3,
})

gsap.from(".page2",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:.3,
    scrollTrigger:{
        triggre:".page2 .three",
        
    }
})