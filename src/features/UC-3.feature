Feature: (UC-3) Test Login form with credentials by passing valid Username & Password 

Scenario Outline: Successful login with valid credentials
  Given I am on the login page
  When I enter "<username>" and "<password>"
  And I click the "Login" button for login
  Then I should see the dashboard title "Swag Labs"

  Examples:
    | username      | password    |
    | standard_user | {TEST_PWD}  |
    | problem_user  | {TEST_PWD}  |