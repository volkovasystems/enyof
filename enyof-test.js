
const assert = require( "assert" );
const enyof = require( "./enyof.js" );

assert.equal( enyof( "test", false, 123, "test", { } ), true, "should be true" );

assert.equal( enyof( "test", false, 123, "", { } ), false, "should be false" );

console.log( "ok" );
