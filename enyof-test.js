
const assert = require( "assert" );
const enyof = require( "./enyof.js" );

assert.equal( enyof( 0, 1, 2, 3, 0 ), true, "should return true" );

assert.equal( !enyof( "success", "failed", "bug" ), true, "should return true" );
/* The result of the following test has changed

assert.equal( enyof( ( ) => { }, false, ( ) => { } ), true, "should return true" );

let test = function( ){ };
assert.equal( enyof( test, "test", true, test ), true, "should return true" );

assert.equal( enyof( Array, 123, true, Array ), true, "should return true" );

*/

assert.equal( enyof( "test", false, 123, "test", { } ), true, "should return true" );

assert.equal( enyof( null, 0, undefined ), false, "should return false" );

assert.equal( enyof( "test", false, 123, "", { } ), false, "should return false" );

assert.equal( enyof( 123, "123" ), false, "should return false" );

assert.equal( enyof( 123, 456 ), false, "should return false" );

assert.equal( enyof( { }, { } ), false, "should return false" );

assert.equal( enyof( [ ], true, [ ] ), false, "should return false" );

assert.equal( enyof( Array, "Array" ), false, "should return false" );

assert.equal( enyof( Array, Object ), false, "should return false" );

assert.equal( enyof( function hello( ){ return "hello" },
				function hello( ){ return "hi" } ),
				false, "should return false" );

console.log( "ok" );
