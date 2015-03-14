function extend( a, b ) {
    'use strict';
    for( var key in b ) {
        if( b.hasOwnProperty( key ) ) {
            a[key] = b[key];
        }
    }
    return a;
}

module.exports = extend;