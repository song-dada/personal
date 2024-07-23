// 요소.style.width - 넓이값 알아내기 안먹을떄가 있음
// 요소.style.width = "500px" - 할당하려면 "" 필수
// 요소.clientWidth( = 500) - 반환(설정가능) 스크립트라 "" 필요하진 않고 기본단위는 px
// 요소.offsetTop - y좌표값을 얻어온다(반환만 가능.)
// 요소.offsetLeft - x좌표값을 얻어온다(반환만 가능.)
document.addEventListener("DOMContentLoaded",()=>{
            
    const btn = document.getElementsByClassName('material-symbols-outlined')[0];
    const nav = document.getElementsByTagName('nav')[0];
    const slide = document.getElementById('slide');
    
    let slideArea = document.getElementById('slideArea');
    
    /*h2의 위치 설정*/
    let h2 = document.getElementsByTagName('h2')[0];
    let sw = slideArea.clientWidth;
    let sh = slideArea.clientHeight;
    let h2Width = h2.clientWidth;
    let h2Height = h2.clientHeight;
    
    let sww = (sw-h2Width) / 2;
    h2.style.left = sww + 'px';
    let shh = Math.trunc (sh-h2Height) / 2;
    h2.style.top = shh + 'px';
    /*여기까지*/
    
    const menu = () => {
        if(nav.clientHeight == 0) nav.style.height = '205px';
        //실행문이 하나면 중괄호 없애도 됨
        else nav.style.height = 0;
    }
    
    const ss = () => {
        if(window.innerWidth >= 1024) nav.style.height = 'auto';
        else nav.style.height = 0;
        pos = sw * (-1) + 'px';
        //새로고침 안 해도 화면 크기가 바뀌면 자동 맞춤
        
        slideArea = document.getElementById('slideArea');
        
        /*h2의 위치 설정*/
        h2 = document.getElementsByTagName('h2')[0];
        sw = slideArea.clientWidth;
        sh = slideArea.clientHeight;
        h2Width = h2.clientWidth;
        h2Height = h2.clientHeight;
        
        sww = (sw-h2Width) / 2;
        h2.style.left = sww + 'px';
        shh = Math.trunc (sh-h2Height) / 2;
        h2.style.top = shh + 'px';
        /*여기까지*/
    }
    
    let pos = sw * (-1) + 'px';
    
    // 빨간동그라미
    const circlrarea = document.getElementById('circle'); // 동그라미 세개의 부모영역
    let i = 0;
    // 슬라이드 이동
    const move = () => {
        slide.style.transition = 'left 1.5s' //setInterval보다 빨리 가야됨
        slide.style.left = pos;
        
        setTimeout( po, 1500 );
        // 빨간 동그라미 제거
        document.getElementsByClassName('red')[0].classList.remove("red");
        i = (i + 1) % 3;
        // 이 아래 구문으로 추가
        circlrarea.children[i].classList.add("red");

    }

    const po = () => {
        slide.append(slide.firstElementChild);
        slide.style.left = '-100%';
        slide.style.transition = 'none';
    }

    btn.addEventListener('click', menu); //btn에 클릭이라는 일이 생기면 menu라는 변수(함수로 쭉 써도 되긴 함)를 실행하겠다는 의미
    window.addEventListener('resize', ss );

    // setInterval(move, 2500); 

    let x1 = 0;
    let x2 = 0;

    slideArea.addEventListener('touchstart', e => {
        x1 = e.touches[0].clientX
        slideArea.addEventListener('touchend',zz = event =>{
            x2 = event.changedTouches[0].clientX;
            slideArea.removeEventListener("touchend", zz)

            if(x1 > x2){
                move();
            }
        });

    });

});//end