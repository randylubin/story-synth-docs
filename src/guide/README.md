# About Story Synth

## Overview

Story Synth is a platform for developing, playtesting, and publishing lightweight storytelling games on the web. The mission is to lower the barrier to playtesting games online and encourage a flourishing of new designs.

Check out this [video tour](https://youtu.be/FqfBcB4iZEI) of Story Synth to see it in action:

<div class="embed-responsive embed-responsive-16by9 mb-3"><iframe width="560" height="315" src="https://www.youtube.com/embed/FqfBcB4iZEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

There are a few key features:

- Designers can create their game in an Google Spreadsheet and can playtest by pasting the link into Story Synth – no coding knowledge needed.
- Story Synth games take place in “Rooms” where content is synchronized for everyone in the same Room. In other words, everybody at the same URL automatically sees the same content.
- There are multiple templates for different types of games and, if you’re comfortable coding, you can add your own games

You can see the templates in action (with placeholder content) at [storysynth.org](https://storysynth.org/).

Visit [Dawn of the Monster Invasion](http://monster.diegeticgames.com/) for example of a published game that runs on Story Synth.

Check out the [repository on GitHub](https://github.com/randylubin/Story-Synth) to explore and download the codebase.

## Use cases and guides

Story Synth is for game designers with one of three use cases:

1. Playtesting a game that uses one of the existing templates (no coding needed)
2. Publishing a game that uses one of the existing templates, on their own website, so that others can easily play it (some, simple coding needed)
3. Extending one one of the templates or creating their own template, to add mechanics that suit their game (serious coding needed)

Here are guides for each of the use cases:

1. [How to Design with Story Synth](/guide/design.html)
2. [How to Publish with Story Synth](/guide/publish.html)
3. [How to Extend Story Synth](/guide/extend.html)

I’m planning to elaborate on these guides so please reach out with any questions or if anything is unclear.

## Available formats and templates

Story Synth has several different game formats you can use. Here’s a brief description of each and a link to its demo and template. You can read more about each format on the [Formats Page](/about/formats.html).

- Shuffled – a series of ordered prompts followed by shuffled prompts | [template](https://docs.google.com/spreadsheets/d/1N5eeyKTVWo5QeGcUV_zYtwtR0DikJCcvcj6w69UkC1w/edit?usp=sharing) | [demo](https://storysynth.org/#/Shuffled/1N5eeyKTVWo5QeGcUV_zYtwtR0DikJCcvcj6w69UkC1w)
- Phases – the game rotates through a series of a phases, with each phase drawing from a corresponding deck | [template](https://docs.google.com/spreadsheets/d/1HataDfV2lrA4hfzmLgDjXH09dEMLQV6OT10tVH9G52A/edit?usp=sharing) | [demo](https://storysynth.org/#/Phases/1HataDfV2lrA4hfzmLgDjXH09dEMLQV6OT10tVH9G52A)
- Monster – a series of ordered promts spread over rounds; some rounds have multiple prompts and can expand for more detail | [template](https://docs.google.com/spreadsheets/d/1NgNHy7Qe1R8KhGR2cOmJwL2aOl2tocBemW2HIAKjrvI/edit?usp=sharing) | [demo](https://storysynth.org/#/Monster/1NgNHy7Qe1R8KhGR2cOmJwL2aOl2tocBemW2HIAKjrvI)
- Slot Machine – a series of cards with randomized content, drawn from each of several lists | [template](https://docs.google.com/spreadsheets/d/1t5LRUQG9DzMJ3kd8E9DZV7_EbE8J5-Gqhz7TWQ4Y-uU/edit?usp=sharing) | [demo](https://storysynth.org/#/SlotMachine/1t5LRUQG9DzMJ3kd8E9DZV7_EbE8J5-Gqhz7TWQ4Y-uU)
- Secrets – each round, each player receives a shared public prompt and secret private prompt | [template](https://docs.google.com/spreadsheets/d/1JwMF02DSxNKtjHp6u-wyznSs-iEG_3DpOobgc17I16o/edit?usp=sharing) | [demo](https://storysynth.org/#/SecretCards/1JwMF02DSxNKtjHp6u-wyznSs-iEG_3DpOobgc17I16o)
- Timed – each player receives unique prompts at different times based on a shared stopwatch | [template](https://docs.google.com/spreadsheets/d/1yq2AKwaYL1uZrCnEfwgSpC0SPkQAZqnCdjNxH_pm018/edit?usp=sharing) | [demo](https://storysynth.org/#/Timed/1yq2AKwaYL1uZrCnEfwgSpC0SPkQAZqnCdjNxH_pm018)
- Generator – randomly display results from several categories on one page and regenernate them independantly or en mass | [template](https://docs.google.com/spreadsheets/d/1F0g3rVHxRA7O0rRMIQSsLCepJStxBO6pa7QJUNJb3K0/edit?usp=sharing) | [demo](https://storysynth.org/Generator/1F0g3rVHxRA7O0rRMIQSsLCepJStxBO6pa7QJUNJb3K0/)
- Hexflower – display content on a hexagon made of hexagons and allow players to navigate it | [template](https://docs.google.com/spreadsheets/d/1wLDboZZBfBwMKswMYcRIXxz6DxRZJyAa6KPW6TvR-dM/edit?usp=sharing) | [demo](https://storysynth.org/Hexflower/1wLDboZZBfBwMKswMYcRIXxz6DxRZJyAa6KPW6TvR-dM/)

## Technology used

Story Synth uses:

- [Vue.js](https://vuejs.org/) for the frontend framework
- [Firebase](https://firebase.google.com/) for syncing game state, presence, and website hosting
- [VueFire](https://vuefire.vuejs.org/) to sync Firebase and Vue
- [Axios](https://www.npmjs.com/package/axios) to fetch data from Google Sheets
- [Bootstrap](https://getbootstrap.com/) for the design framework

This means Story Synth is serverless and completely free at moderate usage.

## Licensing

Story Synth is open source and published under the extremely permissive [MIT license](https://github.com/randylubin/Story-Synth/blob/master/LICENSE), meaning you can do almost whatever you want with it.

There’s no need to cite Story Synth in your game or on your webpage, though credit is always welcome!

## Contact

Story Synth is designed and maintained by [Randy Lubin](http://randylubin.com/), of [Diegetic Games](https://diegeticgames.com/). You can email him at [randy@storysynth.org](mailto:randy@storysynth.org) or find him on Twitter at [@randylubin](https://twitter.com/randylubin).
