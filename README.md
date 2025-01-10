
# BDD Automation Example

A comprehensive example of BDD (Behavior-Driven Development) automation testing using WebdriverIO and Cucumber. This project demonstrates automated testing of the SauceDemo website's login functionality, implementing best practices such as the Page Object Model pattern, step definitions, and feature file organization.

## 🚀 Features

- BDD testing approach using Cucumber
- Page Object Model (POM) implementation
- Cross-browser testing (Chrome and Firefox)
- Environment variables handling for sensitive data
- Screenshot capture on test failure
- Parallel test execution
- Comprehensive test scenarios:
  - Empty credentials validation
  - Partial credentials validation
  - Successful login verification

## 🛠️ Tech Stack

- WebdriverIO
- Cucumber
- JavaScript
- Chrome and Firefox drivers
- Node.js

## 📋 Prerequisites

- Node.js (v14 or higher)
- Chrome and Firefox browsers installed
- Git

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/MCaius/BDD-Automation-Example-WDIO.git
cd bdd-automation-example-wdio
```

2. Install dependencies:

```bash
npm install
```

3. Rename the **.env.example** file to **.env**
  
4. Run the tests:

```bash
npm run wdio
```         
## Valid passwords
- Add the valid passowrds in the .env file
- Check the .env.example for reference
- .env.example contains the valid passwords for the test (not a security risk for this website)


## 🧪 Test Scenarios

1. **UC-1**: Validates login form with empty credentials
2. **UC-2**: Tests login attempt with username only
3. **UC-3**: Verifies successful login with valid credentials

## 📝 Test Reports

- Console-based spec reporter
- Screenshots captured automatically on test failures
- Logs stored in the `logs` directory


## 👤 Author
MCaius

## 🙏 Acknowledgments

- [SauceDemo](https://www.saucedemo.com/) for providing the test website
- WebdriverIO team for the excellent documentation and framework

## 📝 Task description

Launch URL: https://www.saucedemo.com/

UC-1 Test Login form with empty credentials:
- Type any credentials into "Username" and "Password" fields.
- Clear the inputs. 
- Hit the "Login" button.
- Check the error messages: "Username is required".


UC-2 Test Login form with credentials by passing Username:
- Type any credentials in username.
- Enter password.
- Clear the "Password" input.
- Hit the "Login" button.
- Check the error messages: "Password is required".


UC-3 Test Login form with credentials by passing Username & Password:
- Type credentials in username which are under Accepted username are sections.
- Enter password as secret sauce.
- Click on Login and validate the title “Swag Labs” in the dashboard.

Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. 
Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.


To perform the task use the various of additional options:
- Test Automation tool: WebDriverIO;
- Browsers: 1) Chrome; 2) Firefox;
- Locators: CSS;
- Patterns: Page Object;
- Assertions: Use from the selected framework;
- [Optional] Loggers: Use from the selected framework.

