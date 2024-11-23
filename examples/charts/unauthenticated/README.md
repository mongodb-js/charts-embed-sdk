# MongoDB Charts Embedding Example - Unauthenticated Embedded Chart

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/unauthenticated)_

## Background

📄 _[See the MongoDB Charts Embedding Docs for more details](https://docs.mongodb.com/charts/saas/embedding-charts/)_

MongoDB Charts allows you to create visualizations of your MongoDB data using a simple web interface. You can view the visualizations within the Charts UI, or you can use the Embedding feature to render the charts in an external web application.

Charts can be embedded either using a simple IFRAME snippet, or by using the Charts Embedding SDK from your JavaScript code. When using the SDK, embedded charts can be either unauthenticated (meaning anyone who has access to the page where the chart is embedded can view the chart), or authenticated (whereby the user can only view the chart if they have an active authentication session linked to a Charts authentication provider).

This sample shows how to use the JavaScript Embedding SDK to render unauthenticated embedded charts, along with showing off the various ways your application can interact with charts using the SDK.

#### The features included in this demo are as follows:

- Render an embedded chart on a web page
- Set the charts theme to either `'light'` or `'dark'`
- Get the charts current theme
- Set the charts max data age to various values
- Get the charts current max data age
- Manually refresh the chart
- Set the charts current filter
  - Note, filtering on a chart requires setting up white listed fields in MongoDB Charts. We have done this for our sample data.
- Get the current filter on a chart

## Quickstart

_The following steps presume the use of npm, though yarn works as well._

1. Ensure you have Node installed. You can confirm with `node --version`. On some operating systems, Node is available as the `nodejs` binary instead.

2. Clone the Git repository or download the code to your computer.

3. Run `npm install` to install the package dependencies.

4. Run `npm start` to start the application. This will utilise parcel.js.
   - Optional Parcel.js documentation https://parceljs.org/ for more information on what this is

This should create a local server running the Charts demo. Open a web browser and navigate to the server address to see the sample. This is `http://localhost:3000` for the Timeline Charts example and any using Google authentication, and `http://localhost:1234` for all others.

## Preparing your Chart for Embedding

This sample is preconfigured to render a specific chart. You can run the sample as-is, or you can modify it to render your own chart by completing the following steps:

### Create chart to embed

1. Log onto MongoDB Charts.

2. If you haven't done so already, create a chart on any dashboard that you would like to embed.

### Enable data source for unauthenticated access

3. Go to the Data Sources tab found on the side panel.

4. Find the data source that you want to use on the chart by selecting the deployment, database and collection. Once found, click on the Manage button in the Data access section to access the Data source management page.

5. Make sure the "External users can view data in this data source" option is toggled on and "Allow unauthenticated data access" has been selected.

6. Go to the Data Sources tab, find the data source that you are using on the chart, and choose External Sharing Options from the ... menu. Make sure that embedding is enabled for this data source and select '**Unauthenticated or Verified Signature**'

### Enable chart for embedded access

7. Find the chart you want to embed, click the **...** menu and select **Embed chart**

8. Ensure the **Unauthenticated** tab is selected and turn on '**Enable unauthenticated access**'

9. Select the **Javascript SDK** option

10. Note the **Chart ID** and the **Base URL**, as you will need them for running the demo.

11. **Optional**
   In the same menu, note the **User Specified Filters** option. If you wish to try out filtering on your own dataset, you will need to whitelist a field by which to filter on. For example, our sample AirBnB dataset filters on `address.country`.

      Furthermore, the filter related code in `src/index.js` will need to be updated to conform to the filter query you wish to run, and the options provided in `index.html` will need to be updated too. To be clear,
       - Update the query **field** in `src/index.js`
       - Update the query **values** in `index.html`

## Running this Sample with your data

If you do not wish to use our sample data and have completed the above steps to prepare your own chart for embedding, make the following changes to the index file. Most examples have a `src/index.js` file which needs to be modified, except the Google authentication example (`index.html`) and for the Timeline Charts example (modify `src/Dashboard.jsx` instead). When complete, refer to steps 3 & 4 of the **Quickstart** section to run the application.

- Replace the Charts `baseUrl` string with the base URL you copied from the MongoDB Charts Embedded Chart menu (look for `\~REPLACE\~` in the comments)
- Replace the `chartId` string with the chart ID you copied from the MongoDB Charts Embedded Chart menu (look for `\~REPLACE\~` in the comments)

## Next Steps

Once you gain an understanding of the API, consider the following

- Take on the optional steps to prepare and manipulate your own data source rather than the sample.
- Think whether an unauthenticated chart is the feature you're after. [Embedding iframes](https://docs.mongodb.com/charts/master/embedded-chart-options/) from Charts is a great way to showcase your data if you don't need the user to interact with the chart.
- Consider the data you're making available, and the queries you're allowing. If the data is sensitive and you need to ensure the charts can only be accessed by authorized people, you should look at using authenticated embedding.

Happy Charting! 🚀 📈
