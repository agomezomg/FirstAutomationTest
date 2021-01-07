//import allureReporter from '@wdio/allure-reporter';
const { addLabel } = require('@wdio/allure-reporter').default;
const { addSeverity } = require('@wdio/allure-reporter').default;
const { addIssue } = require('@wdio/allure-reporter').default;
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
	it("Testing functionality with default values, changing date only.", () => {
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('0/0/0');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('0/0/0');
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();


		/* Should result in something like $12 (0 Days, 0 Hours, 59 minutes) */
		const result = $('span*=$ 12.00');
		expect(result).toExist();
		addIssue('Allows dates that have long since passed...like 0/0/0');
		addLabel('Basic Test #1');
	});

	it("Testing functionality with valid values with combobox set to Short-Term Parking.", () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(1);
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('03/01/2020');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('12:00');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('12:59');
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		/* Should result in something like $ 2.00 (0 Days, 0 Hours, 59 minutes) */
		const result = $('span*=$ 2.00');
		expect(result).toExist();
		addLabel('Basic Test #2');
	});

	it("Testing functionality with valid values with combobox set to Economy Parking.", () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(2);
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('03/01/2020');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('12:00');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('12:59');
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		/* Should result in something like $ 2.00 (0 Days, 0 Hours, 59 minutes) */
		const result = $('span*=$ 2.00');
		expect(result).toExist();
		addLabel('Basic Test #3');
	});

	it("Testing functionality with valid values with combobox set to Economy Parking.", () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(2);
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('03/01/2020');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('12:00');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('12:59');
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();

		/* Should result in something like $ 2.00 (0 Days, 0 Hours, 59 minutes) */
		const result = $('span*=$ 2.00');
		expect(result).toExist();
		addLabel('Basic Test #2');
	});
});