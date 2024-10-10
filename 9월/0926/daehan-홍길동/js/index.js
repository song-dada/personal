document.addEventListener("DOMContentLoaded",()=>{

    const slide = document.getElementById('slide_1');

    const toleft = () => {
        slide.style.transition = 'left 1500ms';
        slide.style.left = '-100%';

        setTimeout(addimg, 1501);

    };
    const addimg = () => {
        slide.style.transition = 'none';
        slide.style.left = '0';
        
        slide.append(slide.firstElementChild);
    };

    setInterval(toleft, 2500);
});