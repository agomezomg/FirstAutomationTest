/* 
	Simple test to perform with valid values on items.
*/
describe("Test 1", () => {
	it("Testing valid values.", () => {
		browser.url("/parkcalc");
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(0);
		const start_date = $('#StartingDate');
		start_date.setValue('03/01/2020');
		const start_time = $('#StartingTime');
		start_time.setValue('13:51');
		const leaving_date = $('#LeavingDate');
		start_date.setValue('03/01/2020');
		const leaving_time = $('#LeavingTime');
		start_time.setValue('15:51');
		const radial_STime_AM = $('=AM');
		radial_STime_AM.click();
		
		const submitButton = $('[name="Submit"]');
		submitButton.click();
		browser.pause(10000);
		console.log(submitButton.getText());
	})
});