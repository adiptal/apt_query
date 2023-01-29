String.prototype.$_parseHTML = function(){
    var result = new AptQuery();
    var value = ( new DOMParser().parseFromString( this , 'text/html' ) ).body.childNodes;

    for( var i = 0 ; i < value.length ; i++ )
    {
        result[i] = value[i];
    }

    return result;
}