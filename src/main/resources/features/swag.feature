Feature: Swag labs

@TS_01
Scenario:   Login to Swag labs 
    Given the user launched the chrome browser
    When the user opens Swaglabs homepage
    When the user enters valid username and password
    When click the login button
    Then Assert if the product_label is displayed 
  
@TS_02
 Scenario: Sorting in the order of A-Z
Given Launching the chrome browser
When launching the application
When click on Name A to Z
When compare the first two item names
Then assert if the two names are in alpahbetical order

 @TS_03
 Scenario: Sorting in the order of Z-A
Given launching the chrome browser
When Launching the application
When click on Name Z to A
When compare the first two item names
Then Assert if the two names are in alpahbetical order of Z-A

@TS_04
Scenario: Searching valid information
Given LAUNCHINg the browser
When LAUNCHINg the application
When CLIck on search Symbol
When Enter the invalid info and click Enter from keyboard
Then Assert True if it is not Displaying No Results found

@TS_05
Scenario: Searching Invalid information
Given LAUNCHING the browser
When LAUNCHING the application
When click on search Symbol
When Enter the valid info and click Enter from keyboard
Then Assert True if it is Displaying No Results found

