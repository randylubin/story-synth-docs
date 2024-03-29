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
- [Generator template](https://docs.google.com/spreadsheets/d/1F0g3rVHxRA7O0rRMIQSsLCepJStxBO6pa7QJUNJb3K0/edit?usp=sharing) and [Generator Demo](https://storysynth.org/Generator/1F0g3rVHxRA7O0rRMIQSsLCepJStxBO6pa7QJUNJb3K0/)
- [Hexflower Template](https://docs.google.com/spreadsheets/d/1wLDboZZBfBwMKswMYcRIXxz6DxRZJyAa6KPW6TvR-dM/edit?usp=sharing) and [Hexflower Demo](https://storysynth.org/Hexflower/1wLDboZZBfBwMKswMYcRIXxz6DxRZJyAa6KPW6TvR-dM/)

Open the spreadsheet that best fits your game and then make a copy of it: **File > Make a copy**

## 2. Add your card content

Each template contains instructions, embedded as notes in the first row – the row containing the column headers. Don’t edit or change the first row unless specifically instructed.

Add your game’s content to the spreadsheet in the appropriate locations. Some of the columns allow for HTML and [Markdown](https://www.markdownguide.org/basic-syntax/) - for those cells, you can embed links, images, and even css style code.

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

1. Go to [https://storysynth.org/Upload/](https://storysynth.org/Upload/)
2. Select the template you’re using from “Game Format” dropdown list
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

### Sharing your game via Itch.io

Story Synth games don't have downloadable files but you can still publish them to Itch, and even charge for them. Here's how:

1. Set classification to 'Physical games' – despite being a digital game, Story Synth has much more in common with tabletop roleplaying games
2. Set 'Kind of Project' to downloadable
3. Under Uploads, create an External File as executable and set the URL to game's page on Story Synth.

Then just create the game's Itch page like you would for any other game. For an example Itch page of a Story Synth game, check out Around the Realm.

### Going Further

If you want to publish your game on it's own website, using the Story Synth code, check out the [How to Publish](/guide/publish.html) guide.

If you want to extend Story Synth to add new mechanics, check out [How to Extend](/guide/extend.html) guide.

If you have any questions, feel free to email [randy@storysynth.org](mailto:randy@storysynth.org)

## Miscellaneous

### Icons from Game-icons.net

Story Synth contains all of the icons from [Game-icons.net](https://game-icons.net/), which are licensed under Creative Commons CC-BY or are in the public domain. These will work in any part of the spreadsheet where html is allowed.

To use these icons in your game:

1. Find the icon you want on the [Game-icons.net](https://game-icons.net/) site
2. Copy the URL path for that page starting with the '/' after .net and ignoring the trailing .html
3. Create a image element in your spreadsheet with the `src` set to `https://storysynth.org/img/game-icons/transparent` followed by the URL path you copied and then add ".svg" to the end
4. Add an `alt` attribute describing the icon
5. Give credit back to the designer somewhere in your game (e.g. in a credits section)

The icon is black on a transparent background. If you want to change the color, you can use the `style` attribute. Use `background-color` to set the background color. For the stroke color, you'll need to visit [this codepen](https://codepen.io/sosuke/pen/Pjoqqp) and it will convert a hexcolor to a filter value – then paste that filter value in the img element.

For example, if I wanted to use the [Sloth icon](https://game-icons.net/1x1/caro-asercion/sloth.html) at `https://game-icons.net/1x1/caro-asercion/sloth.html` by Caro Asercion, and then make it blue. I would copy `/1x1/caro-asercion/sloth` and add it to the image source. Then I would add a style attribute with the value from the above codepen:

```
  <img
    src="https://storysynth.org/img/game-icons/transparent/1x1/caro-asercion/sloth.svg"
    alt="a picture of a blue sloth hanging from a tree"
    style="filter: invert(54%) sepia(39%) saturate(4559%) hue-rotate(160deg) brightness(93%) contrast(101%);"
  >
```

If you want to embed the image in a Hexflower hex, then also set `width: 44px` in the style.

<img
src="https://storysynth.org/img/game-icons/transparent/1x1/caro-asercion/sloth.svg"
alt="a picture of a sloth hanging from a tree"
style="filter: invert(54%) sepia(39%) saturate(4559%) hue-rotate(160deg) brightness(93%) contrast(101%); width: 100px;">
