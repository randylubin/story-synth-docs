# Extensions

Story Synth extensions add extra functionality to existing formats. They are entirely optional and some are customizable. Included extensions will appear above the main area of play.

To see many of the extensions in action, check out the [sandbox demo](https://storysynth.org/#/Sandbox/1wkNipcFfxrKAfyEIppifGLjjjbkwVJLEwcKmvq3s5zs)

You can add an extension to your game by including a row in your Google Sheet with the proper instructions. The first column should say 'extension' the second should have the name of the extensions (e.g. 'diceRoller') and the third column should include any customized instructions.

::: warning Note
Extensions are currently only enabled for the 'Shuffled' format

Some of these extensions require you to write content in JSON. These extensions may be updated in the near future to become more designer friendly.
:::

Here's a list of all available extensions:

| Name             | Description                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| staticBoxContent | A simple text box that is always visable                                                              |
| playerTurnOrder  | A way of tracking player turns                                                                        |
| plusMinus        | A state tracking system where players can increase or decrease the values of things they are tracking |
| editableList     | A list that players can edit, adding and deleting items                                               |
| diceRoller       | Players can roll dice by typing commands like '2d6'                                                   |
| standardDeck     | A way of drawing from a deck of playing cards                                                         |

## Static Box

This extension adds a box of static text to the top of your game. It might be useful as a rules summary or for a setting description. An alternative approach is to use a modal rather than an extension. Read more about modals under [customizing your game](http://localhost:8080/guide/design.html#_3-customize-the-style-title-and-byline-and-blurb).

### Static Box Example

| First Column | Extension Name   | Example Customization                                                                        |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------- |
| extension    | staticBoxContent | This example text will show up in the static box. You can \<em\>use html\</em\> if you want. |

## Player Turn Order

This extension lets you keep track of player turns. If you're playing in a format that has a "next card" button, hitting that button will automatically advance the player turn. You can also click on a player's name to make it their turn.

The optional row of playerTurnOrderHeader lets you rename the header for this section, playerTurnOrderButtonLabel lets you overwrite the button text. You can also use playerTurnOrderFirstVisible to hide the player turn order extension until after you reach a specific card.

### Player Turn Example

::: warning Note
You must put '{}' in the third column of playerTurnOrder.
:::

| First Column | Extension Name              | Example Customization |
| ------------ | --------------------------- | --------------------- |
| extension    | playerTurnOrder             | {}                    |
| extension    | playerTurnOrderHeader       | Turn Turn Turn        |
| extension    | playerTurnOrderButtonLabel  | Add me                |
| extension    | playerTurnOrderFirstVisible | 8                     |

## Plus Minus

This extension lets players track simple state. You, as designer, create a list of things to be tracked and their initial values. Players can then hit 'plus' or 'minus' buttons to change the value.

You can also set a title for this extension using 'plusMinusTitle'

::: warning Note
Your intial state must be formatted as an array of JSON objects with 'name' and 'value' attributes.
:::

### Plus Minus Example

| First Column | Extension Name | Example Customization                                                                                |
| ------------ | -------------- | ---------------------------------------------------------------------------------------------------- |
| extension    | plusMinusTitle | Ship Resources                                                                                       |
| extension    | plusMinus      | [{"name": "Days of food left", "value": 3},{"name": "Crew", "value": 20},{"name":"Heat", "value":5}] |

## Editable List

This extension creates a list that players can edit by adding or removing items. It might be useful for tracking inventory or characters.

You can also set a title for this extension using 'editableListTitle'

::: warning Note
Items on the initial list should be separated by commas.
:::

### Editable List Example

| First Column | Extension Name    | Example Customization                              |
| ------------ | ----------------- | -------------------------------------------------- |
| extension    | editableListTitle | Inventory                                          |
| extension    | editableList      | Cursed treasure, Magical compass, Letter of marque |

## Dice Roller

This extension lets players roll dice and shares the results across all players. Players can roll by typing the size and number of dice they want, separated by commas and spaces.

You can also set a title for this extension using 'diceRollerTitle'

### Dice Roller Example

| First Column | Extension Name  | Example Customization                                              |
| ------------ | --------------- | ------------------------------------------------------------------ |
| extension    | diceRollerTitle | Dice Roller                                                        |
| extension    | diceRoller      | Placeholder text goes here but will be erased after the first roll |

### Example Player Commands

| Command  | Interpretation                             | Example Result |
| -------- | ------------------------------------------ | -------------- |
| 6        | Rolls a 6-sided die                        | 5              |
| 1000     | Rolls a 1000-sided die                     | 873            |
| 6 6      | Rolls two 6-sided dice                     | 3 6            |
| 6,6      | Rolls two 6-sided dice                     | 3 6            |
| 2d6      | Rolls two 6-sided dice                     | 3 6            |
| 2d6, 1d8 | Rolls two 6-sided dice and one 8-sided die | 5 1 7          |

## Standard Deck

This extension allows players to draw from a standard deck of playing cards. Past draws remain visable until the player reshuffles the deck.

You can also set a title for this extension using 'standardDeckTitle'

::: warning Note
You can include the standard card deck by copying the example below. You can edit the Customization part to remove cards or add jokers.
:::

### Standard Deck Example

| First Column | Extension Name    | Example Customization                                                                                                                                                                                                                                                                                  |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| extension    | standardDeckTitle | Standard Deck                                                                                                                                                                                                                                                                                          |
| extension    | playerTurnOrder   | {"fullDeck":["2♡","3♡","4♡","5♡","6♡","7♡","8♡","9♡","10♡","J♡","Q♡","K♡","A♡","2♢","3♢","4♢","5♢","6♢","7♢","8♢","9♢","10♢","J♢","Q♢","K♢","A♢","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣","A♣","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠","A♠"],"drawnCards":[]} |
