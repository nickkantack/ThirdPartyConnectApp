
# Third Party Connect App

This repo contains a simple third party app that can be integrated into the Amazon Connect agent workspace.

### Setting up

If you are setting up a different repo patterned off this one, you'll want to take the following steps.
1. Run `npm init` or take another suitable route to create a `package.json` file in your repo.
1. Run `npm install webpack && npm install webpack-cli`.
1. Run `npx webpack` (this should create the `dist/` directory and put a built `localML.js` script in the directory.
1. Run `npx serve .` from the root of this package.

You should see the `index.html` web page loaded when you open the app in a browser. Note that it is expected that you will get `App failed to connect to workspace in the allotted time` as a console error after some time. This is because the app initialization code in `localML.js` is dependent on being run from the agent workspace in order to succeed.