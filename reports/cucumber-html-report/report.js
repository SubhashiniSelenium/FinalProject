$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/swag.feature");
formatter.feature({
  "line": 1,
  "name": "Swag labs",
  "description": "",
  "id": "swag-labs",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "  Login to Swag labs with valid credentials",
  "id": "swag-labs;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TS_01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user opens Swaglabs homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user enters valid username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Assert if the product_label is displayed",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 13,
  "name": "",
  "description": "Login to Swag labs with invalid credentials",
  "id": "swag-labs;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@TS_02"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user opens swaglabs homepage",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters invalid  username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Assert if the error message is displayed",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "Sorting in the order of A-Z",
  "id": "swag-labs;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@TS_03"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "launching the application",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "click on Name(A to Z)",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "compare the first two item names",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "assert if the two names are in alpahbetical order",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 31,
  "name": "",
  "description": "Sorting in the order of Z-A",
  "id": "swag-labs;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TS_04"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Launching the application",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "click on Name(Z to A)",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "compare the first two item names",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Assert if the two names are in alpahbetical order of Z-A",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "Sorting in the order of low to high price",
  "id": "swag-labs;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@TS_05"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "LAunching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "LAunching the application",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "click on Name(price low to high)",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "compare the first two item prices",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Assert if the two item prices are in ascending order",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 49,
  "name": "",
  "description": "Sorting in the order of high to low price",
  "id": "swag-labs;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@TS_06"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "LAUnching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "LAUnching the application",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "click on Name(price high to low)",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "compare the first two item prices",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Assert if the two item prices are in descending order",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 58,
  "name": "Adding to cart",
  "description": "",
  "id": "swag-labs;adding-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 57,
      "name": "@TS_07"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "LAUNching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "LAUNching the application",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "cLick on ADD TO CART of selected item",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Assert if the item is added in the cart",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 65,
  "name": "Remove from cart",
  "description": "",
  "id": "swag-labs;remove-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@TS_08"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "LAUNChing the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "LAUNChing the application",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "cLick REMOVE of selected item which is carted",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Assert if the item is removed from the cart",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 72,
  "name": "Logout of Application",
  "description": "",
  "id": "swag-labs;logout-of-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@TS_09"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "LAUNCHing the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "LAUNCHing the application",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "Click on Menu bar",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Click on Logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Assert if the application is showing the login page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 80,
  "name": "Navigating to Saucelabs",
  "description": "",
  "id": "swag-labs;navigating-to-saucelabs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@TS_10"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "LAUNCHIng the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "LAUNCHIng the application",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "CLick on menu bar",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "Click on About",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "Assert if the page is navigating to saucelabs",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 88,
  "name": "Searching Invalid information",
  "description": "",
  "id": "swag-labs;searching-invalid-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 87,
      "name": "@TS_11"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "LAUNCHINg the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "LAUNCHINg the application",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "CLIck on search Symbol",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "Enter the invalid info and click Enter from keyboard",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "Assert True if it is Displaying No Results found",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 96,
  "name": "Searching valid information",
  "description": "",
  "id": "swag-labs;searching-valid-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 95,
      "name": "@TS_12"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "LAUNCHING the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "LAUNCHING the application",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "click on search Symbol",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Enter the valid info and click Enter from keyboard",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "Assert True if it is not  Displaying No Results found",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 104,
  "name": "Accepting valid mail ID format  to join",
  "description": "",
  "id": "swag-labs;accepting-valid-mail-id-format--to-join",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 103,
      "name": "@TS_13"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "LAUNCHING The browser",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "LAUNCHING The application",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "enter the valid email format  and click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "Assert if it is displaying Thank you message",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 111,
  "name": "Accepting Invalid mail format ID to join",
  "description": "",
  "id": "swag-labs;accepting-invalid-mail-format-id-to-join",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 110,
      "name": "@TS_14"
    }
  ]
});
formatter.step({
  "line": 112,
  "name": "LAUNCHING THe browser",
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "LAUNCHING THe application",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "enter the Invalid email format  and click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "Assert if it is displaying an error message",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 118,
  "name": "Switching to new window",
  "description": "",
  "id": "swag-labs;switching-to-new-window",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 117,
      "name": "@TS_15"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "LAUNCHING THE browser",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "LAUNCHING THE Application",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "click on resources",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "click on selenium",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "Assert if it is Switching to the new tab",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 126,
  "name": "Displaying the copyright",
  "description": "",
  "id": "swag-labs;displaying-the-copyright",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 125,
      "name": "@TS_16"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "LAUNCHING THE Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "LAUNCHING THE APPlication",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "Assert if it is displaying the copyright in the footer section",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});