document.addEventListener("DOMContentLoaded", () => {

    const p = document.querySelector('p');
    const port1 = document.getElementById('p1');
    let po = 0;
    // window는 재장 객체라 const 안씀
    window.addEventListener('scroll', ()=> {
        po = Math.trunc(window.scrollY);
        p.innerText = po; 
        
        if (po>=400){
            port1.style.transform = 'translateX(0)';
        }else if (po<400){
            port1.style.transform = 'translateX(-100%)';
        }
    });
    
});