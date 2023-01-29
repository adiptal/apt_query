// -- CLOSEST
AptQuery.prototype.$_closest = function( query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = this[i].closest( query );
        if( value != undefined && result.indexOf( value ) == -1 )
        {
            result.push( value );
        }
    }
    return result;
}
// -- END CLOSEST



// -- PARENT
AptQuery.prototype.$_parent = function( query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = this[i].parentElement;
        if( value != undefined && ( query == undefined || value.matches( query ) ) && result.indexOf( value ) == -1 )
        {
            result.push( value );
        }
    }
    return result;
}
// -- END PARENT



// -- PARENTS
AptQuery.prototype.$_parents = function( query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = this[i].parentElement;
        while( value )
        {
            if( ( query == undefined || value.matches( query ) ) && result.indexOf( value ) == -1 )
            {
                result.push( value );
            }
            value = value.parentElement;
        }
    }
    return result;
}
// -- END PARENTS



// -- PARENTS UNTIL
AptQuery.prototype.$_parentsUntil = function( untilSelector , query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = this[i].parentElement;
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
            value = value.parentElement;
        }
    }
    return result;
}
// -- END PARENTS UNTIL