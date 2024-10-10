document.addEventListener("DOMContentLoaded", ()=>{

    const btn = document.getElementsByClassName("material-symbols-outlined")[0];
    const nav = document.getElementsByTagName('nav')[0];
    //슬라이드 부분
    const slideArea = document.getElementById("slideArea");
    const slide = document.getElementById("slide"); 

    //슬라이드에 있는 양쪽 화살표[
    const arrLeft = document.querySelectorAll("#arrow button")[0];
    const arrRight = document.querySelectorAll("#arrow button")[1];
    //alert(arrLeft + "\n"+arrRight );


    //slide의 범위설정을 위해.
    let sw = slideArea.clientWidth; //슬라이드보이는 곳의 넓이
    slide.style.width = sw * 3 + "px"; //슬라이드 넓이
    //alert(sw + "\n" + slide.style.width );

    //<h2>의 위치설정
    let sh = slideArea.clientHeight;
    let h2 = document.getElementsByTagName('h2')[0];
    let h2Width = h2.clientWidth;
    let h2Height= h2.clientHeight;
    
    let sww = (sw - h2Width) / 2;            
    h2.style.left = sww + "px";
    let shh = Math.trunc(( sh - h2Height ) /2 );
    h2.style.top = shh + "px";     

    let menu = () => {
        if( nav.clientHeight == 0 )  nav.style.height = "200px";
        else nav.style.height = "0px";
    }

    let ss = () => {
        if( window.innerWidth>=1024 )  nav.style.height = "auto";
        else      nav.style.height = 0; 
        pos1 =   sw* (-2) + "px"; 

        //<h2>의 위치설정
        sh = slideArea.clientHeight;
        h2 = document.getElementsByTagName('h2')[0];
        h2Width = h2.clientWidth;
        h2Height= h2.clientHeight;

        sww = (sw - h2Width) / 2;
        h2.style.left = sww + "px";
        shh = Math.trunc(( sh - h2Height ) /2 );
        h2.style.top = shh + "px";  
    }

    let pos1 =  (sw) * (-2) + "px"; 
    
    
    const circleArea = document.getElementById('circle');//동그라미3개의 부모영역    

    let i = 0; //빨간동그라미 위치표시
    const toLeftMove = () => {
        arrLeft.disabled = true;
        arrRight.disabled = true;

        slide.style.transition = "left 1s";
        slide.style.left = pos1;        
        
        //동그라미에서 빨간색을 제거       
        document.getElementsByClassName('red')[0].classList.remove('red'); //초기값으로 index0이 빨간색을 지웠다
        i = (i+1) % 3; // [1,2,0]
        circleArea.children[i].classList.add('red'); //index i에 빨간색을 넣는다.
        console.log(i);
        setTimeout( po1, 1000  );
    }

    const po1 = () => {
        slide.style.transition = "none"; 
        slide.style.left =  sw * (-1) + "px";
        slide.append( slide.firstElementChild );  
        arrLeft.disabled = false;
        arrRight.disabled = false;     
    }

    const toRightMove = () => {   
        arrLeft.disabled = true;
        arrRight.disabled = true;

        slide.style.transition = "left 1s";
        slide.style.left = 0;        
        
        //동그라미에서 빨간색을 제거        
        document.getElementsByClassName('red')[0].classList.remove('red');
        i =(i+2) % 3; //[2,0,1]
        console.log(i);
        circleArea.children[i].classList.add('red'); 

        setTimeout( po2, 1000  );
    }

    const po2 = () => {
        slide.style.transition = "none"; 
        slide.style.left =  sw * (-1) + "px";
        slide.prepend( slide.lastElementChild );
        arrLeft.disabled = false;
        arrRight.disabled = false;         
    }
               
    btn.addEventListener("click" , menu );
    window.addEventListener("resize" , ss  );

    /*************setInterval( move , 2500);
    let x1 = 0; //터치 시작점
    let x2 = 0; //터치 끝점
    slideArea.addEventListener("touchstart" ,   e =>{
        x1 = e.touches[0].clientX;

        slideArea.addEventListener("touchend" , zz = e => {
            x2 = e.changedTouches[0].clientX;
           
            slideArea.removeEventListener("touchend" , zz); //한번만 실행되도록한다.
            
            if (x1 > x2 )   toLeftMove();
            if (x1 < x2 )   toRightMove();
        });
    }); **********************/

    arrLeft.addEventListener("click" , toRightMove);
    arrRight.addEventListener("click" , toLeftMove);

});//////////////////////// 마지막 부분