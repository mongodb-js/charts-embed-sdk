# MongoDB Charts Embedding Example - Authenticated Embedded Chart

## Background

📄 _[See the MongoDB Charts Embedding Docs for more details](https://docs.mongodb.com/charts/saas/embedding-charts/)_

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb/charts-embedding-examples/tree/feature/CHARTS-3248-embedded-charts-jwt-demo/embedding-sdk/authenticated/jwt)_

MongoDB Charts allows you to create visualizations of your MongoDB data using a simple web interface. You can view the visualizations within the Charts UI, or you can use the Embedding feature to render the charts in an external web application.

Charts can be embedded either using a simple IFRAME snippet, or by using the Charts Embedding SDK from your JavaScript code. When using the SDK, embedded charts can be either unauthenticated (meaning anyone who has the embed code can view the chart), or authenticated (whereby the user can only view the chart if they have an active authentication session linked to a Charts authentication provider).

This sample shows how to use the JavaScript Embedding SDK to render **authenticated** embedded charts, specifically via a custom jwt authentication. The sample app has its own authentication and token issuing logic. You may want to follow a similar approach if you are not integrating with an external authentication mechanism or your authentication is not based on JWTs. Alternatively, if you are using an existing authentication mechanism that issues JWTs, you can use those tokens to authenticate your chart rendering requests after configuring a Charts authentication provider that can validate the JWT.

#### The features included in this demo are as follows:

- 📈 Render an embedded chart on a web page
- 🔒 Only render charts to valid users
- 🔑 Custom JWT authentication via `jsonwebtoken`

## Preparing your Chart for Embedding

This sample is preconfigured to render a specific chart. You can run the sample as-is, or you can modify it to render your own chart by completing the following steps:

1. Log onto MongoDB Charts

2. If you haven't done so already, create a chart on any dashboard that you would like to embed.

3. Go to the Data Sources tab, find the data source that you are using on the chart, and choose External Sharing Options from the ... menu. Make sure that embedding is enabled for this data source and select '**Verified Signature Only**'

4. Find the chart you want to embed, click the **...** menu and select **Embed Chart**

5. Ensure the Unauthenticated tab is selected and turn on '**Enable authenticated access**'

6. Note the Chart ID and the Chart Base URL, as you will need them for running the demo.

7. Close the menu and click on the Admin Settings button.

8. Under Embedding Authentication Providers, press the **Add New Provider** button
9. Fill in the details like so:

![](https://i.imgur.com/8cS1iSJ.png)

- Name: `Custom JWT` _Note, this is only for your convenience and can be named anything_
- Provider: `Custom JSON Web Token`
- Signing Algorithm: `HS256` _Note, this is the default signing algorithm for the `jsonwebtoken` library and many others_
- Signing Key: `topsecret` _Note, this key must correlate with the key found in `config.js`_

## Running this Sample

_The following steps presume the use of npm, though yarn works as well._

1. Ensure you have Node installed. You can confirm with `node --version`. On some operating systems, Node available as the `nodejs` binary instead.

2. Clone the Git repository or download the code to your computer.

3. **Optional**
   If you do not wish to use our sample data and have completed the above steps to prepare your own chart for embedding,
   - Open the _index.js_ file (`src/index.js`)
   - Replace the `baseUrl` string on with the base URL you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
   - Replace the `chartId` string on with the chart ID you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
   - Replace the second `chartId`string with the same ID. (look for "\~REPLACE\~" in the comments)
4. Run `npm install` to install the package dependencies.
5. Run `npm install -g parcel-bundler` to install Parcel. You may need to run `sudo npm install -g parcel-bundler` if you lack permissions.
   - Optional Parcel.js documentation https://parceljs.org/ for more information on what this is
6. Run `npm start` to start the application.

This should create a local server running the Charts demo. Open a web browser and navigate to `http://localhost:1234` in the url bar to see the sample. Along with this, a local jwt authentication server will be spun up on `http://localhost:8000`.

The hard coded credentials used in this demo are:
username : `admin`
password: `password`

## Next Steps

Once you gain an understanding of the API, consider the following

- Take on the optional steps to prepare and manipulate your own data source rather than the sample.
- Change the login logic to adapt to your project's security workflow.
- Think whether an authenticated chart is the feature you're after. If you're simply looking for a way to show off your data, unauthenticated embedding simplifies the workflow even further.

Happy Charting! 🚀📈
