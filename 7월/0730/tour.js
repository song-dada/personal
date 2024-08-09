document.addEventListener("DOMContentLoaded", () => {

    const slide = document.getElementById('slide');
    // alert(slide);

    const elementAdd = () => {
        slide.style.transition = 'none';
        slide.style.top = '-200%';
        
        slide.prepend(slide.children[2]);
    };

    const todown = () => {
        slide.style.transition = 'top 1500ms';
        slide.style.top = '-100%';

        setTimeout( elementAdd, 2000);
    };
    setInterval( todown, 2500);



    const nLi = document. querySelectorAll('#notice td');
    const popup = document.getElementById('black');
    const btn = document.getElementsByTagName('button')[0];

    const show = ( i ) => {
        if(i==null)  { popup.style.display = 'block'; }
        else { popup.style.display = 'none'; }
    };
    alert(btn);
    // alert(nLi[2].innerHTML);
    nLi.forEach( (i, j) => {
        // i.children[0].addEventListener('click', show );
        // alert(
        if( j%2 == 0)
            i.children[0].addEventListener('click', () => { show(); } );
        // );
    });
    btn.addEventListener( 'click', ()=>{ show(btn); } );

});