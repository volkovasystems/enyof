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

//# sourceMappingURL=enyof.support.js.map