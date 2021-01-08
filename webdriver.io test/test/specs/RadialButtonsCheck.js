const { addLabel } = require('@wdio/allure-reporter').default;
const { addIssue } = require('@wdio/allure-reporter').default;

before(() => {
	/* Initilialising browser link and reloading before each test is performed.*/
	browser.url("/parkcalc");
});

describe("Testing behaviours for radial buttons.", () => {
	it("Testing that radial buttons are working properly.", () => {
		const starting_radials = $$('#StartingTimeAMPM');
		
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(3);
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
		leaving_time.setValue('12:59');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_radials = $$('#LeavingTimeAMPM');
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		/* Should result in something like $ 2.00 (0 Days, 2 Hours, 59 minutes) */
		const result = $('span*=$ 2.00');
		addIssue('Check the Days, Hours, and Minutes stamp on the screenshot attached.');
		addLabel('Date Validations Test #3');
	});

	it ("Testing time values greater than 12:59 with PM radial selected", () => {
		
	});
});