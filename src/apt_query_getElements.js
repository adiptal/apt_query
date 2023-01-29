// -- QUERY SELECTOR
function $_( query , custom = document )
{
    var result = new AptQuery();



    // IF QUERY IS DOCUMENT
    if( query === document || query instanceof Node )
    {
        result.push( query );
    }
    else if( query instanceof NodeList )
    {
        for( var i = 0 ; i < query.length ; i++ )
        {
            result[i] = query[i];
        }
    }



    // ---------- IF QUERY IS JS QUERYSELECTOR STRING ----------
    else if( typeof query === 'string' )
    {
        query = query.trim();
        var value;

        if(
            query.lastIndexOf( '.' ) == 0 &&
            /(#|\[|:| )/.test( query ) == false
        )
        {
            value = custom.getElementsByClassName( query.substring(1) );
        }
        else if(
            query.lastIndexOf( '#' ) == 0 &&
            /(\.|\[|:| )/.test( query ) == false
        )
        {
            value = custom.getElementById( query.substring(1) );
        }
        else if( /(#|\.|\[|:| )/.test( query ) == false )
        {
            value = custom.getElementsByTagName( query );
        }
        else
        {
            value = custom.querySelectorAll( query );
        }

        for( var i = 0 ; i < value.length ; i++ )
        {
            result[i] = value[i];
        }
    }
    // ---------- END IF QUERY IS JS QUERYSELECTOR STRING ----------

    return result;
}

AptQuery.prototype.$_ = function( query ){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        var value = $_( query , this[i] );
        var length = result.length + value.length;
        for( var j = result.length , k = 0 ; j < length ; j++ , k++ )
        {
            result[j] = value[k];
        }
    }
    return result;
}
// -- END QUERY SELECTOR