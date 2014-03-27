Boostjs
=======

Boostjs is a tiny library that adds common functionality to Javascript objects.
Some of this features are present in other languages and many developers wonder why they were not added to Javascript.

Note
----
None of this methods modifies the native objects in a way that it can affect functionality. In the worst case, junior developers may try to use these features without knowing they are not part of the language itself so please use with care.

## Strings

### contains
Determines whether a string contains another string or not
```js
var myStr = "Hello!";
assert.equal(myStr.contains("l"), true);
```

### replaceAll
Replaces all ocurrences of a given string in another string
```js
var myStr = "Hello World!";
assert.equal(myStr.replaceAll("o", "0"), "Hell0 W0rld!");
```

## Arrays

### remove
Removes an element from an array and returns the removed element.

```js
var myArr = ["bannanas", "apples", "oranges"]
myArr.remove("apples");
assert.equal(myArray.indexOf("apples"), -1);
```
### contains
Determines whether an array contains an object or not

```js
var myArr = ["bannanas", "apples", "oranges"]
assert.equal(myArray.contains("apples"), true);
```

## Objects

### clone
Returns a clone of the object

```js
var obj = { myProperty: "some string" };
obj.clone();
```

### toJson
Short hand for JSON.stringify(object);

```js
var obj = { myProperty: "some string" };
obj.toJson();
```

### inherits

```js
function Parent() {}
Parent.prototype.doSomething = function() {
	return "I'm doing something now";
};
function Child() {}

Child.inherits(Parent);

var child = new Child();

child.doSomething();
```

