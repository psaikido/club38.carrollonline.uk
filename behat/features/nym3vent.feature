Feature: NYM 3 Vent
  In order to use the kite colorizer for the NYM 3 Vent model
  As anyone
  I need to be able to design a kite

    Scenario: Choose a color and change a panel with it
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I choose color "red"
        When I uncheck "show labels"
        And I click panel "L1"
        Then panel "L1" has color "red"


    Scenario: Check that the 'mirror' option works
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I select the radio "copy-mode" button "mirror" 
        And I choose color "purple"
        When I uncheck "show labels"
        And I click panel "L2"
        Then panel "R2" has color "purple"


    Scenario: Check that the 'whole wing' option works
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I select the radio "copy-mode" button "whole-wing" 
        And I choose color "purple"
        When I uncheck "show labels"
        And I click panel "L1"
        Then panel "L2" has color "purple"
        Then panel "L3" has color "purple"
        Then panel "L4" has color "purple"


    Scenario: Check the 'show labels' checkbox is working
        Given I am on "/"
        And I follow "NYM 3 Vent"
        Then the id "tspan13504" should be "visible"
        When I uncheck "show labels"
        Then the id "tspan13504" should be "invisible"


    Scenario: Check that the first preset works
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I select "presets" option "blues"
        Then panel "L1" has color "dark-blue"
        Then panel "R1" has color "dark-blue"
        Then panel "L2" has color "bright-blue"
        Then panel "R2" has color "bright-blue"
        Then panel "L3" has color "dark-blue"
        Then panel "R3" has color "dark-blue"
        Then panel "L4" has color "bright-blue"
        Then panel "R4" has color "bright-blue"
        Then panel "center-panel" has color "bright-blue"

    Scenario: Check that the second preset works
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I select "presets" option "hot"
        Then panel "L1" has color "red"
        Then panel "R1" has color "red"
        Then panel "L2" has color "orange"
        Then panel "R2" has color "orange"
        Then panel "L3" has color "orange"
        Then panel "R3" has color "orange"
        Then panel "L4" has color "yellow"
        Then panel "R4" has color "yellow"
        Then panel "center-panel" has color "yellow"


    Scenario: Check that the third preset works
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I select "presets" option "lime_purple"
        Then panel "L1" has color "purple"
        Then panel "R1" has color "purple"
        Then panel "L2" has color "flo-yellow"
        Then panel "R2" has color "flo-yellow"
        Then panel "L3" has color "purple"
        Then panel "R3" has color "purple"
        Then panel "L4" has color "flo-yellow"
        Then panel "R4" has color "flo-yellow"
        Then panel "center-panel" has color "flo-yellow"


    Scenario: Check that the fourth preset works
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I select "presets" option "red_black"
        Then panel "L1" has color "red"
        Then panel "R1" has color "red"
        Then panel "L2" has color "red"
        Then panel "R2" has color "red"
        Then panel "L3" has color "red"
        Then panel "R3" has color "red"
        Then panel "L4" has color "white"
        Then panel "R4" has color "white"
        Then panel "center-panel" has color "red"


    Scenario: Check that the display table is working
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I select "presets" option "red_black"
        Then the display "display-L1" should be "red"
        Then the display "display-R1" should be "red"
        Then the display "display-L2" should be "red"
        Then the display "display-R2" should be "red"
        Then the display "display-L3" should be "red"
        Then the display "display-R3" should be "red"
        Then the display "display-L4" should be "white"
        Then the display "display-R4" should be "white"
        Then the display "display-center-panel" should be "red"

    Scenario: Check the reset button
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I choose color "orange"
        When I uncheck "show labels"
        And I click panel "L1"
        Then panel "L1" has color "orange"
        When I press "reset"
        Then panel "L1" does not have color "orange"


    Scenario: Check that clicking "take screenshot" produces an image
        Given I am on "/"
        And I follow "NYM 3 Vent"
        Then the id "displayCanvas" should be "invisible"
        When I press "take screenshot"
        Then the id "displayCanvas" should be "visible"


    Scenario: Check the 'load design' button does not have a design to load
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I press "load design"
        Then the popup should say "Sorry, no data saved for this model!"
        And I confirm popup


    Scenario: Check the 'save design' doesn't save an empty design
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I press "save design"
        Then the popup should say:
        """
        No design to save!
        """
        And I confirm popup


    Scenario: Check the 'save design' button saves
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I select "presets" option "hot"
        And I press "save design"
        Then the popup should say:
        """
        This design is now saved for later.
        Retrieve it by clicking 'load design'
        """
        And I confirm popup

    Scenario: Check the 'save design' button works
        Given I am on "/"
        And I follow "NYM 3 Vent"
        And I select "presets" option "red_black"
        And I press "save design"
        And I confirm popup
        And I select "presets" option "red_black"
        And I press "load design"
        Then panel "L1" has color "red"
        Then panel "R1" has color "red"
        Then panel "L2" has color "red"
        Then panel "R2" has color "red"
        Then panel "L3" has color "red"
        Then panel "R3" has color "red"
        Then panel "L4" has color "white"
        Then panel "R4" has color "white"
        Then panel "center-panel" has color "red"
