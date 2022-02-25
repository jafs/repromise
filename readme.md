# Repromise

This small class provides only three methods to easily handle JavaScript promises as jQueryDeferred or another promises libraries. Only is needed to class `resolve()` or `reject()` methods to handle promise status.

> If you need a polyfill for promise, you can use [Promise Polyfill](https://www.npmjs.com/package/promise-polyfill).

## Example of use
```javascript
import { Repromise } from "jrepromise";

function exampleWithResolvedPromise() {
	const repromise = new Repromise();

	// do some stuff

	repromise.resolve("Value to resolve");
	repromise.getPromise();
}

function exampleWithRejectedPromise() {
	const repromise = new Repromise();

	// do some stuff

	repromise.reject("Reason to reject");
	return repromise.getPromise();
}
```

## Methods of Repromise
- **resolve**: Resolves the promise. Optionally can receive a value.
- **reject**: Rejects the promise. A string with reject reason must be indicated.
- **getPromise**: Gets the standar JavaScript promise.

## Requests and issues
If you find an issue o make a request for a feature, Feel free to add it to [library GitHub repository](https://github.com/jafs/repromise/issues).