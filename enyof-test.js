
const assert = require( "assert" );
const enyof = require( "./enyof.js" );

assert.equal( enyof( 0, 1, 2, 3, 0 ), true, "should return true" );

assert.equal( enyof( function( ){ }, "test", true, function( ){ } ), true, "should be true" );

assert.equal( enyof( Array, 123, true, Array ), true, "should return true" );

assert.equal( enyof( Object, true, 123, Object ), true, "should return true" );

assert.equal( enyof( Date, "hello", true, Date ), true, "should return true" );

assert.equal( enyof( RegExp, "hello", true, RegExp ), true, "should return true" );

assert.equal( enyof( "test", false, 123, "test", { } ), true, "should be true" );


assert.equal( enyof( 0, true, "0" ), false, "should return false" );

assert.equal( enyof( 0, "" ), false, "should return false" );

assert.equal( enyof( null, 0, undefined ), false, "should return false" );

assert.equal( enyof( "test", false, 123, "", { } ), false, "should return false" );

assert.equal( enyof( 123, "123" ), false, "should return false" );

assert.equal( enyof( 123, 456 ), false, "should be false" );

assert.equal( enyof( { }, { } ), false, "should return false" );

assert.equal( enyof( Array, "Array" ), false, "should return false" );

assert.equal( enyof( Array, Object ), false, "should return false" );

assert.equal( enyof( new Date( ), Date ), false, "should return false" );

assert.equal( enyof( function hello( ){ return "hello" },
				function hello( ){ return "hi" } ),
				false, "should return false" );

console.log( "ok" );
