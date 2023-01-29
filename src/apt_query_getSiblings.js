// -- SIBLINGS
AptQuery.prototype.$_siblings = function( query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = this[i].previousElementSibling;
        while( value )
        {
            if( ( query == undefined || value.matches( query ) ) && result.indexOf( value ) == -1 )
            {
                result.push( value );
            }
            value = value.previousElementSibling;
        }

        value = this[i].nextElementSibling;
        while( value )
        {
            if( ( query == undefined || value.matches( query ) ) && result.indexOf( value ) == -1 )
            {
                result.push( value );
            }
            value = value.nextElementSibling;
        }
    }
    return result;
}
// -- END SIBLINGS



// -- NEXT
AptQuery.prototype.$_next = function( query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = this[i].nextElementSibling;
        if( value != undefined && ( query == undefined || value.matches( query ) ) && result.indexOf( value ) == -1 )
        {
            result.push( value );
        }
    }
    return result;
}


AptQuery.prototype.$_nextAll = function( query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = this[i].nextElementSibling;
        while( value )
        {
            if( ( query == undefined || value.matches( query ) ) && result.indexOf( value ) == -1 )
            {
                result.push( value );
            }
            value = value.nextElementSibling;
        }
    }
    return result;
}


AptQuery.prototype.$_nextUntil = function( untilSelector , query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = this[i].nextElementSibling;
        while( value )
        {
            if( value.matches( untilSelector ) || value == untilSelector )
            {
                break;
            }

            if( ( query == undefined || value.matches( query ) ) && result.indexOf( value ) == -1 )
            {
                result.push( value );
            }
            value = value.nextElementSibling;
        }
    }
    return result;
}
// -- END NEXT



// -- PREVIOUS
AptQuery.prototype.$_prev = function( query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = this[i].previousElementSibling;
        if( value != undefined && ( query == undefined || value.matches( query ) ) && result.indexOf( value ) == -1 )
        {
            result.push( value );
        }
    }
    return result;
}


AptQuery.prototype.$_prevAll = function( query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = this[i].previousElementSibling;
        while( value )
        {
            if( ( query == undefined || value.matches( query ) ) && result.indexOf( value ) == -1 )
            {
                result.push( value );
            }
            value = value.previousElementSibling;
        }
    }
    return result;
}


AptQuery.prototype.$_prevUntil = function( untilSelector , query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = this[i].previousElementSibling;
        while( value )
        {
            if( value.matches( untilSelector ) || value == untilSelector )
            {
                break;
            }

            if( ( query == undefined || value.matches( query ) ) && result.indexOf( value ) == -1 )
            {
                result.push( value );
            }
            value = value.previousElementSibling;
        }
    }
    return result;
}
// -- END PREVIOUS