const { addLabel } = require('@wdio/allure-reporter').default;
const { addIssue } = require('@wdio/allure-reporter').default;

beforeEach(() => {
	/* Initilialising browser link and reloading before each test is performed.*/
	browser.url("/parkcalc");
});

/*

It is important to check that the inputed user values make sense timewise, too. This test can help us make sure that
slotted times are not inputed incorrectly.

*/
describe("Checking valid date and time stamps", () => {
	/* This test checks only that both timestamps, set in AM, are valid. */
	it("Checking validation for leaving date not happening before starting time", () => {
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('03/01/2020');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('10:00');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('09:00');
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();
		
		/* Should result in an error. */
		const result = $('span*=ERROR!');
		expect(result).toExist();
		addLabel('Date Validations Test #1');
		addIssue('Check return message.');
	});

	/* This test checks that the timestamps are valid, with the starting time being set in PM
	and the leaving time set in AM within the same date.*/
	it("Checking validation for leaving date not happening before starting date", () => {
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('1/6/2021');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('12:59');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('1/5/2021');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('12:50');
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		/* Should result in an error. */
		const result = $$('.SubHead');
		expect(result[1]).toHaveTextContaining('YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME');
		addLabel('Date Validations Test #2');	
	});

	it("Testing that radial buttons are working properly." () => {
		
	});
});
