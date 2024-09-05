document.addEventListener("DOMContentLoaded" , ()=> {

    const slide_a = document.querySelectorAll( '#slide a' );//nodeList

    let i = 2;
    const slide = () => {
        if(i > 0) {
            slide_a[i].style.opacity = 0; 
            slide_a[i].style.transition = "opacity 0.5s";
            i--;
        }
        else {
            i = 2;
            slide_a.forEach( j => {            
                j.style.opacity = 1;
                j.style.transition = "opacity 0.5s";
            });
        }
    }    
    
    setInterval(  slide , 2000); //2초간격으로 지속적으로 slide라는 함수형변수를 호출한다.



    const pop_show = document.querySelectorAll('#notice li');
    alert(pop_show);
}); // end....................