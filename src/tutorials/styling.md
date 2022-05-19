# Styling with CSS

You can use CSS to customize Story Synth's style to fit your game. This guide will walk you through some of the basics, assuming that you don't know any CSS (or any code at all). If you want to experiment as you learn, check out the [CSS Playground](https://storysynth.org/CSS-Playground/), where you can see the impact of your code, in real time!

## What's CSS?

CSS, which stands for Cascading Style Sheets, is the web code that determines the styling of web pages. Other types of web code include HTML (which determines what blocks of content are on the page) and Javascript (which manages page interactions). To style Story Synth, you only need to know a tiny bit of CSS.

For your browser to read CSS, it needs to be inside of what's called style tags. They look like this:

```
<style>
  // Your CSS code goes between the two style tags
</style>
```

Your CSS will be a series of instructions that tell a browser how to style the page. Let's look at a simple example:

```
<style>
  #app { background-color: red; }
</style>
```

Let's walk through the rule bit by bit:

- the "#app" is the "selector" it selects which part of the page you want the rule to apply to. In this case, #app is the selector for the entire Story Synth page.
- the curly brackets "{}" contain the rules related to "#app" – in this case there's just one rule
- the "background-color" is "property" we want to define, in this case it's the background color of the selected part of the page. A property is always folowed by a ":"
- the "red" is the "value" of the property. In this case it will set the page background to red

You can have multiple rules for a property, just separate each with a semicolon. For example:

```
<style>
  #app {
    background-color: red;
    color: blue;
  }
</style>
```

This code would set the page background to red and the font color to blue. Notice that both rules are within the curly brackets {} and they are separated by a semicolon. Each rule is on its own line, to make the code more readable.

That's all you need to know for basic CSS syntax. Most of getting better at CSS is learning about the different ways of selecting parts of the page, the numerous properties you can set, and the specific ways to set properties. Read on to see some of the most useful properties for styling Story Synth.

## Basic Styling With Story Synth

### Adding Your Style

In Story Synth, you can add CSS to style your game by using the spreadsheet option row "style":

| First Column | Option Name | Example                                    |
| ------------ | ----------- | ------------------------------------------ |
| option       | style       | \<style> #app { background: red;}\</style> |

The easiest way to start styling you game is by updating the font and colors. Here's code that would create a cyberpunk style:

```
<style>
  #app {
    background-color: black;
    color: green;
    font-family: monospace;
  }
</style>
```

We've already seen background-color and color, "font-family" is how you set the font. In this case, monospace looks like an old school computer terminal font.

You'll likely want the colors on the card to be different than the colors of the rest of the page. You can create rules for the card by using the selector `.card`.

```
<style>
  #app {
    background-color: black;
    color: white;
    font-family: monospace;
  }

  .card {
    background-color: blue;
    color: white;
  }
</style>
```

Now the card has different coloring than the rest of the page. Note that the monospace font applies to the card as well, this is because the card is contained within the app and we haven't explicity overridden the font on the card.

### More about colors

There are a few ways to set color values. In the examples above, I used "red" the color's English name. You can find a long list of named colors on this [web color page](https://en.wikipedia.org/wiki/Web_colors#Extended_colors).

There are other ways of setting colors, the most common being a hex code, which is a '#' followed by 6 numbers or letters. You can use a [color picker](https://htmlcolorcodes.com/color-picker/) to find the hex code of a color for your game. In this example, `#FF8585` is a light red:

```
<style>
  #app {
    color: #FF8585;
  }
</style>
```

There are websites that will help you with color pallets and give you the related hex code, check out [Coolers](https://coolors.co/palettes/trending) for one some examples.

If you want to get fancier and have a gradient background, there are websites like [Grabient](https://www.grabient.com/) that will give you code for background gradients.

### Adding fonts

Changing the font can go a long way toward making your game's style feel right. [Google Fonts](https://fonts.google.com/) has tons of free font options you can use.

To add a font to your game, you need to include a @import line just after your style tag. you can copy the import line from the example below and change the family name from "IM+Fell+English" to the font of your choice. Also make sure to update the Font-Family value for the right selector.

```
<style>
  @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English&display=swap');

  #app {Font-Family: 'IM Fell English', Serif;}
</style>
```

Notice that the Font-Family value now has a more complicated value. That's because with fonts, you can specify a fallback if there's an issue with the initial font. In this case, the browser will pick a generic serif font if the IM Fell English.

### Story Synth Selectors

Here are some specific selectors you may want to use in your styling:

- .full-page-background – this is the background for the whole page, use it to change the background color or image
- .game-meta – this div contains the title, byline, and blurb for the game page and session page
- .game-room – all game material is contained in this element; use it to update fonts and text color
- .card – this class is applied to all game cards, use it to change the card background
- .btn, .input – all buttons used on the page

## Learning More

This was just a quick taste of CSS in Story Synth. If you want to learn more CSS, check out a [free CSS tutorial](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/) or look through the [Mozilla CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) for info on all the different properties.
