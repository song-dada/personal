document.addEventListener("DOMContentLoaded",() =>{


    const $h2 = document.querySelectorAll('#layout h2');
    const noticeul = document.querySelector('#notice ul');
    const gallerydiv = document.querySelector('#gallery div');
    const black = document.getElementById('black');
    const btn = document.querySelector('#popup button');
    // alert(ul);

    const nngg = ( i ) => {
        $h2.forEach( j =>{
            j.classList.remove('active');
            j.nextElementSibling.style.display = 'none';
        })
        i.nextElementSibling.style.display = 'block';
        i.classList.add('active');
    };
    // forEach의 매개변수는 현재값, 인덱스, 배열 순
    $h2.forEach( ( i ) => {
        i.children[0].addEventListener('click', () => { nngg(i); } );
        
    });
    const popup = ( c ) => {
        if (c == null) {
            black.style.display = 'block';
        }else{
            black.style.display = 'none';
        }
    };
    //콜렉션은 코드짜기 불편(?)해서 Array.from() 통해 배열로 바꿈
    Array.from(noticeul.children).forEach( ( i ) => { // <li> 4개 잡음
       i.children[0].addEventListener('click', () => { popup(); } )
    });
    btn.addEventListener('click', () => { popup(btn); } )
});