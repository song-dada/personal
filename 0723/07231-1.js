document.addEventListener("DOMContentLoaded",() => {

    const slide = document.getElementById("slide");
    const slidearea = document.getElementById("slidearea");
    const slideWidth = slide.clientWidth;
    // alert(slideWidth);
    
    const toleft = () => {
        slide.style.transition = 'left 1500ms';
        slide.style.left = '-100%';

        setTimeout(pos1,1000);
    };
    const toright = () => {
        slide.style.transition = 'left 1500ms';
        slide.style.left = '100%';

        setTimeout(pos2,1000);
    };
    const pos1 = () => {
        slide.append(slide.firstElementChild);
        slide.style.left = 0;
        slide.style.transition = 'none';
    };
    const pos2 = () => {
        slide.style.left = 0;
        slide.prepend(slide.lastElementChild);
        slide.style.transition = 'none';
    };
    
    // setInterval( toleft, 2000 );
    let x1 = 0;
    let x2 = 0;
    slidearea.addEventListener('touchstart', e => {
        x1 = e.touches[0].clientX;

        slidearea.addEventListener('touchend', zz = e => {
            x2 = e.changedTouches[0].clientX

            if(x1 > x2){ toleft(); };
            if(x1 < x2){ toright(); };
            
            slidearea.removeEventListener('touchend',zz);
        });

    });


});