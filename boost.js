// Copyright Pablo Lagioia.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

/***************************************************************************
 *                                 Boostjs                                 *
 ***************************************************************************/

(function () {

	function extend(ctor, superCtor) {
		ctor.super_ = superCtor;
		ctor.prototype = Object.create(superCtor.prototype, {
			constructor: {
				value: ctor,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
	};

	function boost (proto, fun, name) {
		if (!proto.hasOwnProperty(name)) {
			Object.defineProperty(proto, name, {
				writable: true,
				enumerable: false,
				configurable: false,
				value: fun
			})
		}
	}
	
	/*Boost Function*/
	boost(Function.prototype,
		function (superCtor) {
			extend(this, superCtor);
		},
		"inherits");

	/*Boost Object*/
	boost(Object.prototype,
		function () {
			return JSON.stringify(this);
		},
		"toJson");

	boost(Object.prototype,
		function () {
			return JSON.parse(JSON.stringify(this));
		},
		"clone");

	/*Boost Strings*/
	boost(String.prototype,
		function (anotherString) {
			return this.indexOf(anotherString) != -1;
		},
		"contains");

	boost(String.prototype,
		function (lookFor, replaceWith) {
			var r = new RegExp(lookFor, "g");
			return this.replace(r, replaceWith);
		},
		"replaceAll");

	/*Boost Arrays*/
	boost(Array.prototype,
		function (value) {
			return this.indexOf(value) != -1;
		},
		"contains");

	boost(Array.prototype,
		function (value) {
			var index = this.indexOf(value);
			if (index > -1) {
				return this.splice(index, 1);
			}
		},
		"remove");

	boost (Array.prototype,
		function () {
			return this.slice();
		},
		"clone");
})();