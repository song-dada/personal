document.addEventListener("DOMContentLoaded", () =>{
    const window = document.documentElement.clientWidth;
    // alert(window);
    const $btn = document.querySelector('[type="button"]');
    // alert( $btn[1] );
    const $ul = document.getElementById('submenu');
    const $li = document.querySelector('[href="#"]');
   
    const show = () => {
        if($ul.style.visibility == 'hidden')
            {   
                $ul.style.visibility = 'visible';   
                // $ul.style.display = 'block'; 
                $btn.innerHTML = 'close';
            }
        
        else {     
                // $ul.style.display = 'none'; 
                $ul.style.visibility = 'hidden';
                $btn.innerHTML = 'menu';
           }
    };
    // const show = () => {
    //     if($ul.style.display == 'none')
    //         {   
    //             // $ul.style.visibility = 'visible';   
    //             $ul.style.display = 'block'; 
    //         }
        
    //     else {     
    //             $ul.style.display = 'none'; 
    //             // $ul.style.visibility = 'hidden';
    //        }
    // };
    
    // document.addEventListener("change", () => {
    //     if(window<800){ $ul.style.display = 'block'; }
    //     if(window>800) {$ul.style.display = 'none';  }
    // });

    $btn.addEventListener('click', show);
});