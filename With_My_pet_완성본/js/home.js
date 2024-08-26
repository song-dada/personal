document.addEventListener("DOMContentLoaded",() => {

    // 메인 메뉴 슬라이드 생성하기
    const slidearea = document.getElementById('slidearea');
    const slide = document.getElementById('slide');
    const slide_img = document.getElementsByClassName('img');
    // alert(slide_img)
    const img_slide_to_left = () => {
        slide.style.left = '-200%';
        slide.style.transition = 'left 1500ms';
        
        setTimeout(add, 2500);
    };
    const add = () => {
        slide.append(slide.firstElementChild);
        slide.style.left = '-100%';
        slide.style.transition = 'none';

    };

    // ㅡㅡㅡㅡㅡ 슬라이드 ㅡㅡㅡㅡㅡ
    setInterval(img_slide_to_left,5500);

});