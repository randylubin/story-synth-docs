# Custom Options

Options allow you to customize the visual style of your game, add metadata (like Title and Blurb), rename buttons, and more. You can use options by adding them as rows in your Google Sheet.

Some options affect the game launcher (where you create new sessions), some affect the session page (where you actually play) and some affect both.

To use an option row, put 'option' in the first column, the option name in the second column, and the option details in the third column. See the demo templates for examples. All options are optional – you can always leave them out.

Example:

| option | gameTitle | Around the Realm |
| ------ | --------- | ---------------- |

## Metadata Options

### Game Title

The 'gameTitle' option will dispaly your game title on the game launcher page and at the top of the session page. You can also choose to show the title on the game launcher page but hide it in the session by using 'hideTitleInSession'.

| First Column | Extension Name     | Example Customization |
| ------------ | ------------------ | --------------------- |
| option       | gameTitle          | Around the Realm      |
| option       | hideTitleInSession | TRUE                  |

### Byline

This option will show a subtitle or byline underneath your main title on the game launcher page and at the top of the session page. It will show up underneath the title, if you have one.

| First Column | Extension Name | Example Customization |
| ------------ | -------------- | --------------------- |
| option       | byline         | By Randy Lubin        |

### Blurb

This will show up on the game launcher page, underneath the Title and Byline, if they're present. You can use html in the custom text to control your formating.

| First Column | Extension Name | Example Customization                                                                 |
| ------------ | -------------- | ------------------------------------------------------------------------------------- |
| option       | gameBlurb      | Tell a story about racing around the realm before a deadline. 2-5 players; 1-2 hours. |

### Monetiziation

You can add monetization to your site via the web monetization protocol. See [the monetization page](/monetize) for more details on WMP and getting a wallet, as well as several other options that add features depending on if at least one players is paying.

The option 'wallet' sets your wallet address and the addional option 'revShare' sets the percentage that gets shared with Story Synth. If you leave out 'revShare' it will default to 20% shared with Story Synth. In the example below, 0.2 is translated as 20%.

| First Column | Extension Name | Example Customization         |
| ------------ | -------------- | ----------------------------- |
| option       | wallet         | \$ilp.uphold.com/WMbkRBiZFgbx |
| option       | revShare       | 0.2                           |

## Visual Style

### Style Templates

The 'styleTemplate' option lets you use existing style template. Options: cyberpunk, vaporwave, fantasy, dark, light.

| First Column | Extension Name | Example Customization         |
| ------------ | -------------- | ----------------------------- |
| option       | styleTemplate  | cyberpunk                     |

### CSS Styling

The 'style' option is the place to use CSS to modify the visual style of the game launcher and session pages. Any CSS must be placed inside `<style> </style>` tags. Don't include anything before the opening `<style>` tag or it will break the code.

| First Column | Extension Name | Example Customization                                                   |
| ------------ | -------------- | ----------------------------------------------------------------------- |
| option       | style          | \<style>.full-page-background { background: rgb(255,255,255);}\</style> |

Here are some classes you may want to apply CSS to:

- .full-page-background – this is the background for the whole page, use it to change the background color or image
- .game-meta – this div contains the title, byline, and blurb for the game page and session page
- .game-room – all game material is contained in this element; use it to update fonts and text color
- .card – this class is applied to all game cards, use it to change the card background
- .btn, .input – all buttons used on the page

