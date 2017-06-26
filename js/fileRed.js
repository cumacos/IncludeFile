(function () { // I will invoke myself
    var nodo = document.createTextNode( 'Los archivos "fileRed.js" y "fileRed.css" imprimen negro / rojo.' ); 
    var element = document.createElement( 'p' );
    element.setAttribute( 'class' , 'classRed' );
    element.appendChild( nodo );
    document.getElementById( 'pElements' ).appendChild( element );
})();

