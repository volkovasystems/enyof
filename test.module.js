"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "enyof",
			"path": "enyof/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/enyof.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"enyof": "enyof"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const enyof = require( "./enyof.js" );
//: @end-server

//: @client:
const enyof = require( "./enyof.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "enyof", ( ) => {

	describe( "`enyof( 0, 1, 2, 3, 0 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( enyof( 0, 1, 2, 3, 0 ), true );

		} );
	} );

	describe( "`!enyof( 'success', 'failed', 'bug' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( !enyof( "success", "failed", "bug" ), true );

		} );
	} );

	describe( "`enyof( 'test', false, 123, 'test', { } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( enyof( "test", false, 123, "test", { } ), true );

		} );
	} );

	describe( "`enyof( null, 0, undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( null, 0, undefined ), false );

		} );
	} );

	describe( "`enyof( 'test', false, 123, '', { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( "test", false, 123, "", { } ), false );

		} );
	} );

	describe( "`enyof( 123, '123' )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( 123, "123" ), false );

		} );
	} );

	describe( "`enyof( 123, 456 )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( 123, 456 ), false );

		} );
	} );

	describe( "`enyof( { }, { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( { }, { } ), false );

		} );
	} );

	describe( "`enyof( [ ], true, [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( [ ], true, [ ] ), false );

		} );
	} );

	describe( "`enyof( Array, 'Array' )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( Array, "Array" ), false );

		} );
	} );

	describe( "`enyof( function hello( ){ return 'hello' }, function hello( ){ return 'hi' } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( function hello( ){ return "hello" }, function hello( ){ return "hi" } ), false );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "enyof", ( ) => {

	describe( "`enyof( 0, 1, 2, 3, 0 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( enyof( 0, 1, 2, 3, 0 ), true );

		} );
	} );

	describe( "`!enyof( 'success', 'failed', 'bug' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( !enyof( "success", "failed", "bug" ), true );

		} );
	} );

	describe( "`enyof( 'test', false, 123, 'test', { } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( enyof( "test", false, 123, "test", { } ), true );

		} );
	} );

	describe( "`enyof( null, 0, undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( null, 0, undefined ), false );

		} );
	} );

	describe( "`enyof( 'test', false, 123, '', { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( "test", false, 123, "", { } ), false );

		} );
	} );

	describe( "`enyof( 123, '123' )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( 123, "123" ), false );

		} );
	} );

	describe( "`enyof( 123, 456 )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( 123, 456 ), false );

		} );
	} );

	describe( "`enyof( { }, { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( { }, { } ), false );

		} );
	} );

	describe( "`enyof( [ ], true, [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( [ ], true, [ ] ), false );

		} );
	} );

	describe( "`enyof( Array, 'Array' )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( Array, "Array" ), false );

		} );
	} );

	describe( "`enyof( function hello( ){ return 'hello' }, function hello( ){ return 'hi' } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( enyof( function hello( ){ return "hello" }, function hello( ){ return "hi" } ), false );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "enyof", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`enyof( 0, 1, 2, 3, 0 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return enyof( 0, 1, 2, 3, 0 );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`!enyof( 'success', 'failed', 'bug' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return !enyof( "success", "failed", "bug" );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`enyof( 'test', false, 123, 'test', { } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return enyof( "test", false, 123, "test", { } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`enyof( null, 0, undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return enyof( null, 0, undefined );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`enyof( 'test', false, 123, '', { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return enyof( "test", false, 123, "", { } );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`enyof( 123, '123' )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return enyof( 123, "123" );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`enyof( 123, 456 )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return enyof( 123, 456 );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`enyof( { }, { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return enyof( { }, { } );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`enyof( [ ], true, [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return enyof( [ ], true, [ ] );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`enyof( Array, 'Array' )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return enyof( Array, "Array" );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`enyof( function hello( ){ return 'hello' }, function hello( ){ return 'hi' } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return enyof( function hello( ){ return "hello" }, function hello( ){ return "hi" } );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

} );

//: @end-bridge
