<?php

use Behat\Behat\Context\ClosuredContextInterface,
    Behat\Behat\Context\TranslatedContextInterface,
    Behat\Behat\Context\BehatContext,
    Behat\Behat\Exception\PendingException;
use Behat\Gherkin\Node\PyStringNode,
    Behat\Gherkin\Node\TableNode;

use Behat\MinkExtension\Context\MinkContext;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends MinkContext
{
    private $page;

    private $radioClrs = [
        "white"        => "clr0",
        "yellow"       => "clr1",
        "tangerine"    => "clr2",
        "orange"       => "clr3",
        "red"          => "clr4",
        "bright-blue"  => "clr5",
        "dark-blue"    => "clr6",
        "purple"       => "clr7",
        "light-grey"   => "clr8",
        "dark-grey"    => "clr9",
        "black"        => "clr10",
        "flo-yellow"   => "clr11",
        "flo-green"    => "clr12",
        "green"        => "clr13",
    ];

    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct()
    {
    }

    /** @BeforeScenario */
    public function reset()
    {
        $this->page = $this->getSession()->getPage();
    }

    /**
     * @Given I choose color :clr
     */
    public function iChooseColor($clr)
    {
        $clrId = $this->radioClrs[$clr];
        if ($clrId === null) {
            throw new ElementNotFoundException($this->getSession(), 'Color ', 'id|name|label|value', $clr + " not found");
        }

        $radioButton = $this->page->findField($clrId);
        if (null === $radioButton) {
            throw new ElementNotFoundException($this->getSession(), 'radio id ', 'id|name|label|value', $clrId + " not found for color " + $clr);
        }

        $xpath = $radioButton->getXpath();
        $this->getSession()->getDriver()->click($xpath);
    }

    /**
     * @When I click panel :panel
     */
    public function iClickPanel($panel)
    {
        $panel = $this->page->findById($panel);
        if (null === $panel) {
            throw new Exception("No html element found for the selector ('$panel')");
        }

        $panel->click();
    }

    /**
     * @Then panel :panel has color :clr
     */
    public function panelHasColor($panel, $clr)
    {
        $elem = $this->page->findById($panel);
        if (null === $elem) {
            throw new Exception("No html element found for the selector ('$elem')");
        }

        if (!$elem->hasClass($clr)) {
            throw new Exception("Panel $panel does not have the color $clr");
        }
    }

    /**
     * @Then panel :panel does not have color :clr
     */
    public function panelDoesNotHaveColor($panel, $clr)
    {
        $elem = $this->page->findById($panel);
        if (null === $elem) {
            throw new Exception("No html element found for the selector ('$elem')");
        }

        if ($elem->hasClass($clr)) {
            throw new Exception("Panel $panel has the color $clr");
        }
    }

    /**
     * @When I select the radio :radioName button :radioValue
     */
    public function iSelectTheRadioButton($radioName, $radioValue)
    {
        $fieldId = $radioName . '-' . $radioValue;
        $radioButton = $this->page->findField($fieldId);
        if (null === $radioButton) {
            throw new Exception("Field id $fieldId not found");
        }

        $xpath = $radioButton->getXpath();
        $this->getSession()->getDriver()->click($xpath);
    }

    /**
     * @Given I select :sel option :opt
     */
    public function iSelectOption($sel, $opt)
    {
        $dropdown = $this->page->findField($sel);
        if (null === $dropdown) {
            throw new Exception("Select $dropdown has not been found");
        }

        $dropdown->selectOption($opt);
    }

    /**
     * @Then the id :id should be :vis
     */
    public function theIdShouldBe($id, $vis)
    {
        $elem = $this->page->findById($id);
        if (null === $elem) {
            throw new Exception("The element $elem has not been found");
        }

        if ($vis === "visible") {
            if (!$elem->isVisible()) {
                throw new Exception("The element $elem is not visible");
            }
        }

        if ($vis === "invisible") {
            if ($elem->isVisible()) {
                throw new Exception("The element $elem is visible");
            }
        }
    }

    /**
     * @Given the display :displayId should be :color
     */
    public function theDisplayShouldBe($displayId, $color)
    {
        $elem = $this->page->findById($displayId);
        if (null === $elem) {
            throw new Exception("The element $elem has not been found");
        }

        if ($elem->getText() !== $color) {
            throw new Exception("The element $displayId does not have the color $color");
        }
    }
}
