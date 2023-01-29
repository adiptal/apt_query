'use strict';



class AptQuery extends Array{}

AptQuery.prototype.$_eq = function( index ){
    if( this[index] != undefined )
    {
        return new AptQuery( this[index] );
    }
    return new AptQuery();
}

AptQuery.prototype.$_has = function( query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        if( $_( this[i] ).$_( query ).length != 0 )
        {
            result.push( this[i] );
        }
    }
    return result;
}