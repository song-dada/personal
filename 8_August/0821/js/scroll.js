document.addEventListener("DOMContentLoaded", () => {
    
    // [봄, 여름, 가을, 겨울]   ... 스프레드 연산자( Array.from = ... ) >> 콜렉션을 배열로 만듬
    const seasons = [... document.querySelectorAll('main section')];
    // console.log(seasons);

    let xx = 1; // 중복방지
    // forEach x1 = 값 / x2 = 인덱스 / x3
    seasons.forEach( (i, j) => {

        if(xx = 0){ return; }
        xx = 0; // 중복방지 아래의 구문이 완전히 끝나기 전까지 중복을 방지함.

        // 각각 휠 이벤트가 발생함. 이벤트를 가져와야함.
        i.addEventListener('wheel', ( e ) => {

            // 기본동작을 무력화 시킴. (한 장면씩 보이기 위해 필요함.)
            e.preventDefault();

            // 휠의 올리거나 내렸을때의 휠 Y좌표를 가져온다. 1, Y2의
            let d = e.deltaY || e.wheelDalta;
            // deltaY는 새로나온거라 브라우저가 인식하지 못할경우를 고려하여 wheelData도 작성해둠.

            // 스크롤 바의 윗쪽Y값
            let y = window.scrollY;
            // console.log(y);
            // 봄, 여름, 가을, 겨울의 index
            let c = seasons[j]; // 현제 보고 있는 화면.(섹션)

            // 휠을 아래로 내릴때
            if (d > 0) {
                let n = c.nextElementSibling; // 다음형제요소
                if(n){
                    y = n.getBoundingClientRect().top + y; // 겨울(마지막 섹션)의 탑의 높이 + y (window의 스크롤)
                }
            }
            // 휠을 위로 올릴때.
            else{
                let p = c.previousElementSibling; // 이전형제요소
                if (p) {
                    y = p.getBoundingClientRect().top + y;
                }
            }

            // 부드럽게 위치이동
            window.scrollTo({
                top: y,
                behavior: "smooth",
            }); // scrollTo는 키와 값을 적을수 있음 {키:값}
        });
        xx = 1; // 중복방지.
    });

});