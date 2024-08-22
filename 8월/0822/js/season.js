document.addEventListener("DOMContentLoaded",() => {

    const menu = document.getElementById('menu'); // iframe id = menu
    const nav = menu.contentDocument.document.querySelectorAll('nav a'); // 각 메뉴
    // alert(nav); // object nodelist

    // 페이지가 로드 된 후 실행
    menu.addEventListener('load',()=>{
        // 부모페이지에서 자식 아이프레임의 콘텐츠에 접근이 가능해야함.
        // nav.
    });

    nav.forEach( (i) => {
        i.addEventListener('click',() => {
            i.classList.add('act');
            alert('123')
        });
    });

});