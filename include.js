function includeGroup( arr )
{

    this.include = function( fileType, fileName )
    {

        this.createJsCssFile = function( fileName , fileType )
        {

            if (fileType == "js") { 
                var fileRef = document.createElement( 'script' );
                fileRef.setAttribute( "type","text/javascript" );
                fileRef.setAttribute( "src", fileName );
            } else if ( fileType == "css" ) { 
                var fileRef = document.createElement( "link" );
                fileRef.setAttribute( "rel", "stylesheet" );
                fileRef.setAttribute( "type", "text/css" );
                fileRef.setAttribute( "href", fileName );
            }

            return fileRef;

        }

        var fileRef = createJsCssFile( fileName, fileType );

        if ( typeof fileRef != "undefined" )
            document.getElementsByTagName("head")[0].appendChild( fileRef );

    }

    var arrLen = arr.length;

    for (var i = 0; i < arrLen; i++)
        include(arr[i]["typ"] , arr[i]["path"]+arr[i]["arc"]+"."+ arr[i]["typ"]); 

}

function removeGroup( arr )
{

    this.removeJsCssFile = function( fileName , fileType )
    {

        var targetElement = ( fileType == "js" ) ? "script" : ( fileType == "css" ) ? "link" : "none"; 
        var targetAttr = ( fileType == "js" )? "src" : ( fileType == "css" ) ? "href" : "none"; 
        var allSuspects = document.getElementsByTagName( targetElement );
        for ( var i = allSuspects.length; i >= 0; i-- ) {
            if ( allSuspects[i] 
            && allSuspects[i].getAttribute( targetAttr ) != null 
            && allSuspects[i].getAttribute( targetAttr ).indexOf( fileName ) != -1 )
                allSuspects[i].parentNode.removeChild( allSuspects[i] ); 
        }

    }

    var arrLen = arr.length;

    for ( var i = 0; i < arrLen; i++ )
        removeJsCssFile( arr[i]["path"]+arr[i]["arc"]+"."+ arr[i]["typ"], arr[i]["typ"] ); 

}

