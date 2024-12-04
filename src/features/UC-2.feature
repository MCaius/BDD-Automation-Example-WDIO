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
    | any_userUC2       | any_passwordUC2   |
    | MyUserUC2         | MyPasswordUC2     |