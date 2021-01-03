/* 
	Simple test to perform with valid values on items.
*/
describe("Test 1", () => {
	it("Testing valid values.", () => {
		browser.url("/parkcalc");
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.selectByIndex(0);
		const start_date = $('#StartingDate');
		const start_time = $('#StartingTime');
		const leaving_date = $('#LeavingDate');
		const leaving_time = $('#LeavingTime');
		const radial_start_time = $('#StartingTimeAMPM');
		const radial_leaving_time = $('#LeavingTimeAMPM');
		browser.positionClick(browser.moveTo('#Submit', 71.58, 21));
	})
});