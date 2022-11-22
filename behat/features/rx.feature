Feature: RX
  In order to use the kite colorizer for the RX model
  As anyone
  I need to be able to design a kite

    Scenario: Check the pattern-index page
        Given I am on "/"
        Then I should see "xjanm"
        And I should see "RX"
        And I should see "RX Spider"
        And I should see "RX Super Spider"
        And I should not see "lolly"

    Scenario: Check the RX page
        Given I am on "/"
        And I follow "RX"
        Then I should not see "xjanm"
        And I should see "Revolution Reflex RX"
        And I should see "lollyh@rev-usa.com"

    Scenario: Choose a color and change a panel with it
        Given I am on "/"
        And I follow "RX"
        Then I should see "Revolution Reflex RX"
        When I choose color "red"
        And I click panel "L1"
        Then panel "L1" has color "red"
