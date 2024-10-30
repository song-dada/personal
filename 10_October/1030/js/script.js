document.addEventListener("DOMContentLoaded" , ()=> {
    
    const slide = document.getElementById('slide');
    // const slide = document.querySelectorAll('#slide img');

    // const images = slide.getElementsByTagName('img');
    const toleft = () => {
        slide.style.transition = 'left 1500ms';
        slide.style.left = '-100%';

        setTimeout(pos1,2000);
    };

    const pos1 = () => {
        slide.style.left = '0%';
        slide.style.transition = 'none';
        slide.append(slide.firstElementChild);
    };

    setInterval(toleft, 2800);
    
    const li_a = document.querySelectorAll('#notice a');
    const pop = document.getElementById('popup');
    const c_btn = document.getElementById('c_btn');

    li_a.forEach((i)=>{
        i.addEventListener('click',()=>{
            pop.style.display = 'block';

        });
    });
    c_btn.addEventListener('click',()=>{
        pop.style.display = 'none';
    });
}); // end....................c_btn