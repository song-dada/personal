document.addEventListener("DOMContentLoaded",()=>{

    const big_img = document.getElementsByClassName('big')[0];
    const small_button = document.querySelectorAll('#small button');
    const small_img = document.querySelectorAll('#small button img');

    const img_chenge = ( item ) => {
        let c = item.firstElementChlidren.src;
        big_img.src = c;
    };

    small_button.forEach(element => {
        element.addEventListener('click', ()=>{ img_chenge(element) });
    });

});