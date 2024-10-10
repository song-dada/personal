document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll('#slide img');
    let z = 1;
    
    const show = () => {

        images.forEach( ( i ) => {
            i.style.opacity = 0;
            images[z].style.opacity = 1;
        });
        z++;
        if(z>4) z=0;
    };

    setInterval(show, 2000);
    // fade 방식의 슬라이드
});