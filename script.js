const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let timeout;

function mouseScaler() {

    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener('mousemove', (dets) => {
        clearTimeout(timeout);
         xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)

        xprev = dets.clientX;
        yprev = dets.clientY;

        crsrMove(xscale, yscale)

        timeout = setTimeout(() => {
            document.querySelector('#cursor').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        }, 100)
    })
}

function crsrMove(xscale, yscale) {
    window.addEventListener('mousemove', (dets) => {
        document.querySelector('#cursor').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    })
}
function firstPageAnimation() {
    let tl = gsap.timeline();


    tl.from('nav', {
        y: '-10%',
        duration: 2,
        opacity: 0,
        ease: Expo.easeInOut,

    })

    tl.to('.boundingelem', {
        y: '0%',
        duration: 1,
        // opacity:0,
        ease: Expo.easeInOut,
        stagger: .5,
        delay : -1,
    }, )
    tl.to('.bounding2elem', {
        y: '0%',
        duration: 1,
        ease: Expo.easeInOut,
        stagger: .5,
        delay : -2,
    }, )
    tl.from('.hero-footer', {
        y: '-10%',
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOut,
    })
}

    document.querySelectorAll('.elem').forEach(function (elem) {
       var diffrot = 0;
        var rotate = 0;
    elem.addEventListener('mousemove', (dets) => {
        const image = elem.querySelector('img');
        const rect = elem.getBoundingClientRect();
        
        const diffY = Math.floor(dets.clientY - (rect.top+rect.top ));
         diffrot = dets.clientX - rotate;
         rotate = dets.clientX;
gsap.to(document.querySelector('#cursor'),{
    width : '60px',
    height: '60px',
    innerText : 'view',
    cursor :'pointer',
    ease: Power1,
})
        gsap.to(image, {
            opacity: 1,
            ease: Power3,
            top: diffY,
            left: dets.clientX-280,
       rotate: gsap.utils.clamp(-20,20,diffrot*.8),
       cursor :'pointer',
       scrub:.5,
        });
    });
});


document.querySelectorAll('.elem').forEach(function (elem) {
    elem.addEventListener('mouseleave', (dets) => {
        const image = elem.querySelector('img');
        
        gsap.to(document.querySelector('#cursor'),{
            width : '20px',
            height: '20px',
            innerText : '',
            cursor :'',
        })

        gsap.to(image, {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });
});

// document.querySelectorAll(".elem").forEach(function (elem) {
//     var rotate = 0;
//     var diffrot = 0;
  
//     elem.addEventListener("mouseleave", function (dets) {
//       gsap.to(elem.querySelector("img"), {
//         opacity: 0,
//         ease: Power3,
//         duration: 0.5,
//       });
//     });
  
//     elem.addEventListener("mousemove", function (dets) {
//       var diff = dets.clientY - (elem.getBoundingClientRect().top+elem.getBoundingClientRect().top);
//       diffrot = dets.clientX - rotate;
//       rotate = dets.clientX;
//       gsap.to(elem.querySelector("img"), {
//         opacity: 1,
//         ease: Power3,
//         top: diff,
//         left: dets.clientX / 2,
//         rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//       });
//     });
//   });


crsrMove();
firstPageAnimation();
mouseScaler();