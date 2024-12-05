Task description
Launch URL: https://www.saucedemo.com/

UC-1 Test Login form with empty credentials:
Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".


UC-2 Test Login form with credentials by passing Username:
Type any credentials in username.
Enter password.
Clear the "Password" input.
Hit the "Login" button.
Check the error messages: "Password is required".


UC-3 Test Login form with credentials by passing Username & Password:
Type credentials in username which are under Accepted username are sections.
Enter password as secret sauce.
Click on Login and validate the title “Swag Labs” in the dashboard.

Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.

Please, add task description as README.md into your solution!


To perform the task use the various of additional options:
Test Automation tool: WebDriverIO;
Browsers: 1) Chrome; 2) Firefox;
Locators: CSS;
Patterns: Page Object;
Assertions: Use from the selected framework;
[Optional] Loggers: Use from the selected framework.

## Valid passwords
- Add the valid passowrds in the .env file
- Check the .env.example for referance
- .env.example contains the valid password for the test (not a security risk for this website)

## Requirements
- Node.js: 20.10.0
- npm: v10.8.0
