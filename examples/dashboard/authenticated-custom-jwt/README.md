# MongoDB Charts Embedding Example - Authenticated Embedded Dashboard (Custom JWT)

## Background

📄 _[See the MongoDB Charts Embedding Docs for more details](https://dochub.mongodb.org/core/charts-embedding-dashboards)_

The MongoDB Charts Embedding SDK allows you to embed a Chart or a Dashboard directly into your application. Just like embedded charts, you can embed a dashboard via unauthenticated or an authenticated method.

This example, demonstrates how you might render an authenticated dashboard embedded onto your application using Custom JWT as the authentication provider.

_Note that this is not an exhaustive list of all the features for the Dashboard Embedding SDK._

## Highlighted Features

In this example, you should be able to:

- Render an authenticated embedded dashboard
- Render a dashboard to valid users only
- Custom JWT authentication via the `jsonwebtoken` package

## Quick Start

_The following steps presume the use of npm, though yarn works as well._

1. Ensure you have Node installed. You can confirm with `node --version`. On some operating systems, Node is available as the `nodejs` binary instead.

2. Clone the Git repository or download the code to your computer.

3. Run `npm install` to install the package dependencies.

4. Run `npm start` to start the application. This will utilise parcel.js
   - Optional Parcel.js documentation https://parceljs.org/ for more information on what this is

This should create a local server running the Charts demo. Open a web browser and navigate to `http://localhost:1234` in the url bar to see the sample.
