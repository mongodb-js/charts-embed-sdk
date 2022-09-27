# MongoDB Charts Embedding Example - Authenticated Embedded Chart

## Background

📄 _[See the MongoDB Charts Embedding Docs for more details](https://docs.mongodb.com/charts/saas/embedding-charts/)_

MongoDB Charts allows you to create visualizations of your MongoDB data using a simple web interface. You can view the visualizations within the Charts UI, or you can use the Embedding feature to render the charts in an external web application.

Charts can be embedded either using a simple IFRAME snippet, or by using the Charts Embedding SDK from your JavaScript code. When using the SDK, embedded charts can be either unauthenticated (meaning anyone who has the embed code can view the chart), or authenticated (whereby the user can only view the chart if they have an active authentication session linked to a Charts authentication provider).

This sample shows how to use the JavaScript Embedding SDK to render **authenticated** embedded charts, specifically via a custom jwt authentication. The sample app has its own authentication and token issuing logic. You may want to follow a similar approach if you are not integrating with an external authentication mechanism or your authentication is not based on JWTs. Alternatively, if you are using an existing authentication mechanism that issues JWTs, you can use those tokens to authenticate your chart rendering requests after configuring a Charts authentication provider that can validate the JWT.

#### The features included in this demo are as follows:

- 📈 Render an embedded chart on a web page
- 🔒 Only render charts to valid users
- 🔑 Custom JWT authentication via `jsonwebtoken`

## Quickstart

_The following steps presume the use of npm, though yarn works as well._

1. Ensure you have Node installed. You can confirm with `node --version`. On some operating systems, Node available as the `nodejs` binary instead.

2. Clone the Git repository or download the code to your computer.

3. Run `npm install` to install the package dependencies.

4. Run `npm start` to start the application. This will utilise parcel.js
   - Optional Parcel.js documentation https://parceljs.org/ for more information on what this is

## Preparing your Chart for Embedding

This sample is preconfigured to render a specific chart. You can run the sample as-is, or you can modify it to render your own chart by completing the following steps:

### Create chart to embed

1. Log onto MongoDB Charts.

2. If you haven't done so already, create a chart on any dashboard that you would like to embed.

### Enable data source for authenticated access

3. Go to the Data Sources tab found on the side panel.

4. Find the data source that you want to use on the chart by selecting the deployment, database and collection. Once found, click on the Manage button in the Data access section to access the Data source management page.

5. Make sure the "External users can view data in this data source" option is toggled on and "Allow authenticated data access" has been selected.

### Enable chart for embedded access

6. Go to the Dashboards tab on the side panel, and select the dashboard that contains the chart you wish to embed.

7. Click the **...** menu and select **Embed chart**.

8. Ensure the Authenticated tab is selected and turn on '**Enable authenticated access**'.

9.  Note the Chart ID and the Base URL, as you will need them for running the demo.

10. Close the menu.

### Create authentication provider

11. Go to the Embedding tab on the side panel.

12. Ensure the "Authentication Settings" tab is selected and press the "Add" button in the Authentication providers section.

13. Fill in the details like so:

- Name: `Custom JWT` _Note, this is only for your convenience and can be named anything_
- Provider: `Custom JSON Web Token`
- Signing Algorithm: `HS256` _Note, this is the default signing algorithm for the `jsonwebtoken` library and many others_
- Signing Key: `topsecret` _Note, this key must correlate with the key found in `config.js`_

## Running this Sample with your data

1.  If you do not wish to use our sample data and have completed the above steps to prepare your own chart for embedding,
    - Open the _index.js_ file (`src/index.js`)
    - Replace the `baseUrl` string with the base URL you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
    - Replace the `chartId` string with the chart ID you copied from the MongoDB Charts Embedded Chart menu. (look for "\~REPLACE\~" in the comments)
2.  Run `npm install` to install the package dependencies.
3.  Run `npm start` to start the application.

This should create a local server running the Charts demo. Open a web browser and navigate to `http://localhost:1234` in the url bar to see the sample. Along with this, a local jwt authentication server will be spun up on `http://localhost:8000`.

The hard coded credentials used in this demo are:

- Username : `admin`
- Password: `password`

## Next Steps

Once you gain an understanding of the API, consider the following

- Take on the optional steps to prepare and manipulate your own data source rather than the sample.
- Change the login logic to adapt to your project's security workflow.
- Think whether an authenticated chart is the feature you're after. If you're simply looking for a way to show off your data, [unauthenticated embedding](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/unauthenticated) simplifies the workflow even further.

Happy Charting! 🚀 📈
