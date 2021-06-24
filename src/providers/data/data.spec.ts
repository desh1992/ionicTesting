import { DataProvider } from './data';
import { } from 'jasmine'

describe('DataProvider', () => {
	let dataProvider: DataProvider;
	let myItems: any;

	beforeEach(() => {
		dataProvider = new DataProvider();
		myItems = dataProvider.getItems();
	})

	it('should return an array', () => {
		expect(Array.isArray(myItems)).toBeTruthy();
	})
})