// var - 고전방식으로 수업중엔 사용안함
// let - 재할당 가능한 성질의 변수로 선언됨
//      ㄴ 값이 변함 
// const - 재할당도 불가능한 성질의 변수로 선언됨
//      ㄴ 초기화시 선언필요

// 이름있는 함수 = function 'red()'
// 익명함수 = [function ()] 이걸 [() =>] 이렇게 줄일수 있음
// x.addEventListener( 'click', xx );
//.addEventListener('이벤트 이름', 함수(=변수명)) 필요
//'클릭'되면 xx이벤트 실행

// (*ㅡ) 는 관련 주석 
document.addEventListener("DOMContentLoaded", () => {

    // 위쪽 방향으로 자동 (*슬라이드)
    const $slide = document.getElementById('slide');
    // $slide는 여러개의 이미지가 담겨 있는 객체임.

    const toTop = () =>{
        // 객체.속성.속성 = '값';
        $slide.style.top = '-100%'; // 두번째(다음) 이미지를 보여주기위한 설정
        $slide.style.transition = 'top 1000ms'; // css 파일에서 (*~)주석 참조. (*time)

        // 시간이 필요한 실행문이더하도 먼저 실행하도록 하고, 즉시 실행되는 실행문을 기다리도록 하기위해 setTimeout이 필요함.
        // setTimeout(함수, 지체시간); (*set)
        setTimeout(app, 1000);
    };

    const app = () => {
        // 슬라이드의 영역에서(slide) 첫번째자식(section)을 맨끝으로 옮김(이동=c추가)
        $slide.append($slide.firstElementChild); // 요소.자식 형식으로 안하면 오류남.
        $slide.style.top = 0; // 첫번째이미지(사실상 두번째 이미지가 옮겨지고 그 이미지가 고정되기 위해 0으로 둠)
        $slide.style.transition = 'none'; // 올라갔다가 내려오는(이벤트가 중첩되는)걸 막기위해 transition을 없앰

    };
    // setInterval(함수(변수), 지체시간) - interval은 무한히 함수를 불러들임. 함수는 name(); 이고 변수는 name 형식 (*set)
    // 콜백함수. 지체시간 간격을 두고 지속적으로 함수를 실행함. 1000 = 1000ms(1초) 스크립트는 시간과 관련된 수 전부 ms 단위임
    setInterval( toTop , 2500);
    // 여기까지 (*슬라이드) 영역

    // (*팝업) 영역
    const notigall_h2 = document.querySelectorAll('#notigall h2'); // nodelist의 객체이므로 []가 필요함.
    const notice = document.querySelector('#notice ol'); // 보이고 안보이고 해야하는 영역 order list
    const gallery = document.querySelector('#gallery div'); // 보이고 안보이고 해야하는 영역 div>img*3
    const $hit = document.getElementsByClassName("hit"); // 공지사항과 갤러리의 배경색을 컨트롤하는 스위치

    const show_hide = (i) => {
        const txt = i.innerText; // a로 감싸진 글자를 가져옴

        notigall_h2[0].classList.remove('hit'); // 공지사항의 클래스를 지움
        notigall_h2[1].classList.remove('hit'); // 갤러리의 클래스를 지움.

        i.classList.add('hit'); // i(클릭된 값)에 클래스를 추가함.

        switch (txt) {
            case '공지사항':
                notice.style.display = 'block'; // 리스트 보임
                gallery.style.display = 'none'; // div 안보임
                break;
        
            case '갤러리':
                notice.style.display = 'none'; // 리스트 안보임
                gallery.style.display = 'flex'; // div 보임. (block이 아닌 flex인 이유는 블록 먹이면 div안에 이미지들이 세로로 정렬됨)
                break;
        }
        
    };

    notigall_h2.forEach(i => {
        i.children[0].addEventListener( 'click', () => { show_hide(i); } );
        // i는 h2고 children[0]는 그중 첫번째(0번쨰) 요소를 뜻함 (여기서는 a태그)
    });

   
    const noticeli = document.querySelectorAll('#notice li'); // 누르면 팝업뜨게 할수 있는 영역.
    const black = document.getElementById('black'); // 팝업 영역
    const btn = document.querySelector('#popup button'); // 닫기버튼

    // (*팝업) 보였다가 닫았다가.
    const popup = ( i ) => {
        if(i === '열기') {  black.classList.add('show');  }
        // 넘겨받은 i의 값이 '열기'일때 클래스를 추가함. (보임)
        else {  black.classList.remove('show');  }
        // 아닐경우 클래스를 지움. (안보임=닫기)
    };
    noticeli.forEach( i => {
        i.children[0].addEventListener('click', () => { popup('열기'); } );
        // 0은 a / 1은 span 이니 구분 잘할것
    });

    // 팝업 닫기
    btn.addEventListener('click', () => { popup('닫기'); });
    // 버튼을 눌렀을떄 팝업 함수에 '닫기' 값을 넘김
    // 여기까지 (*팝업)기능 영역
    
}); // ㅡㅡㅡㅡㅡ javascript 종료 ㅡㅡㅡㅡㅡ //