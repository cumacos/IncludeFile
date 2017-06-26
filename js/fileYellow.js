(function () { // I will invoke myself
    var nodo = document.createTextNode( 'Los archivos "fileYellow.js" y "fileYellow.css" imprimen negro / amarillo.' ); 
    var element = document.createElement( 'p' );
    element.setAttribute( 'class' , 'classYellow' );
    element.appendChild( nodo );
    document.getElementById( 'pElements' ).appendChild( element );
})();

