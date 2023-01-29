AptQuery.prototype.$_visible = function( visible_boolean = true ){
    var result = new AptQuery();

    if( visible_boolean )
    {
        for( var i = 0 ; i < this.length ; i++ )
        {
            if( this[i].offsetWidth || this[i].offsetHeight || this[i].getClientRects().length )
            {
                result.push( this[i] );
            }
        }
    }
    else
    {
        for( var i = 0 ; i < this.length ; i++ )
        {
            if( !( this[i].offsetWidth || this[i].offsetHeight || this[i].getClientRects().length ) )
            {
                result.push( this[i] );
            }
        }
    }
    return result;
}

AptQuery.prototype.$_remove = function(){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].remove();
    }
}


AptQuery.prototype.$_index = function( element ){
    switch( typeof element )
    {
        case 'undefined' :
            for( var i = 0 ; i < this.length ; i++ )
            {
                return $_( this[i] ).$_parent().$_(':scope > *').indexOf( this[i] );
            }
        break;

        case 'object' :
            return this.indexOf( element );
        break;
    }
    return -1;
}


AptQuery.prototype.$_clone = function(){
    var result = new AptQuery();
    for( var i = 0 ; i < this.length ; i++ )
    {
        result.push( this[i].cloneNode( true ) );
    }
    return result;
}

AptQuery.prototype.$_trigger = function( eventName , detail = {} ){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].dispatchEvent(
            new CustomEvent( eventName , {
                view : window ,
                bubbles : true ,
                cancelable : true ,
                detail : detail
            })
        );
    }
    return this;
}

AptQuery.prototype.$_focus = function(){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].focus();
    }
    return this;
}

AptQuery.prototype.$_click = function(){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].click();
    }
    return this;
}

AptQuery.prototype.$_contextmenu = function(){
    return this.$_trigger('contextmenu');
}


AptQuery.prototype.$_position = function(){
    for( var i = 0 ; i < this.length ; i++ )
    {
        return this[i].getBoundingClientRect();
    }
}


AptQuery.prototype.$_css = function( style ){
    switch( typeof style )
    {
        case 'string':
            for( var i = 0 ; i < this.length ; i++ )
            {
                return window.getComputedStyle( this[i] ).getPropertyValue( style );
            }
            return '';
        break;

        case 'object':
            for( var i = 0 ; i < this.length ; i++ )
            {
                var keys = Object.keys( style );
                for( var j = 0 ; j < keys.length ; j++ )
                {
                    this[i].style.setProperty( keys[j] , style[keys[j]] );
                }
            }
        break;
    }
    return this;
}

AptQuery.prototype.$_removeCSS = function( style ){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].style.removeProperty( style );
    }
    return this;
}


AptQuery.prototype.$_show = function(){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].style.display = '';
        if( window.getComputedStyle( this[i] ).getPropertyValue( 'display' ) == 'none' )
        {
            this[i].style.display = 'block';
        }
    }
    return this;
}

AptQuery.prototype.$_hide = function(){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].style.display = 'none';
    }
    return this;
}

AptQuery.prototype.$_toggle = function(){
    for( var i = 0 ; i < this.length ; i++ )
    {
        if( window.getComputedStyle( this[i] ).getPropertyValue( 'display' ) == 'none' )
        {
            this[i].style.display = 'block';
        }
        else
        {
            this[i].style.display = 'none';
        }
    }
    return this;
}


AptQuery.prototype.$_attr = function( attribute ){
    switch( typeof attribute )
    {
        case 'string':
            for( var i = 0 ; i < this.length ; i++ )
            {
                return this[i].getAttribute( attribute );
            }
            return;
        break;

        case 'object':
            for( var i = 0 ; i < this.length ; i++ )
            {
                var keys = Object.keys( attribute );
                for( var j = 0 ; j < keys.length ; j++ )
                {
                    this[i].setAttribute( keys[j] , attribute[keys[j]] );
                }
            }
        break;
    }
    return this;
}

AptQuery.prototype.$_removeAttr = function( attribute ){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].removeAttribute( attribute );
    }
    return this;
}


AptQuery.prototype.$_hasClass = function( className ){
    for( var i = 0 ; i < this.length ; i++ )
    {
        if( this[i].classList.contains( className ) )
        {
            return true;
        }
    }
    return false;
}

AptQuery.prototype.$_toggleClass = function( className ){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].classList.toggle( className );
    }
    return this;
}

AptQuery.prototype.$_addClass = function( className ){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].classList.add( className );
    }
    return this;
}

AptQuery.prototype.$_removeClass = function( className ){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].classList.remove( className );
    }
    return this;
}


AptQuery.prototype.$_val = function( content ){
    switch( typeof content )
    {
        case 'string':
            for( var i = 0 ; i < this.length ; i++ )
            {
                this[i].value = content;
            }
        break;

        default:
            for( var i = 0 ; i < this.length ; i++ )
            {
                return this[i].value;
            }
            return;
        break;
    }
    return this;
}

AptQuery.prototype.$_html = function( content ){
    switch( typeof content )
    {
        case 'string':
            for( var i = 0 ; i < this.length ; i++ )
            {
                this[i].innerHTML = content;
            }
        break;

        default:
            for( var i = 0 ; i < this.length ; i++ )
            {
                return this[i].innerHTML;
            }
            return;
        break;
    }
    return this;
}

AptQuery.prototype.$_outerhtml = function( content ){
    switch( typeof content )
    {
        case 'string':
            for( var i = 0 ; i < this.length ; i++ )
            {
                this[i].outerHTML = content;
            }
        break;

        default:
            for( var i = 0 ; i < this.length ; i++ )
            {
                return this[i].outerHTML;
            }
            return;
        break;
    }
    return this;
}

AptQuery.prototype.$_text = function( content ){
    switch( typeof content )
    {
        case 'string':
            for( var i = 0 ; i < this.length ; i++ )
            {
                this[i].textContent = content;
            }
        break;

        default:
            for( var i = 0 ; i < this.length ; i++ )
            {
                return this[i].textContent;
            }
            return;
        break;
    }
    return this;
}

AptQuery.prototype.$_append = function( content ){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].insertAdjacentHTML( 'beforeend' , content );
    }
    return this;
}

AptQuery.prototype.$_prepend = function( content ){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].insertAdjacentHTML( 'afterbegin' , content );
    }
    return this;
}

AptQuery.prototype.$_before = function( content ){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].insertAdjacentHTML( 'beforebegin' , content );
    }
    return this;
}

AptQuery.prototype.$_after = function( content ){
    for( var i = 0 ; i < this.length ; i++ )
    {
        this[i].insertAdjacentHTML( 'afterend' , content );
    }
    return this;
}