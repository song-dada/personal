// (*ㅡ) 는 관련 주석

document.addEventListener("DOMContentLoaded",() => {

    const slide = document.getElementById("slide");
    const slidearea = document.getElementById("slidearea");
    // const slideWidth = slidearea.clientWidth;
    // alert(slideWidth);
    // let pos1 = slideWidth * (-1) + "px"

    const circle = document.getElementById("circle"); // 동그라미 3개의 부모요소
    let ii = 0;













    // 픽셀(고정값)을 사용한 슬라이드 //오딘 감사합니다.
    // const toleft = () => {
    //     slide.style.transition = 'left 1500ms';
    //     slide.style.left = '-830px';

    //     setTimeout(pos1,1000);
    // };
    // const toright = () => {
    //     slide.style.transition = 'left 1500ms';
    //     slide.style.left = '30px';

    //     setTimeout(pos2,1000);
    // };
    // const pos1 = () => {
    //     slide.append(slide.firstElementChild);
    //     slide.style.left = '-400px';
    //     slide.style.transition = 'none';
    // };
    // const pos2 = () => {
    //     slide.style.left = '-400px';
    //     slide.prepend(slide.lastElementChild);
    //     slide.style.transition = 'none';
    // };


    // 퍼센트(변동값)을 이용한 슬라이드 //오딘 감사합니다.
    const toleft = () => {
        slide.style.transition = 'left 1500ms'; // -.- 보다 (*~) 형식으로 보이게 하기 위한 옵션을 설정함
        slide.style.left = '-200%'; // -100%는 두번째 이미지부터 보이기때문에 세번째 이미지를 보이게 하기 위해서 -200%로 설정함.

        setTimeout(pos1,1000); // 시간이 간격으로 pos1(이미지를 추가함.)를 실행.
        // 시간이 필요한 실행문이더하도 먼저 실행하도록 하고, 즉시 실행되는 실행문을 기다리도록 하기위해 setTimeout이 필요함.
        // setTimeout(함수, 지체시간); (*set)

//////////////////////////////
        document.querySelector(".red").classList.remove("red"); // 문서에서 class이름이 red인 첫번째 것. 을 지워라.
                ii = ( ii + 1 ) % 3 ; // circle.children.length; 오타주의!!! 왜 안되나 했다 ㅠㅠ
                circle.children[ ii ].classList.add("red");
//////////////////////////////
    };
    const toright = () => {
        slide.style.transition = 'left 1500ms'; // 위와 같음 (*~)
        slide.style.left = '0';
        // slide.style.left = '10%';

        setTimeout(pos2,1000);
        // setInterval(함수(변수), 지체시간) - interval은 무한히 함수를 불러들임. 함수는 name(); 이고 변수는 name 형식 (*set)
        // 콜백함수. 지체시간 간격을 두고 지속적으로 함수를 실행함. 1000 = 1000ms(1초) 스크립트는 시간과 관련된 수 전부 ms 단위임
    
//////////////////////////////
        document.querySelector(".red").classList.remove("red"); // 문서에서 class이름이 red인 첫번째 것. 을 지워라.
        ii = ( ii + 2 ) % 3 ; // circle.children.length; 오타주의!!! 왜 안되나 했다 ㅠㅠ
        circle.children[ ii ].classList.add("red");
 /////////////////////////////////   
    
    };
    const pos1 = () => {
        slide.append(slide.firstElementChild); // slide의 첫번째 요소[()안에]를 마지막에 추가함.
        slide.style.left = '-100%'; // 두번째 이미지(화면)이 보이도록 고정. (*-100%)
        slide.style.transition = 'none'; // 올라갔다가 내려오는(이벤트가 중첩되는)걸 막기위해 transition을 없앰 (*tra~_none)
    };
    const pos2 = () => {
        slide.style.left = '-100%'; // 위와 같음 (*-100%)
        slide.prepend(slide.lastElementChild); // slide의 마지막 요소[()안에]를 처음에 추가함.
        slide.style.transition = 'none'; // 상동 (*tra~_none)
    };
    
    // setInterval( toleft, 2000 );
    let x1 = 0; // 터치 시작값을 담기 위한 변수
    let x2 = 0; // 터치 종료값을 담기 위한 변수
    slidearea.addEventListener('touchstart', e => { // 터치가 시작됨.
        x1 = e.touches[0].clientX; // 시작의 x죄표를 받음

        slidearea.addEventListener('touchend', zz = e => {
            x2 = e.changedTouches[0].clientX // 종료의 x죄표를 받음

            if(x1 > x2){ toleft(); };  // 시작값이 종료값보다 크면 왼쪽으로 이동
            if(x1 < x2){ toright(); }; // 시작값이 종료값보다 작으면 오른쪽으로 이동
            slidearea.removeEventListener('touchend',zz);
        });

    });

    // 이 아래 형태도 잘 작동됨. 분석필요.
    // slidearea.addEventListener('touchstart', e => { // 터치가 시작됨.
    //     x1 = e.touches[0].clientX; // 시작의 x죄표를 받음
    //     });
        
    //     slidearea.addEventListener('touchend', zz = e => {
    //         x2 = e.changedTouches[0].clientX // 종료의 x죄표를 받음

    //         if(x1 > x2){ toleft(); }; 
    //         if(x1 < x2){ toright(); };
    //         // slidearea.removeEventListener('touchend',zz);
    //     });


});

// document.addEventListener("DOMContentLoaded",() => {

//     const slide = document.getElementById("slide");
//     const slidearea = document.getElementById("slidearea");
//     const slideWidth = slide.clientWidth;
//     // alert(slideWidth);
    
//     const toleft = () => {
//         slide.style.transition = 'left 1500ms';
//         slide.style.left = '-100%';

//         setTimeout(pos1,1000);
//     };
//     const toright = () => {
//         slide.style.transition = 'left 1500ms';
//         slide.style.left = '100%';

//         setTimeout(pos2,1000);
//     };
//     const pos1 = () => {
//         slide.append(slide.firstElementChild);
//         slide.style.left = 0;
//         slide.style.transition = 'none';
//     };
//     const pos2 = () => {
//         slide.style.left = 0;
//         slide.prepend(slide.lastElementChild);
//         slide.style.transition = 'none';
//     };
    
//     // setInterval( toleft, 2000 );
//     let x1 = 0;
//     let x2 = 0;
//     slidearea.addEventListener('touchstart', e => {
//         x1 = e.touches[0].clientX;

//         slidearea.addEventListener('touchend', zz = e => {
//             x2 = e.changedTouches[0].clientX

//             if(x1 > x2){ toleft(); };
//             if(x1 < x2){ toright(); };
            
//             slidearea.removeEventListener('touchend',zz);
//         });

//     });


// });