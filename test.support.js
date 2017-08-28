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

var assert = require("should");



//: @client:
var enyof = require("./enyof.support.js");
//: @end-client







//: @client:

describe("enyof", function () {

	describe("`enyof( 0, 1, 2, 3, 0 )`", function () {
		it("should be equal to true", function () {

			assert.equal(enyof(0, 1, 2, 3, 0), true);

		});
	});

	describe("`!enyof( 'success', 'failed', 'bug' )`", function () {
		it("should be equal to true", function () {

			assert.equal(!enyof("success", "failed", "bug"), true);

		});
	});

	describe("`enyof( 'test', false, 123, 'test', { } )`", function () {
		it("should be equal to true", function () {

			assert.equal(enyof("test", false, 123, "test", {}), true);

		});
	});

	describe("`enyof( null, 0, undefined )`", function () {
		it("should be equal to false", function () {

			assert.equal(enyof(null, 0, undefined), false);

		});
	});

	describe("`enyof( 'test', false, 123, '', { } )`", function () {
		it("should be equal to false", function () {

			assert.equal(enyof("test", false, 123, "", {}), false);

		});
	});

	describe("`enyof( 123, '123' )`", function () {
		it("should be equal to false", function () {

			assert.equal(enyof(123, "123"), false);

		});
	});

	describe("`enyof( 123, 456 )`", function () {
		it("should be equal to false", function () {

			assert.equal(enyof(123, 456), false);

		});
	});

	describe("`enyof( { }, { } )`", function () {
		it("should be equal to false", function () {

			assert.equal(enyof({}, {}), false);

		});
	});

	describe("`enyof( [ ], true, [ ] )`", function () {
		it("should be equal to false", function () {

			assert.equal(enyof([], true, []), false);

		});
	});

	describe("`enyof( Array, 'Array' )`", function () {
		it("should be equal to false", function () {

			assert.equal(enyof(Array, "Array"), false);

		});
	});

	describe("`enyof( function hello( ){ return 'hello' }, function hello( ){ return 'hi' } )`", function () {
		it("should be equal to false", function () {

			assert.equal(enyof(function hello() {return "hello";}, function hello() {return "hi";}), false);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZW55b2YiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiLCJ1bmRlZmluZWQiLCJBcnJheSIsImhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLG9CQUFULENBQWQ7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCQSxVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBZCxFQUFzQyxJQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSx3Q0FBVixFQUFvRCxZQUFPO0FBQzFEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWMsQ0FBQ0gsTUFBTyxTQUFQLEVBQWtCLFFBQWxCLEVBQTRCLEtBQTVCLENBQWYsRUFBb0QsSUFBcEQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsNENBQVYsRUFBd0QsWUFBTztBQUM5REMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLE1BQVAsRUFBZSxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DLEVBQW5DLENBQWQsRUFBd0QsSUFBeEQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsK0JBQVYsRUFBMkMsWUFBTztBQUNqREMsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLElBQVAsRUFBYSxDQUFiLEVBQWdCSSxTQUFoQixDQUFkLEVBQTJDLEtBQTNDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBSCxVQUFVLHdDQUFWLEVBQW9ELFlBQU87QUFDMURDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxNQUFQLEVBQWUsS0FBZixFQUFzQixHQUF0QixFQUEyQixFQUEzQixFQUErQixFQUEvQixDQUFkLEVBQW9ELEtBQXBEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxHQUFQLEVBQVksS0FBWixDQUFkLEVBQW1DLEtBQW5DOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLHFCQUFWLEVBQWlDLFlBQU87QUFDdkNDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxHQUFQLEVBQVksR0FBWixDQUFkLEVBQWlDLEtBQWpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLHFCQUFWLEVBQWlDLFlBQU87QUFDdkNDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxFQUFQLEVBQVksRUFBWixDQUFkLEVBQWlDLEtBQWpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLDJCQUFWLEVBQXVDLFlBQU87QUFDN0NDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxFQUFQLEVBQVksSUFBWixFQUFrQixFQUFsQixDQUFkLEVBQXVDLEtBQXZDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLDJCQUFWLEVBQXVDLFlBQU87QUFDN0NDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBT0ssS0FBUCxFQUFjLE9BQWQsQ0FBZCxFQUF1QyxLQUF2Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUosVUFBVSxrRkFBVixFQUE4RixZQUFPO0FBQ3BHQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDSixVQUFPSyxLQUFQLENBQWNILE1BQU8sU0FBU00sS0FBVCxHQUFpQixDQUFFLE9BQU8sT0FBUCxDQUFnQixDQUExQyxFQUE0QyxTQUFTQSxLQUFULEdBQWlCLENBQUUsT0FBTyxJQUFQLENBQWEsQ0FBNUUsQ0FBZCxFQUE4RixLQUE5Rjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQSxDQTFGRDs7QUE0RkEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlbnlvZlwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZW55b2YvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VueW9mLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJlbnlvZlwiOiBcImVueW9mXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBlbnlvZiA9IHJlcXVpcmUoIFwiLi9lbnlvZi5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwiZW55b2ZcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgZW55b2YoIDAsIDEsIDIsIDMsIDAgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVueW9mKCAwLCAxLCAyLCAzLCAwICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImAhZW55b2YoICdzdWNjZXNzJywgJ2ZhaWxlZCcsICdidWcnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCAhZW55b2YoIFwic3VjY2Vzc1wiLCBcImZhaWxlZFwiLCBcImJ1Z1wiICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlbnlvZiggJ3Rlc3QnLCBmYWxzZSwgMTIzLCAndGVzdCcsIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZW55b2YoIFwidGVzdFwiLCBmYWxzZSwgMTIzLCBcInRlc3RcIiwgeyB9ICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlbnlvZiggbnVsbCwgMCwgdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZW55b2YoIG51bGwsIDAsIHVuZGVmaW5lZCApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVueW9mKCAndGVzdCcsIGZhbHNlLCAxMjMsICcnLCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlbnlvZiggXCJ0ZXN0XCIsIGZhbHNlLCAxMjMsIFwiXCIsIHsgfSApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVueW9mKCAxMjMsICcxMjMnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZW55b2YoIDEyMywgXCIxMjNcIiApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVueW9mKCAxMjMsIDQ1NiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVueW9mKCAxMjMsIDQ1NiApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVueW9mKCB7IH0sIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVueW9mKCB7IH0sIHsgfSApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVueW9mKCBbIF0sIHRydWUsIFsgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVueW9mKCBbIF0sIHRydWUsIFsgXSApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVueW9mKCBBcnJheSwgJ0FycmF5JyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVueW9mKCBBcnJheSwgXCJBcnJheVwiICksIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZW55b2YoIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9LCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuICdoaScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVueW9mKCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuIFwiaGVsbG9cIiB9LCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuIFwiaGlcIiB9ICksIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
