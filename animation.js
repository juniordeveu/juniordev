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

let show2 = function() {
        let getElementSection = document.querySelectorAll( '.largeTwo' );
        let wH = window.innerHeight;
        let getPositionTop = getElementSection[0].getBoundingClientRect().top;
        let point = 100;
        if (getPositionTop < wH - point ) {
            getElementSection[0].classList.add( 'showSection' );
        } else {
            getElementSection[0].classList.remove( 'showSection' );
        }
    
    }
    window.addEventListener( "scroll", show );
    window.addEventListener( "scroll", show2 );