# Port Story Synth to Your Own Website

This guide covers how to publish your Story Synth game on your own website so that anyone can create a session and play. You should already be familiar with the [How to Playtest](https://docs.google.com/document/d/1A676dhZP_4KPPhHGZ3L4ngVvo5pr3c7LQIcUD9Wgi6Y/edit?usp=sharing) guide.

Visit [Dawn of the Monster Invasion](http://monster.diegeticgames.com/) for example of a published game that runs on Story Synth.

In order to publish with Story Synth, you need some familiarity with coding and the command line. You’ll mostly be copying and pasting where instructed and occasionally commenting out parts of the codebase that you don’t need. You’ll also need to create a Firebase account. Familiarity with Git and Github is encouraged but not necessary.

::: warning Warning
This documentation is a work in progress and parts if it might be lacking in detail or even wrong (though I hope not!) – if you run into any issues, please reach out to Randy and he'll be help to help you.
:::

## 1. Build Story Synth on your machine

Follow the instructions in the README at the [Story Synth Github Repo](https://github.com/randylubin/Story-Synth). I recommend using a modern code editor like [Visual Studio Code](https://code.visualstudio.com/).

High level overview:

1. Install Node.js and npm
2. Download the Story Synth codebase from GitHub
3. Install the dependencies with npm
4. Create a Firebase account and project
5. Add your Firebase credentials to the app
6. Run the app with `npm run serve`

Then you’ll be able to view the site at [localhost:8080](http://localhost:8080/)

## 2. Remove unnecessary code

There’s plenty of code that’s necessary for the playtest version but not for the published version.

There are comments in the code `<!-- Remove for published version -->` or `// Remove for published version` to help you easily identify where they are. You can comment out those blocks of code or delete them entirely.

### In App.vue

Remove any unused components. You’ll likely use only one of the game types and can remove the others from the template at the top, the import, and the components list. Depending on your interest, either update or remove the header and footer.

::: warning Updating the homepage
You may want to have your game's game launcher on the homepage, as with [Dawn of the Monster Invasion](http://monster.diegeticgames.com/). This will take a bit more work as it requires changing assorted v-if's in the App.vue template and updating some of the router-links.

An easier approach is to replace GameMaker.vue with your own custom homepage which has a link to your game's GameLauncher URL. Either edit GameMaker.vue to have your own content, or create a new Homepage.vue file and add it to App.vue.
:::

### Hardcode the game type and Google Sheet link

::: warning Only for a GameLauncher Homepage
This section is only necessary if you want the GameLauncher to be your homepage.
:::

Next, we need to set some extra defaults so that Story Synth always uses your game template and spreadsheet.

Hardcode the template type into the router-link in GameLauncher.vue. For example, you might take this line `<router-link :to="{path: constructURL($route.fullPath, roomID)}">` and replace `$route.fullPath` with the hardcoded URL that includes your game format and Sheet ID.

Hardcode your Google Sheet URL into your game’s .vue file. In the function fetchAndCleanSheetData, set the variable getURL equal to your Google Spreadsheet link.

## 4. Update metadata and assets

You’ll want to update metadata in a few locations:

- The favicon.ico
- The Readme
- The Meta tags in App.js, including Monetization via WMP
- The Google Analytics ID in the site head
- The Mixpanel ID in main.js
- The list of pages to prerender in vue.config.js

## 5. Publish to Firebase Hosting

When you’re ready to publish the app, there are two key steps:

Use `npm run build` to compile the code into the `/dist` folder.

Use `firebase deploy --only hosting` to push the site live via Firebase Hosting.

If you don’t want to use Firebase hosting, you can also use GitHub pages or host on your own server.

Firebase Hosting automatically shares your app at projectname.web.app but you can also use a custom domain or subdomain (e.g. storysynth.org, monster.diegeticgames.com). You can set up custom domains from the Firebase Console.

At this point your site should be live on the web and shareable - congrats!

## 6. Optional customization

While the above steps are all that’s needed to publish a Story Synth app, there plenty more customization that you can do.

### Custom title and info

The homepage of your app lives in the GameLauncher.vue file. If you want to add a custom title or other custom info (game length, player count, etc), this is the best place to add it.

### Custom style

Each Vue file (e.g. App.vue, RoomPicker.vue, Monster.vue) has its own style section at the bottom of the file. Custom CSS on App.vue will appear on all pages but if you only want to affect one page, then add it to just that page in the `<style scoped>` section.

### Pre-rendering pages

You can pre-render pages, which allows you to have custom unfurls for social media – that's the little preview image and text.

Make sure you:

- add the page's path to vue.config.js
- add the custom metadata to that page (inluding the og- and twitter tags)
- fire the code `document.dispatchEvent(new Event("x-app-rendered"))` after the page content is loaded. This might be in the mounted function or after data is imported from the Google Sheet.

### Custom Game URLs

You may want your session links to have a cleaner URL (e.g. not including the long Google Sheet ID). If so, you can use the customGameLauncher, and customGameSessionManager files.

Use the existing games (e.g. Around the Realm) as an example of what you'd need for your games. You'll end up with a url for a custom game launcher that's something like: `storysynth.org/Games/Around-The-Realm`

### Hardcode game content

When you’re done iterating on your games content, you can hardcode it directly into the app. This lets you skip the Axios API call to Google Sheets which should speed up app performance and improve reliability.

To hardcode your game content follow, these steps:

1. Download your Google Sheet as a CSV: `File > Download > Comma-separated values`
2. Convert the .csv file to JSON via [Convert CSV](https://www.convertcsv.com/csv-to-json.htm)
3. Remove Axios API call in fetchAndCleanSheetData()
4. In fetchAndCleanSheetData(), set this.gSheet equal to the JSON object from Convert CSV

## Next steps

If you’ve followed these instructions, you now have a live version of your game that anyone can play.

If you want to add additional mechanics that aren’t supported in one of the templates, check out [How to Extend Story Synth](/guide/extend.html).
