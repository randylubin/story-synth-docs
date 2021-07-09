# How to Design with Story Synth

Desinging a game for Story Synth is as easy as putting your game content in a Google Spreadsheet template and sharing a link to the sheet. You don’t need to know how to code.

## 1. Copy the template spreadsheet

There are currently six game formats, which you can read about on the [Formats](/guide/formats.html) page.

Here are links to the Google Sheet Templates and demos for each format:

- [Shuffled template](https://docs.google.com/spreadsheets/d/1N5eeyKTVWo5QeGcUV_zYtwtR0DikJCcvcj6w69UkC1w/edit?usp=sharing) and [Shuffled demo](https://storysynth.org/#/Shuffled/1N5eeyKTVWo5QeGcUV_zYtwtR0DikJCcvcj6w69UkC1w)
- [Phases template](https://docs.google.com/spreadsheets/d/1HataDfV2lrA4hfzmLgDjXH09dEMLQV6OT10tVH9G52A/edit?usp=sharing) and [Phases demo](https://storysynth.org/#/Phases/1HataDfV2lrA4hfzmLgDjXH09dEMLQV6OT10tVH9G52A)
- [Monster template](https://docs.google.com/spreadsheets/d/1NgNHy7Qe1R8KhGR2cOmJwL2aOl2tocBemW2HIAKjrvI/edit?usp=sharing) and [Monster demo](https://storysynth.org/#/Monster/1NgNHy7Qe1R8KhGR2cOmJwL2aOl2tocBemW2HIAKjrvI)
- [Slot Machine template](https://docs.google.com/spreadsheets/d/1t5LRUQG9DzMJ3kd8E9DZV7_EbE8J5-Gqhz7TWQ4Y-uU/edit?usp=sharing) and [Slot Machine demo](https://storysynth.org/#/SlotMachine/1t5LRUQG9DzMJ3kd8E9DZV7_EbE8J5-Gqhz7TWQ4Y-uU)
- [Secrets template](https://docs.google.com/spreadsheets/d/1JwMF02DSxNKtjHp6u-wyznSs-iEG_3DpOobgc17I16o/edit?usp=sharing) and [Secrets demo](https://storysynth.org/#/SecretCards/1JwMF02DSxNKtjHp6u-wyznSs-iEG_3DpOobgc17I16o)
- [Timed template](https://docs.google.com/spreadsheets/d/1yq2AKwaYL1uZrCnEfwgSpC0SPkQAZqnCdjNxH_pm018/edit?usp=sharing) and [Timed demo](https://storysynth.org/#/Timed/1yq2AKwaYL1uZrCnEfwgSpC0SPkQAZqnCdjNxH_pm018)

Open the spreadsheet that best fits your game and then make a copy of it: **File > Make a copy**

## 2. Add your card content

Each template contains instructions, embedded as notes in the first row – the row containing the column headers. Don’t edit or change the first row unless specifically instructed.

Add your game’s content to the spreadsheet in the appropriate locations. Some of the columns allow for HTML - for those cells, you can embed links, images, and even css style code.

You can add or delete rows to match the length of your game.

If you are using a template that has columns for different players, you can edit those column headers (row 1) to match the player or character names. You can add or delete columns to match the number of players for your game.

## 3. Customize with Options and Extensions

Story Synth offers two approaches to customizing your game: Options and Extensions

### Options

Options allow you to customize the visual style of your game, add metadata (like Title and Blurb), rename buttons, and more. You can use options by adding them as rows in your Google Sheet. Here's a few of the most popular options but you can find the full list at [Story Synth Options](/guide/extensions.html).

| Name       | Description                                                                |
| ---------- | -------------------------------------------------------------------------- |
| gameTitle  | Displays your game's title at the top of the page                          |
| gameBlurb  | Includes a description of your game on the game launcher page              |
| style      | Adds custom CSS to change the visual style of your page                    |
| coverImage | Adds a cover image to your game launcher and to the first card of the game |

To use an option row, put 'option' in the first column, the option name in the second column, and your custom details in the third column. See the demo templates for examples. All options are optional – you can always leave them out.

### Extensions

Story Synth extensions add extra functionality to existing formats such as dice rolling, inventory management, and state tracking. They are entirely optional and some are customizable. See [Story Synth Extensions](/guide/extensions.html) for more information on the different types.

To see many of the extensions in action, check out the [Sandbox Demo](https://storysynth.org/#/Sandbox/1wkNipcFfxrKAfyEIppifGLjjjbkwVJLEwcKmvq3s5zs).

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
