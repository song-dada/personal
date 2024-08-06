document.addEventListener("DOMContentLoaded",() => {

    // 장애인을 위한 웹접근성 향상
    const mainmenu = Array.from( document.getElementsByClassName('mainmenu') );
    // 콜렉션을 배열(array)로 바꿈
    // alert(mainmenu);
    mainmenu.forEach(( i )=>{

        i.addEventListener('click', ()=>{
            i.nextElementSibling.classList.add('show');
            // nextElementSibling
            // i.naxtElementSi.classList.add(show)
        })
    });

    // 페이드 슬라이드 영역
    const slide = Array.from( document.getElementsByClassName('slide') );

    let i = 2;
    const fade = () => {
        // slide[i].style.opacity = 1;
        slide[i].style.opacity = 0;
        i--;
        if(i < 0) {
            slide.forEach(  j  =>   j.style.opacity = 1  );
            i = 2; 
        }
    };

    setInterval(fade, 2500);
});