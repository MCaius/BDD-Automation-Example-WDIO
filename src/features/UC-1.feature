Feature: (UC-1) Test Login form with empty credentials 

Scenario: Attempt login with empty credentials
  Given I am on the login page
  When I enter "<username>" and "<password>"
  And I clear the fields:
    | Username |
    | Password |
  And I click the "Login" button for login
  Then I should see the error message "Username is required"

  Examples:
    | username          | password          |
    | AnyUserUC1        | testt             |
    | USRtestUC1        | PassTest          |