document.addEventListener("DOMContentLoaded",()=>{
    const slideimg = document.getElementById('slideimg');
    // const img = [... slide.children];
    // alert(img);
    const right = () => {
        slideimg.style.transition = '1000ms';
        slideimg.style.right = 0;

        setTimeout(add,1001);
    };

    const add = ()=>{
        slideimg.style.transition = 'none';
        slideimg.style.right = '100%';
        slideimg.prepend( slideimg.lastElementChild );
    };
    setInterval(right, 2700);
});