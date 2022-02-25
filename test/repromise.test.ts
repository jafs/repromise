import { Repromise } from "../src/repromise";

describe("Repromise class testing", (): void => {
	test("must resolve a promise successfully", async (): Promise<void> => {
		const resolveText: string = "Hello world";
		const repromise: Repromise<string> = new Repromise();

		const resolveResult = await repromise.resolve(resolveText)
		expect(resolveResult).toBe(resolveText);
	});

	test("must reject a promise with specified message", async (): Promise<void> => {
		const rejectReasonText: string = "Houston, we have a problem";
		const repromise: Repromise<string> = new Repromise();

		const rejectReason = await repromise.resolve(rejectReasonText)
		expect(rejectReason).toBe(rejectReasonText);
	});

	test("must resolve with any type of value", async (): Promise<void> => {
		let repromise: Repromise<any> = new Repromise();
		expect(await repromise.resolve(null)).toBeNull();

		repromise = new Repromise();
		expect(await repromise.resolve(undefined)).toBeUndefined();

		const exampleArray: number[] = [1,2,3];
		repromise = new Repromise();
		expect(await repromise.resolve(exampleArray)).toBe(exampleArray);
	});
});
