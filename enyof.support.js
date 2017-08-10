"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "enyof",
              			"path": "enyof/enyof.js",
              			"file": "enyof.js",
              			"module": "enyof",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/enyof.git",
              			"test": "enyof-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Shallow equal on any of the given parameter.
              	@end-module-documentation
              
              	@include:
              		{
              			"eqe": "eqe",
              			"plough": "plough",
              			"shft": "shft"
              		}
              	@end-include
              */

var eqe = require("eqe");
var plough = require("plough");
var shft = require("shft");

var enyof = function enyof(entity, parameter) {
	/*;
                                               	@meta-configuration:
                                               		{
                                               			"entity:required": "*",
                                               			"parameter:required": [
                                               				"*",
                                               				"...*"
                                               			]
                                               		}
                                               	@end-meta-configuration
                                               */

	if (arguments.length < 2) {
		throw new Error("invalid parameter");
	}

	try {
		return plough(shft(arguments)).some(function (parameter) {return eqe(entity, parameter);});

	} catch (error) {
		return false;
	}
};

module.exports = enyof;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVueW9mLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZXFlIiwicmVxdWlyZSIsInBsb3VnaCIsInNoZnQiLCJlbnlvZiIsImVudGl0eSIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkVycm9yIiwic29tZSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsTUFBTUMsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLFNBQXhCLEVBQW1DO0FBQ2hEOzs7Ozs7Ozs7Ozs7QUFZQSxLQUFJQyxVQUFVQyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3pCLFFBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFRCxLQUFHO0FBQ0YsU0FBT1AsT0FBUUMsS0FBTUksU0FBTixDQUFSLEVBQTRCRyxJQUE1QixDQUFrQyxVQUFFSixTQUFGLFVBQWlCTixJQUFLSyxNQUFMLEVBQWFDLFNBQWIsQ0FBakIsRUFBbEMsQ0FBUDs7QUFFQSxFQUhELENBR0MsT0FBT0ssS0FBUCxFQUFjO0FBQ2QsU0FBTyxLQUFQO0FBQ0E7QUFDRCxDQXZCRDs7QUF5QkFDLE9BQU9DLE9BQVAsR0FBaUJULEtBQWpCIiwiZmlsZSI6ImVueW9mLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZW55b2ZcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiZW55b2YvZW55b2YuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiZW55b2YuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJlbnlvZlwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9lbnlvZi5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiZW55b2YtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRTaGFsbG93IGVxdWFsIG9uIGFueSBvZiB0aGUgZ2l2ZW4gcGFyYW1ldGVyLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCIsXHJcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXHJcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZXFlID0gcmVxdWlyZSggXCJlcWVcIiApO1xyXG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XHJcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xyXG5cclxuY29uc3QgZW55b2YgPSBmdW5jdGlvbiBlbnlvZiggZW50aXR5LCBwYXJhbWV0ZXIgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIixcclxuXHRcdFx0XHRcInBhcmFtZXRlcjpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIipcIixcclxuXHRcdFx0XHRcdFwiLi4uKlwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoIDwgMiApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcGFyYW1ldGVyXCIgKTtcclxuXHR9XHJcblxyXG5cdHRyeXtcclxuXHRcdHJldHVybiBwbG91Z2goIHNoZnQoIGFyZ3VtZW50cyApICkuc29tZSggKCBwYXJhbWV0ZXIgKSA9PiBlcWUoIGVudGl0eSwgcGFyYW1ldGVyICkgKTtcclxuXHJcblx0fWNhdGNoKCBlcnJvciApe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZW55b2Y7XHJcbiJdfQ==
//# sourceMappingURL=enyof.support.js.map
