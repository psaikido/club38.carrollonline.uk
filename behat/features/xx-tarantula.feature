Feature: XX Tarantula
  In order to use the kite colorizer for the XX Tarantula model
  As anyone
  I need to be able to design a kite

    Scenario: Choose a color and change a panel with it
        Given I am on "/"
        And I follow "XX Tarantula"
        And I choose color "red"
        And I click panel "L1"
        Then panel "L1" has color "red"


    Scenario: Check that the 'mirror' option works
        Given I am on "/"
        And I follow "XX Tarantula"
        And I select the radio "copy-mode" button "mirror" 
        And I choose color "purple"
        And I click panel "L2"
        Then panel "R2" has color "purple"


    Scenario: Check that the 'whole wing' option works
        Given I am on "/"
        And I follow "XX Tarantula"
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


    Scenario: Check the 'show labels' checkbox is working
        Given I am on "/"
        And I follow "XX Tarantula"
        Then the id "tspan6768" should be "visible"
        When I uncheck "show labels"
        Then the id "tspan6768" should be "invisible"


    Scenario: Check the 'reverse logo' checkbox is working
        Given I am on "/"
        And I follow "XX Tarantula"
        Then panel "center-panel" does not have color "reverse"
        When I check "reverse logo"
        Then panel "center-panel" has color "reverse"


    Scenario: Check that the first preset works
        Given I am on "/"
        And I follow "XX Tarantula"
        And I select "presets" option "blues"
        Then panel "L1" has color "light-grey"
        Then panel "R1" has color "light-grey"
        Then panel "L2" has color "white"
        Then panel "R2" has color "white"
        Then panel "L3" has color "dark-blue"
        Then panel "R3" has color "dark-blue"
        Then panel "L4" has color "bright-blue"
        Then panel "R4" has color "bright-blue"
        Then panel "L5" has color "light-grey"
        Then panel "R5" has color "light-grey"
        Then panel "L6" has color "bright-blue"
        Then panel "R6" has color "bright-blue"
        Then panel "L7" has color "light-grey"
        Then panel "R7" has color "light-grey"
        Then panel "L8" has color "dark-blue"
        Then panel "R8" has color "dark-blue"
        Then panel "L9" has color "bright-blue"
        Then panel "R9" has color "bright-blue"

    Scenario: Check that the second preset works
        Given I am on "/"
        And I follow "XX Tarantula"
        And I select "presets" option "hot"
        Then panel "L1" has color "white"
        Then panel "R1" has color "white"
        Then panel "L2" has color "flo-yellow"
        Then panel "R2" has color "flo-yellow"
        Then panel "L3" has color "red"
        Then panel "R3" has color "red"
        Then panel "L4" has color "red"
        Then panel "R4" has color "red"
        Then panel "L5" has color "yellow"
        Then panel "R5" has color "yellow"
        Then panel "L6" has color "orange"
        Then panel "R6" has color "orange"
        Then panel "L7" has color "flo-yellow"
        Then panel "R7" has color "flo-yellow"
        Then panel "L8" has color "orange"
        Then panel "R8" has color "orange"
        Then panel "L9" has color "white"
        Then panel "R9" has color "white"


    Scenario: Check that the third preset works
        Given I am on "/"
        And I follow "XX Tarantula"
        And I select "presets" option "purplelimeblack"
        Then panel "L1" has color "purple"
        Then panel "R1" has color "purple"
        Then panel "L2" has color "dark-grey"
        Then panel "R2" has color "dark-grey"
        Then panel "L3" has color "flo-yellow"
        Then panel "R3" has color "flo-yellow"
        Then panel "L4" has color "purple"
        Then panel "R4" has color "purple"
        Then panel "L5" has color "dark-grey"
        Then panel "R5" has color "dark-grey"
        Then panel "L6" has color "flo-yellow"
        Then panel "R6" has color "flo-yellow"
        Then panel "L7" has color "flo-yellow"
        Then panel "R7" has color "flo-yellow"
        Then panel "L8" has color "dark-grey"
        Then panel "R8" has color "dark-grey"
        Then panel "L9" has color "purple"
        Then panel "R9" has color "purple"


    Scenario: Check that the fourth preset works
        Given I am on "/"
        And I follow "XX Tarantula"
        And I select "presets" option "hot"


    Scenario: Check that the display table is working
        Given I am on "/"
        And I follow "XX Tarantula"
        And I select "presets" option "purplelimeblack"
        Then the display "display-L1" should be "purple"
        Then the display "display-R1" should be "purple"
        Then the display "display-L2" should be "dark-grey"
        Then the display "display-R2" should be "dark-grey"
        Then the display "display-L3" should be "flo-yellow"
        Then the display "display-R3" should be "flo-yellow"
        Then the display "display-L4" should be "purple"
        Then the display "display-R4" should be "purple"
        Then the display "display-L5" should be "dark-grey"
        Then the display "display-R5" should be "dark-grey"
        Then the display "display-L6" should be "flo-yellow"
        Then the display "display-R6" should be "flo-yellow"
        Then the display "display-L7" should be "flo-yellow"
        Then the display "display-R7" should be "flo-yellow"
        Then the display "display-L8" should be "dark-grey"
        Then the display "display-R8" should be "dark-grey"
        Then the display "display-L9" should be "purple"
        Then the display "display-R9" should be "purple"


    Scenario: Check the reset button
        Given I am on "/"
        And I follow "XX Tarantula"
        And I choose color "orange"
        And I click panel "L1"
        Then panel "L1" has color "orange"
        When I press "reset"
        Then panel "L1" does not have color "orange"


    Scenario: Check that clicking "take screenshot" produces an image
        Given I am on "/"
        And I follow "XX Tarantula"
        Then the id "displayCanvas" should be "invisible"
        When I press "take screenshot"
        Then the id "displayCanvas" should be "visible"


    Scenario: Check the 'load design' button does not have a design to load
        Given I am on "/"
        And I follow "XX Tarantula"
        And I press "load design"
        Then the popup should say "Sorry, no data saved for this model!"
        And I confirm popup


    Scenario: Check the 'save design' doesn't save an empty design
        Given I am on "/"
        And I follow "XX Tarantula"
        And I press "save design"
        Then the popup should say:
        """
        No design to save!
        """
        And I confirm popup


    Scenario: Check the 'save design' button saves
        Given I am on "/"
        And I follow "XX Tarantula"
        And I select "presets" option "hot"
        And I wait for "1" seconds
        And I choose color "dark-blue"
        And I click panel "R9"
        And I press "save design"
        Then the popup should say:
        """
        This design is now saved for later.
        Retrieve it by clicking 'load design'
        """
        And I confirm popup

    Scenario: Check the 'save design' button works
        Given I am on "/"
        And I follow "XX Tarantula"
        And I select "presets" option "purplelimeblack"
        And I press "save design"
        And I confirm popup
        And I select "presets" option "purplelimeblack"
        And I press "load design"
        Then panel "L1" has color "purple"
        Then panel "R1" has color "purple"
        Then panel "L2" has color "dark-grey"
        Then panel "R2" has color "dark-grey"
        Then panel "L3" has color "flo-yellow"
        Then panel "R3" has color "flo-yellow"
        Then panel "L4" has color "purple"
        Then panel "R4" has color "purple"
        Then panel "L5" has color "dark-grey"
        Then panel "R5" has color "dark-grey"
        Then panel "L6" has color "flo-yellow"
        Then panel "R6" has color "flo-yellow"
        Then panel "L7" has color "flo-yellow"
        Then panel "R7" has color "flo-yellow"
        Then panel "L8" has color "dark-grey"
        Then panel "R8" has color "dark-grey"
        Then panel "L9" has color "purple"
        Then panel "R9" has color "purple"