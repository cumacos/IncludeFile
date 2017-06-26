(function () { // I will invoke myself
    var nodo = document.createTextNode( 'Los archivos "fileBlue.js" y "fileBlue.css" imprimen blanco / azul.' ); 
    var element = document.createElement( 'p' );
    element.setAttribute( 'class' , 'classBlue' );
    element.appendChild( nodo );
    document.getElementById( 'pElements' ).appendChild( element );
})();

