# How to Design with Story Synth

Desinging a game for Story Synth is as easy as putting your game content in a Google Spreadsheet template and sharing a link to the sheet. You don’t need to know how to code.

## 1. Copy the template spreadsheet

There are currently five game formats, which you can read about on the [Formats](/guide/formats.html) page.

Here are links to the Google Sheet Templates for each format:

* [Shuffled](https://docs.google.com/spreadsheets/d/1N5eeyKTVWo5QeGcUV_zYtwtR0DikJCcvcj6w69UkC1w/edit?usp=sharing)
* [Timed](https://docs.google.com/spreadsheets/d/1yq2AKwaYL1uZrCnEfwgSpC0SPkQAZqnCdjNxH_pm018/edit?usp=sharing)
* [Secrets](https://docs.google.com/spreadsheets/d/1JwMF02DSxNKtjHp6u-wyznSs-iEG_3DpOobgc17I16o/edit?usp=sharing)
* [Monster](https://docs.google.com/spreadsheets/d/1NgNHy7Qe1R8KhGR2cOmJwL2aOl2tocBemW2HIAKjrvI/edit?usp=sharing)
* [Slot Machine](https://docs.google.com/spreadsheets/d/1t5LRUQG9DzMJ3kd8E9DZV7_EbE8J5-Gqhz7TWQ4Y-uU/edit?usp=sharing)

Open the spreadsheet that best fits your game and then make a copy of it: **File > Make a copy**

## 2. Add your card content

Each template contains instructions, embedded as notes in the first row – the row containing the column headers. Don’t edit or change the first row unless specifically instructed.

Add your game’s content to the spreadsheet in the appropriate locations. Some of the columns allow for HTML - for those cells, you can embed links, images, and even css style code.

You can add or delete rows to match the length of your game.

If you are using a template that has columns for different players, you can edit those column headers (row 1) to match the player or character names. You can add or delete columns to match the number of players for your game.

## 3. Customize the style, title, and byline, and blurb

You can use 'option' rows in the sheet to further customize the game. All formats support the following options:

* gameTitle – this will display your game's title at the top of the page
* byline – this will show a subtitle or byline underneath the title
* gameBlurb – this will show up on the game launcher page where players can create new sessions
* style – use this space to alter the CSS styles on the page (both in a session and in the game launcher). All CSS must be inside `<style> </style>` tags
* password – set a password that players will need in order to start new sessions (password isn't needed to join a session)
* instructionsProgressBar – this will place a progress bar above the prompts, during the instructions (cards of deck 0). The value should be the number of instruction cards, not including the title card. Does not work for Secret or Timed format.
* coverImage – a cover image that appears on the game launcher page and your first card
* cardBackgroundImage – an image that becomes the background of all of your cards
* safetyCardButton – let's you relable the saftey button from the default of 'x-card'
* safetyCardText – let's you replace the x-card text with your own custom safety text

To use an option row, put 'option' in the first column, the option type in the second column, and the details in the third column. See the demo templates for examples. All options are optional – you can always leave them out.

If you're using the style option, here are some classes you may want to style:

* .full-page-background – this is the background for the whole page, use it to change the background color or image
* .game-meta – the title, byline, and blurb for the game page and session page
* .game-room – all game material is contained in this element; use it to update fonts and text color
* .card – this class is applied to all game cards, use it to change the card background
* .btn, .input – all buttons used on the page

## 4. Set the sheet to public

Story Sync needs to be able to access your spreadsheet. Click the Share button in the upper right of the page and, under the “Get Link” section, click “Change to anyone with the link” – this permits anyone with the link to view the sheet.

Now you can click “Copy link” which gives you the shareable URL. It should look something like: `https://docs.google.com/spreadsheets/d/1N5eeyKTVWo5QeGcUV_zYtwtR0DikJCcvcj6w69UkC1w/edit?usp=sharing`

## 5. Create a game page for your game

You’re now ready to connect your game to Story Synth:

1. Go to storysynth.org
2. Select the template you’re using from “Game Format” drdown list
3. Paste in your game spreadsheet’s URL in the “Sheet” field
4. Click “Create Game” to go to a page that can launch new sessions of your game

You can share this URL with anyone who wants to check out your game but it won't be searchable on the site or the internet – people won't accidently stumble across it. This page will display the game's Title, Byline, and Blurb if you have the relevant options in the spreadsheet; it will also use the style option if present.

## 6. Create a game session

From your game page, click the "Join Session" button to create and join a session where you can play your game. You can share the session URL with your players – click the link button at the top of the page or copy the URL manually.

Everyone at the same URL is part of the same session, so don’t share the same link with multiple groups of players.

## 7. Updating the spreadsheet content

Story Synth pulls the current data from your spreadsheet every time you reload the page. That means you can keep updating your content after you’ve shared the link. If you already have a browser tab open with your sheet, just refresh the page and it will have the new content.

## 8. Next Steps

If you’ve followed the steps above, you can now create and share your own games on Story Synth.

If you want to publish your game on it's own website, using the Story Synth code, check out the [How to Publish](/guide/publish.html) guide.

If you want to extend Story Synth to add new mechanics, check out [How to Extend](/guide/extend.html) guide.

If you have any questions, feel free to email [randy@storysynth.org](mailto:randy@storysynth.org)
