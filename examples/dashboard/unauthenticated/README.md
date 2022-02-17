# MongoDB Charts Embedding Example - Unauthenticated Embedded Dashboard

## Background

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/dashboard/unauthenticated)_

The MongoDB Charts Embedding SDK allows you to embed a Chart or a Dashboard directly into your application. Just like embedded charts, you can embed a dashboard via unauthenticated or an authenticated method.

This example, demonstrates how you might render an unauthenticated dashboard embedded onto your application.

_Note that this is not an exhaustive list of all the features for the Dashboard Embedding SDK._

## Highlighted Features

In this example, you should be able to:

- Render an unauthenticated embedded dashboard
- Manually refresh the dashboard (Refresh all charts within a dashboard)
- Set the whole dashboard theme to `'light'` or `'dark'`
- Set background color of all charts shown on the dashboard. Note that this will overwrite the color that has been set by the current theme
- Set the max data age of a chart on a dashboard
- Set the height and width mode to `'fixed'` or `'scale'`.

## Quick Start

_The following steps presume the use of npm, though yarn works as well._

1. Ensure you have Node installed. You can confirm with `node --version`. On some operating systems, Node is available as the `nodejs` binary instead.

2. Clone the Git repository or download the code to your computer.

3. Run `npm install` to install the package dependencies.

4. Run `npm start` to start the application. This will utilise parcel.js
   - Optional Parcel.js documentation https://parceljs.org/ for more information on what this is

This should create a local server running the Charts demo. Open a web browser and navigate to `http://localhost:1234` in the url bar to see the sample.
