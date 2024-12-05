Feature: (UC-2) Test Login form with credentials by passing Username 
  
Scenario: Attempt login with only Username
  Given I am on the login page
  When I enter "<username>" and "<password>"
  And I clear the fields:
    | Password |
  And I click the "Login" button for login
  Then I should see the error message "Password is required"

  Examples:
    | username          | password          |
    | standard_user     | any_passwordUC2   |
    | non_validUsr      | MyPasswordUC2     |