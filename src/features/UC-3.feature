Feature: (UC-3) Test Login form with credentials by passing valid Username & Password 

Scenario Outline: Successful login with valid credentials
  Given I am on the login page
  When I enter "<username>" and "secret_sauce"
  And I click the "Login" button for login
  And I am logged in and on the dashboard
  Then I should see the dashboard title "Swag Labs"

  Examples:
    | username          |
    | standard_user     |
    | problem_user      |