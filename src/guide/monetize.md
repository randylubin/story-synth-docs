# Monetization

Story Synth is in the process of adding new monetization functionality.

Currently you can add a web monetization wallet so that users of [Coil](https://coil.com/) will send a stream of micropayments to you as they play.

## Getting a Wallet

To set up this feature, first you need to get a wallet, to receive the payments. I use [Uphold](https://uphold.com/), which is free and easy to use.

If you'd prefer to have the web monitization payments go to a social benefit organization instead of your personal wallet, you can use one of their payment pointers from this list: [non-profit payment pointers](https://community.webmonetization.org/grantfortheweb/non-profit-payment-pointers-2890)

## Setting up Web Monetization for your game

The option 'wallet' sets your wallet address and the addional option 'revShare' sets the percentage that gets shared with Story Synth. If you leave out 'revShare' it will default to 20% shared with Story Synth. In the example below, 0.2 is translated as 20%.

| First Column | Extension Name | Example Customization         |
| ------------ | -------------- | ----------------------------- |
| option       | wallet         | \$ilp.uphold.com/WMbkRBiZFgbx |
| option       | revShare       | 0.2                           |

## Monetization Options

If you have thoughts on what monetization features you want to see, I'd love to hear them!

By default, adding a wallet does not change any functionality for users – if they aren't paying, they can still play the full game. If you want to gate some of your game behind monetization, you can add the following options:

- monetizationStyle: if at least one player in a session has a monetization stream, then a custom style appears for everyone (the style in the third column)
- monetizationMessage: a pop-up is displayed unless at least one player has an active monetization stream (the content of the pop-up is defined in the third column)
- monetizationPaywall: at least one player in a session must have an active web monetization stream in order to launch or play the game (the paywall message is defined in the third column)

Note about using these options: as least one player in a game session is using web monetization then all players get the benefits for the duration of the session.

| First Column | Extension Name | Example Customization         |
| ------------ | -------------- | ----------------------------- |
| option       | monetizationStyle       | \<style>.full-page-background { background: rgb(255,255,255);}\</style>
| option       | monetizationMessage         | You can support me by enabling \<a href="https://webmonetization.org/">web monetization\</a> |
| option       | monetizationPaywall         | To play this game, at least one player needs to have \<a href="https://webmonetization.org/">web monetization\</a> enabled |
