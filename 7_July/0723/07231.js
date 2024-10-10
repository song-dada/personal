// 요소.style.width - 넓이값 알아내기 안먹을떄가 있음
// 요소.style.width = "500px" - 할당하려면 "" 필수
// 요소.clientWidth( = 500) - 반환(설정가능) 스크립트라 "" 필요하진 않고 기본단위는 px
// 요소.offsetTop - y좌표값을 얻어온다(반환만 가능.)
// 요소.offsetLeft - x좌표값을 얻어온다(반환만 가능.)

document.addEventListener("DOMContentLoaded", ()=>{

    const btn = document.getElementsByClassName("material-symbols-outlined")[0];
    const nav = document.getElementsByTagName('nav')[0];
    const slide = document.getElementById("slide");         

    const menu = () => {
        if( nav.clientHeight == 0 )  nav.style.height = "200px";
        else nav.style.height = "0px";
    }

    const ss = () => {
        if( window.innerWidth>=1024 )  nav.style.height = "auto";
        else      nav.style.height = 0;  
    }

    const pos =  document.getElementById("slideArea").clientWidth * (-1) + "px";           
    // const slide = document.getElementById('slide');
    const move = () => {
        slide.style.transition = 'left 1500ms';
        slide.style.left = '-100%';
        // 콜백함수(위의 프로그램 2개 실행이 끝난후 적용되어야 하니까)
        setTimeout( po, 1500 );
        //함수명,지체시간
    };
    const po = () => {
        slide.append(slide.firstElementChild)
        // slide.append('해당요소뒤에 추가되는 컨텐츠')
        // firstElementChild 는 요소 firstChild는 띄어쓰기(공백)도 같이 갖고오니까 가능하면 전자로 사용.
        slide.style.left = 0;
        slide.style.transition = 'none';
    };
               
    btn.addEventListener("click" , menu );
    // on resize evevent - 브라우저창의 사이즈가 조정될때 사용하는 이벤트

    window.addEventListener("resize" , ss  );
    setInterval( move , 2500); // 함수명. 지체시간
});