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

    // ㅡㅡㅡㅡㅡ 팝업 ㅡㅡㅡㅡㅡ
    const black = document.getElementById('black');
    const popup = document.getElementsByClassName('popup');
    const notice_list = document.querySelectorAll('#notice li a');
    const event_list = document.querySelectorAll('#event li a');
    const notice_pop = document.getElementById('notice_pop');
    const event_pop = document.getElementById('event_pop');

    const n_show = () => {
        black.style.display = 'block';
        black.style.zIndex = 1;
    };
    notice_list.forEach( (i) => {
        i.addEventListener('click', );
    });

});