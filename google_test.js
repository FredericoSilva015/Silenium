"use strict"

//importing of By/Builder contructor, and until method 
const {Builder, By, Key, until} = require('selenium-webdriver');

// building firefox instance of the browser(starts the browser)
let driver = new  Builder()
	.forBrowser('firefox') 
	.build();

//each "then" represent a single action in the webpage
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

// var webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;

// var driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();

// driver.get('http://www.google.com');

// driver.findElement(By.name('q')).sendKeys('webdriver');

// driver.sleep(1000)
// 	.then(function(){driver.findElement(By.name('q'))
// 		.sendKeys(webdriver.Key.ENTER);
// });

// driver.findElement(By.name('btnK')).click();

// driver.sleep(2000).then(function() {
//   driver.getTitle().then(function(title) {
//     if(title === 'webdriver - Google Search') {
//       console.log('Test passed');
//     } else {
//       console.log('Test failed');
//     }
//   });
// });

// driver.quit();

// driver.findElement(By.name('q')).sendKeys('webdriver');

// driver.sleep(1000)
//     .then(() => driver.findElement(By.name('q')).sendKeys(webdriver.key.TAB));

// driver.findElement(By.name('btnK')).click();

// driver.sleep(2000)
//     .then(() => driver.getTitle()
//         .then((title) => (title === 'webdriver - Google Search') ? 
//             console.log('Test passed') : console.log('Test failed'))
//     );

// driver.quit();