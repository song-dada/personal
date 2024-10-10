document.addEventListener("DOMContentLoaded", () => {

    const layout = document.getElementById('layout');
    const section = [... layout.children];

    let page = 0;
    const last = section.length -1;


    window.addEventListener('wheel', (e) =>{
        e.preventDefault;
        //아무것도 하지 않는 상태를 기본값으로 설정함.
        
        if (e.deltaY > 0) {
            page++;
        } else if (e.deltaY < 0){
            page--;
        }
        if (page < 0) {
            page = 0;
        } else if (page > last){
            page = last;
        }

        // console.log( e.deltaY ); // 값의 변경을 확인. 

        layout.style.top = page * (-100) + 'dvh';

    }, { passive: false });
    // {} = 부가기능  passive: false = 스크롤의 기본값을 비활성화 함

    // 모바일 환경 = 터치 이벤트
    window.addEventListener('touchstart', e => {
        const startY = e.touches[0].clientY;
        window.addEventListener('touchend', e => {
            const endY = e.changedTouches[0].clientY;
            // const deltaY = Math.trunc(startY - endY);
            const deltaY = Math.trunc(startY - endY);
    
            if (Math.abs(deltaY) > 100) {
                if (deltaY > 0) { page++; }
                else if(deltaY < 0) { page--; }
                if (page < 0) { page = 0; }
                else if (page > last){ page = last; }
                layout.style.top = page * (-100) + 'dvh';
            }
        });
    });
    

});
