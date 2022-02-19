# Repromise

This small class provides only three methods to easily handle JavaScript promises as jQueryDeferred or another promises libraries. Only is needed to class `resolve()` or `reject()` methods to handle promise status.

```typescript
function doStuff() {
	const repromise = new Repromise();

	externalAsyncLibrary.asyncCallback.then((originalResult) => {
		const parsedResult = this.parseResult(originalResult);
		repromise.resolve(parsedResult);
	});

	return repromise.getPromise();
}
```
