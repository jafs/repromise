type ResolveCallback<T> = (resolveValue: T) => void;
type RejectCallback = (rejectReason: string) => void;

/**
 * This class is to easy to understand ;) Only is a wrapper for standar JavaScript Promise.
 */
export class Repromise<T> {
	private resolveCallback: ResolveCallback<T>;
	private rejectCallback: RejectCallback;
	private promise: Promise<T>;

	constructor() {
		this.promise = new Promise<T>((resolve: ResolveCallback<T>, reject: RejectCallback): void => {
			this.resolveCallback = resolve;
			this.rejectCallback = reject;
		});
	}

	public resolve(resolveValue: T): Promise<T> {
		this.resolveCallback(resolveValue);
		return this.promise;
	}

	public reject(rejectReason: string): Promise<T> {
		this.rejectCallback(rejectReason);
		return this.promise;
	}

	public getPromise(): Promise<T> {
		return this.promise;
	}
}
