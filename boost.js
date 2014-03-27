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

	/*Boost Function*/
	Object.defineProperty(Function.prototype, "inherits", {
		writable: false,
		enumerable: false,
		configurable: false,
		value: function(superCtor) {
			extend(this, superCtor);
		}
	});

	/*Boost Object*/

	Object.defineProperty(Object.prototype, "toJson", {
		writable: false,
		enumerable: false,
		configurable: false,
		value: function() {
			return JSON.stringify(this);
		}
	});
	Object.defineProperty(Object.prototype, "clone", {
		writable: false,
		enumerable: false,
		configurable: false,
		value: function() {
			return JSON.parse(JSON.stringify(this));
		}
	});

	/*Boost Strings*/

	Object.defineProperty(String.prototype, "contains", {
		writable: false,
		enumerable: false,
		configurable: false,
		value: function(anotherString) {
			return this.indexOf(anotherString) != -1;
		}
	});
	Object.defineProperty(String.prototype, "replaceAll", {
		writable: false,
		enumerable: false,
		configurable: false,
		value: function(lookFor, replaceWith) {
			var r = new RegExp(lookFor, "g");
			return this.replace(r, replaceWith);
		}
	});
	
	/*Boost Arrays*/

	Object.defineProperty(Array.prototype, "contains", {
		writable: false,
		enumerable: false,
		configurable: false,
		value: function(value) {
			return this.indexOf(value) != -1;
		}
	});
	Object.defineProperty(Array.prototype, "remove", {
		writable: false,
		enumerable: false,
		configurable: false,
		value: function(value) {
			var index = this.indexOf(value);
			if ( index > -1 ) {
				return this.splice(index, 1)
			}
			return this;
		}
	});
	Object.defineProperty(Array.prototype, "clone", {
		writable: false,
		enumerable: false,
		configurable: false,
		value: function() {
			return this.slice();
		}
	});

})();