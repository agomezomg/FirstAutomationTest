/* 
	Simple test to perform with valid values on items.
*/
describe("Test 1", () => {
	it("Testing valid values.", () => {
		browser.url("/parkcalc");
		const drop_down_menu = $('#ParkingLot');
		drop_down_menu.click();
		console.log(drop_down_menu.getValue()); // returns "someValue0"
		drop_down_menu.selectByIndex(4);
		console.log(drop_down_menu.getValue());
		
	})
});