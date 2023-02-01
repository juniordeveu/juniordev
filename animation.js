let show = function(){
    let getElement = document.querySelectorAll( '.description__container' );
    let wH = window.innerHeight;
    let position = getElement[0].getBoundingClientRect().top;
    let point = 150;
        
    if( position < wH - point ){
            getElement[0].classList.add( 'show' );
    } else{
            getElement[0].classList.remove( 'show' ); 
        };
    


}

window.addEventListener("scroll",show)