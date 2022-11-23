Feature: Pattern index
  In order to use the kite colorizer 
  As anyone
  I need to be able to use the index page

    Scenario: Check the pattern-index page
        Given I am on "/"
        Then I should see "xjanm"
        And I should see "RX"
        And I should see "RX Spider"
        And I should see "RX Super Spider"
        And I should not see "lolly@rev-usa.com"

    Scenario: Check the links
        Given I am on "/"
        And I follow "RX"
        Then I should not see "xjanm"
        And I should see "Revolution Reflex RX"
        And I should see "lollyh@rev-usa.com"
        And I move backward one page
        And I follow "RX Spider"
        Then I should see "Revolution Reflex RX Spider"
        And I move backward one page
        And I follow "RX Super Spider"
        Then I should see "Revolution Reflex RX Super Spider"
        And I move backward one page
        And I follow "XX"
        Then I should see "Revolution Reflex XX"
        And I move backward one page
        And I follow "XX Tarantula"
        Then I should see "Revolution Reflex XX Tarantula"
        And I move backward one page
        And I follow "XX Super Tarantula"
        Then I should see "Revolution Reflex XX Super Tarantula"
        And I move backward one page
        And I follow "NYM"
        Then I should see "New York Minute"
        And I move backward one page
        And I follow "NYM"
        Then I should see "New York Minute"
        And I move backward one page
        And I follow "NYM 1 Vent"
        Then I should see "New York Minute 1 Vent"
        And I move backward one page
        And I follow "NYM 2 Vent"
        Then I should see "New York Minute 2 Vent"
        And I move backward one page
        And I follow "NYM 3 Vent"
        Then I should see "New York Minute 3 Vent"

