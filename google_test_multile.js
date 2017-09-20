"use strict"

//importing of By/Builder contructor, and until method 
const {Builder, By, Key, until} = require('selenium-webdriver');

//building each instance of the browser
let driverFf = new  Builder()
	.forBrowser('firefox') 
	.build();

let driverCh = new  Builder()
	.forBrowser('chrome') 
	.build();

//starting the script
simpleSearch(driverFf);
simpleSearch(driverCh);

//function script, each "then" represents a browser interaction
function simpleSearch(driver){
	driver.get('http://www.google.com')
	.then(_ => driver.findElement(By.name('q')).sendKeys('webdriver'))
	.then(_ => driver.wait(driver.findElement(By.name('q'))
		.sendKeys(Key.TAB)),1000)
	.then(_ => driver.findElement(By.name('btnK')).click())
	// .then(_ => driver.wait(
	// 		until.titleIs('webdriver - Google Search')),1000)
	.then(_ => driver.sleep(2000)
		.then(_ => driver.getTitle()
			.then((title) => (title === 'webdriver - Google Search') ? 
        		console.log('Test passed') : console.log('Test failed'))))
	.then(_ => driver.quit())
;
};
