document.addEventListener("DOMContentLoaded",() => {

    const localstorege
    const h_li = Array.from (document.getElementsByClassName('menu'));
    // alert(h_li);
    const actives = (element, i) => {
        h_li.forEach( element_i => {
            element_i.classList.remove('active');
        });
        element.classList.add('active');
    }

    h_li.forEach( (element, i) => {
        element.addEventListener('click', () => { actives(element, i) });
        // console.log(element, i);
    });
});