Check out the [CSS Tutorial](https://docs.storysynth.org/tutorials/styling.html) for a step-by-step guide to working with CSS in Story Synth.

The easiest way to get started is by playing around in the [CSS Playground](https://storysynth.org/CSS-Playground/) where you can autogenerate CSS by picking colors from a menu.

## Game Launcher

### Password

Set a password that players will need in order to create new sessions. Note – players don't need to use the password to join a session in progress.

| First Column | Extension Name | Example Customization |
| ------------ | -------------- | --------------------- |
| option       | password       | Password123           |

### License

Share the license for your game which will be shared under the game launcher. You can get the code for Creative Commons Licenses from their [license picker](https://creativecommons.org/choose/).

| First Column | Extension Name | Example Customization                                                                                                                                                                                                                                                                                                                                               |
| ------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| option       | license        | \<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>\<br />This work is licensed under a \<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>. |

::: warning Note
Right now the license will have a call to remix next to it. If you are sharing under a less permisive license (e.g. Share Alike) then this text will be wrong. Stay tuned for an update with more nuanced licensing text.
:::

## Images

### Cover Image

This option lets you use a cover image. The cover shows up on the game launcher page as well as on the first card of the instructions for formats that have cards. By default, it will overwrite the contents of that first card (e.g. any instruction text) so leave a placeholder title in the row for that card.

The customization should just be the URL for your image. If you need a site to host your image, try [Free Image Host](https://freeimage.host/).

If you only want the cover image showing up on the game launcher page and not in the session itself, you can use the option `noCoverImageInSession` and it will just show the first card of deck '0' like normal. In this case, the other players (who didn't launch the session) will never see the cover.

| First Column | Extension Name | Example Customization                                               |
| ------------ | -------------- | ------------------------------------------------------------------- |
| option       | coverImage     | https://diegeticgames.com/uploads/around-the-realm-cover-narrow.png |
| option | noCoverImageInSession | TRUE |

### Card Background Image

These options let you set a background image for your cards. If you just use 'cardBackgroundImage' then the image will cover the entire card. If you also use 'cardBackgroundImageAlign' then you can set the image to appear above or below the card text with the custom text of 'top' or 'bottom'. For free background textures, check out [Subtle Patterns](http://subtlepatterns.com/).

| First Column | Extension Name           | Example Customization                                   |
| ------------ | ------------------------ | ------------------------------------------------------- |
| option       | cardBackgroundImage      | https://diegeticgames.com/uploads/card-bottom-wave2.png |
| option       | cardBackgroundImageAlign | bottom                                                  |

## Buttons, Modals, and More

### Menu Button Color

The default color for the menu buttons (the hamburger menu and the click for URL button) is dark grey but you can override it with a color name or hexcode.

| First Column | Extension Name | Example Customization |
| ------------ | -------------- | --------------------- |
| option       | menuColor      | white                 |

### Hide Headers

The Shuffled format has headers on each card but you might not need them. If you'd like them to be hidden, use the hideHeadersOnCards option.

| First Column | Extension Name     | Example Customization |
| ------------ | ------------------ | --------------------- |
| option       | hideHeadersOnCards | TRUE                  |

### Instruction Progress Bar

This will place a progress bar above the prompts during the instructions round (cards of deck 0). The value in the customization field should be the number of instruction cards, not including the title card. This does not work for Secret or Timed format.

| First Column | Extension Name          | Example Customization |
| ------------ | ----------------------- | --------------------- |
| option       | instructionsProgressBar | 14                    |

### Facilitator Mode

For Shuffled format, add the option line facilitatorMode and it will make it so only people at the facilitator link will be able to change cards and reset the game; other players will only be able to observe. The facilitator link ends in `facilitator` and will be generated from the game launcher. The player link will end in `player` and be copyable from the top of the game page.

| First Column | Extension Name  | Example Customization |
| ------------ | --------------- | --------------------- |
| option       | facilitatorMode | TRUE                  |

### Hide Navigation Buttons

Use this option to hide the navigation buttons (previous, next, last) in the Shuffled format. If you set to TRUE, then the buttons will never appear. If you set to a number, then the (previous, next) navigtion buttons will disappear starting on that card – the Last Card button won't appear at all.

| First Column | Extension Name        | Example Customization |
| ------------ | --------------------- | --------------------- |
| option       | hideNavigationButtons | TRUE                  |

### Card Counter

You can use displayCardCount to show the total number of cards drawn by the players in the Shuffled format. The value of the option indicates the first card that you want to include in the count – probably the first non-instruction card.

The default text is "Cards seen: " and you can change it by using the option displayCardCountLabel.

| First Column | Extension Name        | Example Customization |
| ------------ | --------------------- | --------------------- |
| option       | displayCardCount      | 7                     |
| option       | displayCardCountLabel | Prompts answered      |

### Set Last Card Location

This option specifies when the Last Card will appear (if you're using the single deck, shuffled format). There are a few ways to specify the location.

If you use an integer, the number in the customization field specifies the number of prompts will be drawn before jumping to the ending – not counting the instruction cards. If it's positive, it's the number of prompts after the instructions (e.g. 5 would be after the 5th prompt), if it's negative, it's the number of prompts before the end (e.g. -5 would be before the 5th to last card).

If you use a decimal, then it will be randomly shuffled into that percentage of the back of the deck. For example, 0.5 would be randomly shuffled into the back half of the deck and 0.25 would be shuffled into the last quarter of the deck.

| First Column | Extension Name      | Example Customization |
| ------------ | ------------------- | --------------------- |
| option       | setLastCardLocation | 10                    |

### Ending Reminder

These two options allow you to specify a reminder to players that they can end the game by pressing the "Last Card" button. The lastCardReminderText is what will show up on the reminder and lastCardReminderFrequency sets how often the reminder appears (how many cards). This only works in the 'Shuffled' format.

| First Column | Extension Name            | Example Customization                                             |
| ------------ | ------------------------- | ----------------------------------------------------------------- |
| option       | lastCardReminderText      | Reminder: you can bring the game to a close by clicking Last Card |
| option       | lastCardReminderFrequency | 10                                                                |

### 'Last Card' Button Label

For the 'Shuffled' format, you can rename the 'Last Card' button and dropdown.

| First Column | Extension Name | Example Customization |
| ------------ | -------------- | --------------------- |
| option       | lastCardLabel  | End Game              |

### 'Next Deck' Button

This is for the Shuffled Format only and replaces the 'Last Card' button with a 'Next Deck' button. The next you add in the customization field will show up on the button lable.

| First Column | Extension Name     | Example Customization |
| ------------ | ------------------ | --------------------- |
| option       | showNextDeckButton | Next Act              |

### Treat 'Last Card' Button as 'Last Deck'

This is for Shuffle Format and will cause the 'Last Card' button to send the players to the first card of the Last Deck instead. The last card shuffle buttons will not be visible.

| First Column | Extension Name          | Example Customization |
| ------------ | ----------------------- | --------------------- |
| option       | treatLastCardAsLastDeck | TRUE                  |

### Cards Drawn Per Deck

For Shuffled format, if you're using multiple decks, you can specify how many cards you want drawn from each deck before automatically advancing to the next deck. The custom field should be a list of numbers separated by commas (no spaces). The numbers indicate the number of cards you want to draw from each deck (not including the instructions). Note: if you use this option, you'll need a number for each deck after the instructions.

| First Column | Extension Name    | Example Customization |
| ------------ | ----------------- | --------------------- |
| option       | cardsDrawnPerDeck | 3,5,2,1               |

In the above example, players will see all of the instructions followed by 3 cards from the first deck, 5 cards from the second deck, 2 cards from the 3rd deck, and 1 card from the forth deck.

### Reversable Cards

This option allows you to add a fourth column of data to your Shuffled spreadsheet which will appear on the backs of cards. Make sure you add a column header in the first row that says _back_. Cards with back content will have a button on them that allows players to flip them over and back again. Flipping a card will flip that card for all players.

| First Column | Extension Name  | Example Customization |
| ------------ | --------------- | --------------------- |
| option       | reversableCards | TRUE                  |

### Safety Card Button and Text

This lets you relable the safety button and card text from the defaults for the X-card.

| First Column | Extension Name   | Example Customization                                         |
| ------------ | ---------------- | ------------------------------------------------------------- |
| option       | safetyCardButton | Pause                                                         |
| option       | safetyCardText   | Pause and discuss the direction you want the game to go in... |

### Modals

Modals are pop-ups or overlays on the screen. You may want to use these as a quick reference for the instructions, setting, or characters. Modals are available in every format.

The links to the modals will appear in the dropdown menu. You can have one or two modals and you can change the lable of the link. You can use [Markdown](https://www.markdownguide.org/basic-syntax/), HTML and CSS within the modal text.

| First Column | Extension Name | Example Customization              |
| ------------ | -------------- | ---------------------------------- |
| option       | modalOneLabel  | Instructions                       |
| option       | modalOneText   | Here's an instructions recap...    |
| option       | modalTwoLabel  | Settings                           |
| option       | modalTwoText   | Here's some info on the setting... |

This patter continues for `modalThreeText`, `modalFourText`, and `modalFiveText`.

## Unfurl

It's currently possible to add options to your game launcher page that let social media sites and messenger apps "unfurl" the game URL with a photo, title and description. Absent these options, the unfurl will be the generic Story Synth logo.

The two key options at the moment are:

- metaDescription: a short blurb which should be under 160 characters
- ogImage: a square image of 500px by 500px

| First Column | Extension Name  | Example Customization                                   |
| ------------ | --------------- | ------------------------------------------------------- |
| option       | metaDescription | Tell the story of heroes racing around the realm        |
| option       | ogImageSquare   | https://diegeticgames.com/uploads/card-bottom-wave2.png |

Further, you'll need to Randy know by emailing him a link to your game: <unfurl@storysynth.org>

## Miscellaneous

### Debug Loading

If you're having issues with Story Synth loading properly, use this option to show which API call is failing and display any error message.

| First Column | Extension Name | Example Customization |
| ------------ | -------------- | --------------------- |
| option       | debugLoading   | TRUE                  |
