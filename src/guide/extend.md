# Add Features to Story Synth

::: warning Add Features to the Roadmap
If you have minor feature requests or new format suggestions, send them to Randy and he'll add them to the roadmap: randy@storysynth.org
:::

Story Synth is designed to be adapted to new types of storytelling games with novel mechanics. The framework is open sourced under an [MIT License](https://github.com/randylubin/Story-Synth/blob/master/LICENSE) and you’re free to do almost anything you want with it. Check out the [Story Synth codebase](https://github.com/randylubin/Story-Synth) on GitHub.

Whether you're doing a small extension of the app by tweaking the sheet template or attempting a more drastic hack, I recommend you get familiar with the [Vue.js](https://vuejs.org/) documentation. Vue.js is incredibly powerful and fairly quick to use, once you’re up to speed.

## A quick tour of the codebase

All of the app code livs in the `src` folder. `App.vue` and `Main.vue` control high level configuration, template inclusion, and routing. All the templates and logic for the site live in the components folder and subfolders.

A bit about each component folder:

### Layout

This folder contains the header and footer components. The `Header.vue` file also containts the logic for room links and the visualization for number of other players present.

### Launchers

The `GameMaker.vue` file controls the Story Synth homepage and the form where you can pick a format and paste your spreadsheet link.

The `GameLauncher.vue` file controls the page where you can generate new sessions for a specific game. It pulls in the game's meta-data (title, blurb, byline, cover, etc) from the Google Sheet.

### Formats

This folder contains the files for each of the Story Synth formats.

### Extensions

This folder contains the files for the Story Synth extensions. The extensions are all roll up through the `ExtensionManager.vue` file.

Copy the `ExtensionTemplate.vue` file to get started creating a new template.

## More to come

As Story Synth progresses, I hope to add much more to this section. Until then, feel free to reach out with any questions: [randy@storysynth.com](mailto:randy@storysynth.com)
