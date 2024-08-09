document.addEventListener("DOMContentLoaded", ()=> {

    const $h2 = document.querySelectorAll('#layout h2');
    // querySelectorAll 로 가져와야 node list로 받아와서 foeEach문 사용가능. 
    // 링크 걸리는 부분은 h2>a 이기 때문에 접근시 chlidren으로 접근해야함. []인덱스 표시 필수.


    // notigall_show_hide = nsh
    const nsh = ( i ) => {
        // 여기의 i는 (*$fe)에서 가져온 값 = '<a>공지사항<a/>' 혹은 '<a>갤러리<a/>'

        $h2.forEach( j => { 
            if(j.matches('.yellow')){ // 클래스 yellow가 있는 j(=$h2=h2)를 찾으면
                j.classList.remove('yellow'); // 클래스 yellow를 지우고 (*c_y)
                j.nextElementSibling.style.display = 'none';
                // j(=$h2=h2)의 형제(Sibling) = ol / div의 dispaly를 안보이게 설정함
            }
        });

        i.nextElementSibling.style.display = 'block';
        // h2 의 다음 형제 객체인 ol / div를 보이게 설정함
        i.classList.add('yellow');
        // (*c_y)를 h2에 추가함.

        
    };

    $h2.forEach( i => { // (*$fe)
        i.children[0].addEventListener('click', () => { nsh(i) } )
        // i는 h2. children[0]는 h2>a 따라서 h2안에 a를 클릭할 경우 nsh()함수가 시작되고. h2의 값을 nsh()로 넘김. 
    });

    const notili = document.querySelectorAll('#notice li'); // 리스트(li>a+span)를 찾음. 
    const black = document.getElementById('black'); // 팝업부분을 찾음
    const btn = document.querySelector('#popup button'); // 닫기 버튼
    // alert(btn);

    // 팝업 popup_show_hide = psh
    const psh = (i) => {
        // black.style.display = 'block';
        // black.style.opacity = 1;
        // black.style.zIndex = 1;
        // alert(i)
        if(i != null) { black.classList.remove('show'); }
        // i의 값이 null이 아닌경우(i=닫기)일때 show의 클래스를 지움(=안보이게 설정함.)
        else { black.classList.add('show'); }
        // i의 값이 null이라면 show의 클래스를 추가함.(=보이게 설정함.)
    };
    notili.forEach( ( i ) => {
        i.children[0].addEventListener('click', () => { psh() } );
        // h2>a에 이벤트를 추가함.(=클릭이벤트가 일어났을떄 psh()함수(=변수)를 실행함)

        // i.children[0].addEventListener('click',()=>{

        // })
        // a = 0, span = 1
    });

    btn.addEventListener('click', () => { psh(btn) } );
    // btn(=버튼)에 이벤트를 추가함. (=클릭이벤트가 일어났을떄 psh()함수(=변수)를 실행하되 btn의 값(=닫기)를 가져감.)

    document.addEventListener('keydown', e =>{
        if (e.key == 'Escape') psh(e.key);
    });



});