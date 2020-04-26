import {Given, When, Then} from 'cucumber';

Given(/^User is on google search page$/, () => {
    browser.url("http://www.google.com");    
})