import allureReporter from '@wdio/allure-reporter';


/* 
	Simple test to perform with valid values on items.
*/
beforeEach(() => {
	/* Initilialising browser link and reloading before each test is performed.*/
	browser.url("/parkcalc");
});

/*

We want to test basic funcionalities with this. If all correct values are entered, then the application should
print the total for parking according to the selected values.

With this testing script, we are attempting to ascertain that basic validations and functionality are working properly.
Basic functionality is the printing of the total without problem. Basic validations are that all fields (especially
text fields) are entered correctly.

*/

describe("Testing Basics", () => {
	it("Testing functionality with valid values.", () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(2);
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('03/01/2020');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('10:51');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('12:59');
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();


		/* Should result in something like $12 (0 Days, 0 Hours, 59 minutes) */
		const result = $('*=59 Minutes');
		console.log(result.getText());
		allureReporter.addSeverity('Critical');
	});

	it("Testing format compliance with starting date text field", () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(0);
		/* Creates a constant for Starting Date field and sets value to an invalid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('03/012020');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('10:51');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('12:59');
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		/* Should result in ERROR! ENTER A CORRECTLY FORMATTED DATE */
		const result = $('=ERROR! ENTER A CORRECTLY FORMATTED DATE');
		console.log(result.getText());
		allureReporter.addSeverity('Critical');
	});

	it("Testing format compliance with starting time text field", () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(0);
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('03/012020');
		/* Creates a constant for Starting Time field and sets value to an invalid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('10?');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('15:51');
		/* Creates an elem array for Radial Buttons and toggles values according to position. */
		const radial_STime = $$('[name="StartingTimeAMPM"]');
		radial_STime[1].click();
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		/* Should result in ERROR! ENTER A CORRECTLY FORMATTED DATE */
		const result = $('=ERROR! ENTER A CORRECTLY FORMATTED DATE');
		console.log(result.getText());
		allureReporter.addSeverity('Critical');
	});

	it("Testing format compliance with leaving date text field", () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(0);
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('03/012020');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('10:00');
		/* Creates a constant for Leaving Date field and sets value to an invalid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/2020');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('15:51');
		/* Creates an elem array for Radial Buttons and toggles values according to position. */
		const radial_STime = $$('[name="StartingTimeAMPM"]');
		radial_STime[1].click();
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		/* Should result in ERROR */
		const result = $('*=ERROR');
		console.log(result.getText());
		allureReporter.addSeverity('Critical');
	});

	it("Testing format compliance with leaving time text field", () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(0);
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('03/012020');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('10:00');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates a constant for Leaving Time field and sets value to an invalid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('1551');
		/* Creates an elem array for Radial Buttons and toggles values according to position. */
		const radial_STime = $$('[name="StartingTimeAMPM"]');
		radial_STime[1].click();
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		/* Should result in ERROR */
		const result = $('*=ERROR');
		console.log(result.getText());
		allureReporter.addSeverity('Critical');
	});
});