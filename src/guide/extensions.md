# Extensions

Story Synth extensions add extra functionality to existing formats. They are entirely optional and some are customizable.

To see many of the extensions in action, check out the [sandbox demo](https://storysynth.org/#/Sandbox/1wkNipcFfxrKAfyEIppifGLjjjbkwVJLEwcKmvq3s5zs)

You can add an extension to your game by including a row in your Google Sheet with the proper instructions. The first column should say 'extension' the second should have the name of the extensions (e.g. 'diceRoller') and the third column should include any customized instructions.

::: warning Note
Some of these extensions require you to write content in JSON. These extensions may be updated in the near future to become more designer friendly.
:::

Included extensions will appear below the the main area of play by default, though you can set individual ones to appear above by adding a row based on the extension name + 'Location' and setting it to 'upper'. For example:

| First Column | Extension Name    | Example Customization |
| ------------ | ----------------- | --------------------- |
| extension    | staticBoxLocation | upper                 |

If you're using your extensions with the Shuffled format, you can choose when they appear and disappear with the [extensionName]FirstVisible and [extensionName]LastVisible set to the card you want the extension to appear and disappear. Example:

| First Column | Extension Name    | Example Customization |
| ------------ | ----------------- | --------------------- |
| extension    | playerTurnOrderFirstVisible | 3                 |
| extension    | playerTurnOrderLastVisible | 12                |

Here's a list of all available extensions:

| Name             | Description                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| staticBoxContent | A simple text box that is always visable                                                              |
| playerTurnOrder  | A way of tracking player turns                                                                        |
| imageGallery | Players can browse images and select one to focus on |
| plusMinus        | A state tracking system where players can increase or decrease the values of things they are tracking |
| editableList     | A list that players can edit, adding and deleting items                                               |
| multiEditableLists | A way to have multiple editable lists |
| diceRoller       | Players can roll dice by typing commands like '2d6'                                                   |
| coinflip       | Players can flip a coin (with custom results)                                     |
| standardDeck     | A way of drawing from a deck of playing cards                                                         |
| journalEntries     | A place to log notes and journal entries |
| embedWebsiteMessage | Allow players to embed a webpage within their session |
| hexflowerAsExtension     | Embed an entire Hexflower game within a different format |
| generatorAsExtension     | Embed an entire Generator game within a different format |

## Static Box

This extension adds a box of static text to the top of your game. It might be useful as a rules summary or for a setting description. You can use [Markdown](https://www.markdownguide.org/basic-syntax/) and HTML in the box. An alternative approach is to use a modal rather than an extension. Read more about modals under [customizing your game](http://localhost:8080/guide/design.html#_3-customize-the-style-title-and-byline-and-blurb).

### Static Box Example

| First Column | Extension Name   | Example Customization                                                                        |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------- |
| extension    | staticBoxContent | This example text will show up in the static box. You can \<em\>use html\</em\> if you want. |

## Player Turn Order

This extension lets you keep track of player turns. If you're playing in a format that has a "next card" button, hitting that button will automatically advance the player turn. You can also click on a player's name to make it their turn.

You can use playerTurnOrderFirstVisible to hide the player turn order extension until after you reach a specific card.

The optional row of playerTurnOrderHeader lets you rename the header for this section and playerTurnOrderButtonLabel lets you overwrite the button text.

You can also choose to have a current player header above the main game by using the extension currentPlayerHeader and having the customization contain the text that precedes the player's name.

### Player Turn Example

::: warning Note
You must put '{}' in the third column of playerTurnOrder. And you must use playerTurnOrderFirstVisible.
:::

| First Column | Extension Name              | Example Customization |
| ------------ | --------------------------- | --------------------- |
| extension    | playerTurnOrder             | {}                    |
| extension    | playerTurnOrderFirstVisible | 8                     |
| extension    | playerTurnOrderHeader       | Turn Turn Turn        |
| extension    | playerTurnOrderButtonLabel  | Add me                |
| extension    | currentPlayerHeader         | Current player:       |

## Image Gallery

This extension lets players browse an image gallery and then select one image which remains visible for all players. You can change the name of the title of the gallery and add captions. Captions can take markdown formating and include links. The imageGallery, imageGalleryCaptions, and imageGalleryAltText options take a list of urls or captions, separated by commas; that means you can't have a comma in the caption. If you have captions but not alt text, then the captions will be used as alt text.

Please ensure that your image usage complies with all copyright laws.

| First Column | Extension Name              | Example Customization |
| ------------ | --------------------------- | --------------------- |
| extension    | imageGallery             | http://example.com/image1.jpg,http://example.com/image2.jpg,http://example.com/image3.jpg                    |
| extension    | imageGalleryCaptions | caption one,\*\*bold caption\*\*,a caption with a \[link\]\(http://example.com\)                     |
| extension | imageGalleryAltText | text one,text two,text three
| extension    | imageGalleryTitle       | Image Gallery        |

Here's a Google Sheet that can help with organzing all of your links, captions, and alt text: [Image Gallery Management Sheet](https://docs.google.com/spreadsheets/d/1I3dQ6KotBk6QEpXTxaU8uWL6pss3V0y46mkXkx_xeOo/edit?usp=sharing)

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

You can have the editable list only appear after a certain point by using editableListFirstVisible and specifying what card it first appears on.

::: warning Note
Items on the initial list should be separated by commas. If you want to have an empty intial list, just have the third column as: EMPTY
:::

### Editable List Example

| First Column | Extension Name           | Example Customization                              |
| ------------ | ------------------------ | -------------------------------------------------- |
| extension    | editableListTitle        | Inventory                                          |
| extension    | editableList             | Cursed treasure, Magical compass, Letter of marque |
| extension    | editableListFirstVisible | 5                                                  |

## Multiple Editable Lists

If you want to have more than one editable list (perhaps for different categories) you can use the extension 'multiEditableLists'

In this case, the data should have be an array of objects with each object having a name (name of the list) and value (initial items in the list).

| First Column | Extension Name     | Example Customization                                                                                                       |
| ------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| extension    | multiEditableLists | [{"name": "Locations", "value": ["The Docks", "The Market"]},{"name": "Allies", "value": ["The Governer", "The Smuggler"]}] |
| extension | multiEditableListsFirstVisible | 5 |

## Coinflip

This extension lets players flip a coin. If you set 'coinflip' to 'TRUE' then the coin will be 'heads' or 'tails' – if you want to customize the results text, you can set 'coinflip' to the text of the results seperated by a comma (e.g. 'yes,no' will result in a 'yes' or 'no'). You can optionally add a title to the extension and relable the button. You can also specify when it first appears with 'coinflipFirstVisible'.

### Coinflip example

| First Column | Extension Name  | Example Customization                                              |
| ------------ | --------------- | ------------------------------------------------------------------ |
| extension    | coinflip | yes,no                                                        |
| extension | coinflipTitle | Coin Flipper |
| extension    | coinflipButtonLabel      | Click to flip |

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
| extension    | standardDeck   | {"fullDeck":["2♡","3♡","4♡","5♡","6♡","7♡","8♡","9♡","10♡","J♡","Q♡","K♡","A♡","2♢","3♢","4♢","5♢","6♢","7♢","8♢","9♢","10♢","J♢","Q♢","K♢","A♢","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣","A♣","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠","A♠"],"drawnCards":[]} |

## Journal Entries

Use this extension to let your players write journal entries. The default text at the top of it will say Journal Entries but you can use 'journalUpperText' to override it with any label and instructions that you want. You can add some initial entries by customizing journalEntries with an Array of entries: `["entry one", "two", "three"]` or just put `[]` to have it start blank. You can use [Markdown](https://www.markdownguide.org/basic-syntax/) in the journal entries.

By default, journal entries are sorted from newest at the top to oldest at the bottom. You can have the oldest at the top by specifying 'journalOrder' to be `oldestFirst`.

| First Column | Extension Name   | Example Customization |
| ------------ | ---------------- | --------------------- |
| extension    | journalEntries   | []                    |
| extension    | journalUpperText | Log Files             |
| extension | journalOrder | oldestFirst |
| extension | journalFirstVisible | 5 |

## Embed a Webpage

This extension lets you embed a webpage within your Story Synth game. You can specify to have a fixed webpage always embed via `hardcodedWebsiteURL` or you can specify instructions for players to add a page via `embedWebsiteMessage`. The latter is helpful if you want players to embed a Google Doc, perhaps a copy of a template doc that you've created.

Note - due to website security measures, not all webpages are capable of being embedded. Test out the page you want before finishing your game.

| First Column | Extension Name   | Example Customization |
| ------------ | ---------------- | --------------------- |
| extension    | embedWebsiteMessage   | Add a link to a Google Doc to take notes                    |
| extension    | hardcodedWebsiteURL | https://example.com |

## Hexflower as Extension

This extension lets you embed an entire Hexflower game within a different format. Just create an additional spreadsheet for your Hexflower and paste it into the extension customization details.

| First Column | Extension Name       | Example Customization                                                                                |
| ------------ | -------------------- | ---------------------------------------------------------------------------------------------------- |
| extension    | hexflowerAsExtension | https://docs.google.com/spreadsheets/d/19zYQMLvhgv3CtpMpNIpj5GAaY_lRsF_pF6q1UqVF4Bg/edit?usp=sharing |
| extension | hexflowerFirstVisible | 3 |

## Generator as Extension

This extension lets you embed an entire Generator game within a different format. Just create an additional spreadsheet for your Generator and paste it into the extension customization details.

| First Column | Extension Name       | Example Customization                                                                                |
| ------------ | -------------------- | ---------------------------------------------------------------------------------------------------- |
| extension    | generatorAsExtension | https://docs.google.com/spreadsheets/d/19zYQMLvhgv3CtpMpNIpj5GAaY_lRsF_pF6q1UqVF4Bg/edit?usp=sharing |
