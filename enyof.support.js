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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVueW9mLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZXFlIiwicmVxdWlyZSIsInBsb3VnaCIsInNoZnQiLCJlbnlvZiIsImVudGl0eSIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkVycm9yIiwic29tZSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsTUFBTUMsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLFNBQXhCLEVBQW1DO0FBQ2hEOzs7Ozs7Ozs7Ozs7QUFZQSxLQUFJQyxVQUFVQyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3pCLFFBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFRCxLQUFHO0FBQ0YsU0FBT1AsT0FBUUMsS0FBTUksU0FBTixDQUFSLEVBQTRCRyxJQUE1QixDQUFrQyxVQUFFSixTQUFGLFVBQWlCTixJQUFLSyxNQUFMLEVBQWFDLFNBQWIsQ0FBakIsRUFBbEMsQ0FBUDs7QUFFQSxFQUhELENBR0MsT0FBT0ssS0FBUCxFQUFjO0FBQ2QsU0FBTyxLQUFQO0FBQ0E7QUFDRCxDQXZCRDs7QUF5QkFDLE9BQU9DLE9BQVAsR0FBaUJULEtBQWpCIiwiZmlsZSI6ImVueW9mLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVueW9mXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlbnlvZi9lbnlvZi5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZW55b2YuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZW55b2ZcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VueW9mLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZW55b2YtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRTaGFsbG93IGVxdWFsIG9uIGFueSBvZiB0aGUgZ2l2ZW4gcGFyYW1ldGVyLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJlcWVcIjogXCJlcWVcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZXFlID0gcmVxdWlyZSggXCJlcWVcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XG5cbmNvbnN0IGVueW9mID0gZnVuY3Rpb24gZW55b2YoIGVudGl0eSwgcGFyYW1ldGVyICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcInBhcmFtZXRlcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCIqXCIsXG5cdFx0XHRcdFx0XCIuLi4qXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPCAyICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcGFyYW1ldGVyXCIgKTtcblx0fVxuXG5cdHRyeXtcblx0XHRyZXR1cm4gcGxvdWdoKCBzaGZ0KCBhcmd1bWVudHMgKSApLnNvbWUoICggcGFyYW1ldGVyICkgPT4gZXFlKCBlbnRpdHksIHBhcmFtZXRlciApICk7XG5cblx0fWNhdGNoKCBlcnJvciApe1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnlvZjtcbiJdfQ==
//# sourceMappingURL=enyof.support.js.map
