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

    // if

    const window_width = window.innerWidth;
    // alert(window_width)375/420

    // 데탑 태블릿용 스크립트
    if(window_width > 420){

        // 메뉴 누르면 활성화 상태 만들기
        const h_li = Array.from (document.getElementsByClassName('menu'));
        // const h_li = document.getElementsByClassName('menu');
        const $contnet = document.querySelectorAll('.mwh_100');

        const lologin = document.getElementById('lologin');

        const actives = (element, i) => {
            h_li.forEach( element_i => {
                element_i.classList.remove('active');
            });
            $contnet.forEach( element_i => {
                element_i.style.display = 'none';
            });

            if(i == 6){
                $contnet[i].style.display='block';
            }
            else{
                for(let ii=0; ii<h_li.length+1; ii++){
                        element.classList.add('active');
                        if (i == 0) {   $contnet[i].style.display='flex';   }
                        else {    $contnet[i].style.display='block';    }
                    }
            }
            
        };
        h_li.forEach( (element, i) => {
            element.addEventListener('click', () => { actives(element, i) });
            // console.log(element, i);
        });
        lologin.addEventListener('click', () => { actives('login' , 6) });

        // 활성화 상태와 연결되는 화면 보이게 설정하기
    }

    // 모바일 디바이스 용 스크립트 mainmenu
    else{
        const logo = document.getElementById('logo');
        const mainmenu = document.getElementById('mainmenu');
        const fixed_header = document.getElementById('fixed_header');
        // alert(mainmenu.style.display)
        let count_i = 0
        const show = () => {
            if(count_i%2 == 0){
                fixed_header.style.height = '100vh';
                fixed_header.style.width = '80vw';
                mainmenu.style.display = 'block';
                
            }else{
                fixed_header.style.height = '0%';
                fixed_header.style.width = '0%';
                mainmenu.style.display = 'none';
                
            }
           count_i++;

        };
        logo.addEventListener('click', show );
    }



});