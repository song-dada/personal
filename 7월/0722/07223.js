document.addEventListener("DOMContentLoaded", () =>{
    const $btn = document.getElementsByTagName('button')[0];
    const menu = document.getElementsByTagName('ul')[0];

    let i = 0;
    const nav = () => {
        if(i == 0)
            {   
                menu.style.height = '200px';
                $btn.innerHTML = 'close';
                i++;
            }
        
        else {     
                menu.style.height = 0;
                $btn.innerHTML = 'menu';
                i=0;
           }
    };

    $btn.addEventListener('click', nav);


    const slide = document.getElementById('slide');
    const ss = () => {
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
    //함수명,지체시간
    setInterval( ss, 2500 );
    const area = document.getElementById('slidearea');
    
    alert( area.clientWidth );

});