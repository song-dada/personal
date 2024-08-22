document.addEventListener("DOMContentLoaded", () => {

    //  봄, 여름, 가을, 겨울 텍스트가 들어있는 <a>
    const $a = [... document.getElementsByTagName('a')]; // 콜렉션을 배열처리함.
    
    // 왼쪽 메뉴 클릭시 활성화 되도록한다.
    $a.forEach( ( i ) => {

        i.addEventListener('click', ()=>{
            // 클릭한 a에 부모(li)의 부모(ul)를 찾아가서, 클릭한 a가 있는 li의 index번호를 찾아낸다.
            const n = [... i.parentElement.parentElement.children].indexOf(i.parentElement)
            // parentElement(부모 객체) / indexOf 인덱스 번호 추출. 여기서는 [선택된 a의 부모 인덱스.]
            
            // 메뉴의 모든 클래스를 삭제
            $a.forEach( ( j ) => {
                    j.removeAttribute( 'class' ); // j안의 속성인 class를 지움
            });
            // 클릭한 a에 두개의 클래스를 추가.
            i.classList.add( 'menuOver', `m${n+1}`);
        });
    });

    let xx = 1; // 중복방지
    // 휠 동작에 따른 메뉴 a활성화
    // 휠은 문서나 브라우저
    document.addEventListener('scroll', () => {
        if(xx = 0){ return; }
        xx = 0; // 중복방지 아래의 구문이 완전히 끝나기 전까지 중복을 방지함.
        // 브라우저 높이 (화면에 꽉차는 디자인이라 필요함.)
        const h1 = window.innerHeight;
        // 스크롤 높이(내리거나 올린 후의 높이)
        const t1 = document.documentElement.scrollTop || document.body.scrollTop; // 앞쪽은 새로 나온거라 인식 못할경우 뒤쪽의 코드를 통해 인식함.
        // 문서와 문서요소는 다름. document와 documentElement

        // 계산 필요. (문서의 값이 더 길기 때문에 필요함.)
        // 스크롤 높이를 브라우저 높이로 나눈 정수 값_소수점 무시[ trunc() ]
        const h = Math.trunc(t1/h1); // 0, 1, 2, 3
        // 메뉴의 모든 클래스를 삭제
        $a.forEach( ( j ) => {
            [... j.classList].forEach(( z ) => {
                j.classList.remove( z ); // z는 클래스 이름이 들어가 있음
            });
        });

        // 해당메뉴(휠 한 후의 장면)에 대한 클래스 추가
        const li = document.getElementsByTagName('li'); // 콜렉션
        if( $a[h] ){
            $a[h].classList.add('menuOver', `m${h+1}`);
        }

        xx = 1; // 중복방지.
    });

});