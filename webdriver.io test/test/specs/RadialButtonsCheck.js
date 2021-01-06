import allureReporter from '@wdio/allure-reporter';

/*

Since both time fields can be manually inputed by the user, and they are in a twelve-four hour format,
we want to make sure that the AM and PM radial buttons don't create unusual values if user input surpasses
12:59.

*/

/* Initialising browser link.*/
before(() => {
	browser.url('/parkcalc');
});

describe('Testing Time Fields for possible bugs', () => {
    it('Checking for starting time field bugs', () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(2);
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('00/00/0000');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('13:51');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates a constant for Leaving Time field and sets value to a valid time. */
		const leaving_time = $('#LeavingTime');
		leaving_time.setValue('15:51');
		/* Creates an elem array for starting time Radial Buttons and toggles values according to position. */
		const radial_STime = $$('[name="StartingTimeAMPM"]');
		radial_STime[1].click();
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();
        allureReporter.addFeature('Time Fields Bugs');
    });

	it('Checking for starting time field bugs', () => {
		/* Creates a constant for dropdown menu and retrieves available, clickable values. */
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(2);
		/* Creates a constant for Starting Date field and sets value to a valid date. */
		const start_date = $('#StartingDate');
		start_date.setValue('00/00/0000');
		/* Creates a constant for Starting Time field and sets value to a valid time. */		
		const start_time = $('#StartingTime');
		start_time.setValue('13:51');
		/* Creates a constant for Leaving Date field and sets value to a valid date. */
		const leaving_date = $('#LeavingDate');
		leaving_date.setValue('03/01/2020');
		/* Creates an elem array for leaving time Radial Buttons and toggles values according to position. */
		const radial_STime = $$('[name="LeavingTimeAMPM"]');
		radial_STime[1].click();
		/* Creates a constant for Submit Button and performs a send. */
		const submitButton = $('[name="Submit"]');
		submitButton.click();
        allureReporter.addFeature('Time Fields Bugs');
    });
});