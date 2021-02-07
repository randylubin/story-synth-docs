# Custom Options

Options allow you to customize the visual style of your game, add metadata (like Title and Blurb), rename buttons, and more. You can use options by adding them as rows in your Google Sheet.

Some options affect the game launcher (where you create new sessions), some affect the session page (where you actually play) and some affect both.

To use an option row, put 'option' in the first column, the option name in the second column, and the option details in the third column. See the demo templates for examples. All options are optional – you can always leave them out.

Example:

| option | gameTitle | Around the Realm |
| ------ | --------- | ---------------- |


## Metadata Options

### Game Title

This option will dispaly your game title on the game launcher page and at the top of the session page.

| First Column | Extension Name | Example Customization |
| ------------ | -------------- | --------------------- |
| option       | gameTitle      | Around the Realm      |

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

You can add monetization to your site via the web monetization protocol. See [this blog](https://blog.randylubin.com/playing-around-with-the-web-monetization-protocol) for more details on WMP and getting a wallet.

The option 'wallet' sets your wallet address and the addional option 'revShare' sets the percentage that gets shared with Story Synth. If you leave out 'revShare' it will default to 20% shared with Story Synth. In the example below, 0.2 is translated as 20%.

| First Column | Extension Name | Example Customization         |
| ------------ | -------------- | ----------------------------- |
| option       | wallet         | \$ilp.uphold.com/WMbkRBiZFgbx |
| option       | revShare       | 0.2                           |

## Visual Style

The 'style' option is the place to use CSS to modify the visual style of the game launcher and session pages. Any CSS must be placed inside `<style> </style>` tags.

| First Column | Extension Name | Example Customization                                                   |
| ------------ | -------------- | ----------------------------------------------------------------------- |
| option       | wallet         | \<style>.full-page-background { background: rgb(255,255,255);}\</style> |

Here are some classes you may want to apply CSS to:

- .full-page-background – this is the background for the whole page, use it to change the background color or image
- .game-meta – this div contains the title, byline, and blurb for the game page and session page
- .game-room – all game material is contained in this element; use it to update fonts and text color
- .card – this class is applied to all game cards, use it to change the card background
- .btn, .input – all buttons used on the page

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

This option lets you use a cover image. The cover shows up on the game launcher page as well as on the first card of the instructions for formats that have cards. It will overwrite the contents of that first card (e.g. any instruction text) so leave a placeholder title in the row for that card.

The customization should just be the URL for your image. If you need a site to host your image, try [Free Image Host](https://freeimage.host/).

| First Column | Extension Name | Example Customization                                               |
| ------------ | -------------- | ------------------------------------------------------------------- |
| option       | coverImage     | https://diegeticgames.com/uploads/around-the-realm-cover-narrow.png |

### Card Background Image

These options let you set a background image for your cards. If you just use 'cardBackgroundImage' then the image will cover the entire card. If you also use 'cardBackgroundImageAlign' then you can set the image to appear above or below the card text with the custom text of 'top' or 'bottom'. For free background textures, check out [Subtle Patterns](http://subtlepatterns.com/).

| First Column | Extension Name           | Example Customization                                   |
| ------------ | ------------------------ | ------------------------------------------------------- |
| option       | cardBackgroundImage      | https://diegeticgames.com/uploads/card-bottom-wave2.png |
| option       | cardBackgroundImageAlign | bottom                                                  |

## Buttons, Modals, and More

### Instruction Progress Bar

This will place a progress bar above the prompts during the instructions round (cards of deck 0). The value in the customization field should be the number of instruction cards, not including the title card. This does not work for Secret or Timed format.

| First Column | Extension Name          | Example Customization |
| ------------ | ----------------------- | --------------------- |
| option       | instructionsProgressBar | 14                    |

### 'Next Deck' Button

This is for the Shuffled Format only and replaces the 'Last Card' button with a 'Next Deck' button. The next you add in the customization field will show up on the button lable.

| First Column | Extension Name     | Example Customization |
| ------------ | ------------------ | --------------------- |
| option       | showNextDeckButton | Next Act              |

### Safety Card Button and Text

This lets you relable the safety button and card text from the defaults for the X-card.

| First Column | Extension Name   | Example Customization                                         |
| ------------ | ---------------- | ------------------------------------------------------------- |
| option       | safetyCardButton | Pause                                                         |
| option       | safetyCardText   | Pause and discuss the direction you want the game to go in... |

### Modals

Modals are pop-ups or overlays on the screen. You may want to use these as a quick reference for the instructions, setting, or characters.

You can have one or two modals and you can change the lable on the buttons. You can use HTML and CSS within the modal text.

| First Column | Extension Name | Example Customization              |
| ------------ | -------------- | ---------------------------------- |
| option       | modalOneLabel  | Instructions                       |
| option       | modalOneText   | Here's an instructions recap...    |
| option       | modalTwoLabel  | Settings                           |
| option       | modalTwoText   | Here's some info on the setting... |
