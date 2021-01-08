const { addLabel, addIssue } = require('@wdio/allure-reporter').default;

before(() => {
	/* Initilialising browser link and reloading before each test is performed.*/
	browser.url("/parkcalc");
});

describe("Testing behaviours for radial buttons.", () => {
	it("Testing for a valid PM value.", () => {
		const starting_radials = $$('#StartingTimeAMPM');
		
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
		/* Creates a constant for Leaving Time radial buttons and selects PM. */
		const leaving_radials = $$('[name="LeavingTimeAMPM"]');
		leaving_radials[1].click();
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		/* Should result in something like $ 18.00 (0 Days, 9 Hours, 0 minutes) */
		const result = $('span*=$ 18.00');
		addLabel('AM/PM Validations Test #1');
	});

	it ("Testing time values greater than 12:59 with PM radial selected", () => {		
		const starting_radials = $$('#StartingTimeAMPM');
		
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
		leaving_time.setValue('19:00');
		/* Creates a constant for Leaving Time radial buttons and selects PM. */
		const leaving_radials = $$('[name="LeavingTimeAMPM"]');
		leaving_radials[1].click();
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		addLabel('AM/PM Validations Test #2');
		addIssue('Time value gets changed and surpasses 24 hours.');
	});
});