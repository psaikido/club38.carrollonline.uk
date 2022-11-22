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
        And I choose color "red"
        And I click panel "L1"
        Then panel "L1" has color "red"

    Scenario: Check that the 'mirror' option works
        Given I am on "/"
        And I follow "RX"
        And I select the radio "copy-mode" button "mirror" 
        And I choose color "purple"
        And I click panel "L2"
        Then panel "R2" has color "purple"

    Scenario: Check that the 'whole wing' option works
        Given I am on "/"
        And I follow "RX"
        And I select the radio "copy-mode" button "whole-wing" 
        And I choose color "purple"
        And I click panel "L1"
        Then panel "L2" has color "purple"
        Then panel "L4" has color "purple"
        Then panel "L5" has color "purple"
        Then panel "L6" has color "purple"
        Then panel "L7" has color "purple"
        Then panel "L8" has color "purple"
        Then panel "L9" has color "purple"
        Then panel "L10" has color "purple"
        Then panel "L11" has color "purple"
