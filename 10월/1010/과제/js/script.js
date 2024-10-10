document.addEventListener("DOMContentLoaded",()=>{

    const nav = document.querySelector('header+nav');

    const button = document.getElementById('menubutton');
    const nav_a = document.querySelectorAll('nav ul li a');
    let c = 0;

    // const btn_clock = () => {
    //     if(nav.style.left != '500px'){
    //         nav.style.left = '0';
    //         button.textContent = 'close';
    //         alert(nav.style.left);
    //     }
    //     else{
    //         nav.style.left = '-500px';
    //         button.textContent = 'menu';

    //     }
    // }; 
    const btn_clock = () => {
        if(c === 0 ){
            nav.style.left = '0';
            button.textContent = 'close';
            c = 1;
        }
        else{
            nav.style.left = '-505px';
            button.textContent = 'menu';
            c = 0;
        }
    };

   

    button.addEventListener('click',()=>{
        btn_clock();
    });
    nav_a.forEach( element => {
        element.addEventListener('click',()=>{
            btn_clock();
        });
    });
    // clickElements.forEach( element => {
    //         element.addEventListener('click',()=>{
    //             btn_clock();
    //         });
    //     });

});