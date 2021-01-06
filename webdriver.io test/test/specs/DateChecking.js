import allureReporter from '@wdio/allure-reporter';

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
	it("Checking validation for leaving date not happening before starting date", () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(3);
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('03/01/2020');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('12:59');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('12:50');
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();
	});

	/* This test checks that the timestamps are valid, with the starting time being set in PM
	and the leaving time set in AM within the same date.*/
	it("Checking validation for leaving date not happening before starting date", () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(3);
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('03/01/2020');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('12:59');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('12:50');
		/* Creates an elem array for Radial Buttons and toggles values according to position. */
		const radial_STime = $$('[name="StartingTimeAMPM"]');
		radial_STime[1].click();
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		
	});
});