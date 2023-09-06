# MongoDB Charts Embedding Example - Timeline Chart

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/timeline-charts-example)_

## Background

📄 _[See the MongoDB Charts Embedding Docs for more details](https://docs.mongodb.com/charts/saas/embedding-charts/)_

MongoDB Charts allows you to create visualizations of your MongoDB data using a simple web interface. You can view the visualizations within the Charts UI, or you can use the Embedding feature to render the charts in an external web application.

Charts can be embedded either using a simple IFRAME snippet, or by using the Charts Embedding SDK from your JavaScript code. When using the SDK, embedded charts can be either unauthenticated (meaning anyone who has access to the page where the chart is embedded can view the chart), or authenticated (whereby the user can only view the chart if they have an active authentication session linked to a Charts authentication provider).

The example code in this directory is building a small react app, implementing a chart timeline using the Charts Embedding SDK.

What the application is doing is showing the distribution of Olympic medals through the years.

![timeline-retina-960x438-500ms](https://user-images.githubusercontent.com/51065986/89610627-5df5d800-d8be-11ea-954b-6d92086d9f58.gif)

We are using a [filter](https://docs.mongodb.com/charts/saas/filter-embedded-charts/#filter-data-on-charts-embedded-with-the-sdk) on the Olympic year, changing the filter every few seconds to turn it into a timelapse.

The idea is this - for every Olympic year we are filtering all data from the beginning of the Olympic games to the current year.

Example:

- First Olympic Year: in this case it's just the data for the first year
- Second Olympic Year: all data from First Olympic Year to Second Olympic Year
- Third Olympic Year: all data from First Olympic Year to Third Olympic Year
- ....
- Last Olympic Year: all data from First Olympic Year to Last Olympic Year, which in this case is all the data

The idea of doing this application was to show you some interactivity you can accomplish with the embedding SDK.
Doing timeline charts is not really a feature of the embedding SDK but it shows you that with a little bit of code you can do different things with your charts.

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

10. Note the **Chart ID** and the **Base URL**, as you will need them for running the demo. Ensure you have whitelisted all the fields you want to use filters for.

## Running this Sample with your data

If you do not wish to use our sample data and have completed the above steps to prepare your own chart for embedding, make the following changes to the index file. Most examples have a `src/index.js` file which needs to be modified, except the Google authentication example (`index.html`) and for the Timeline Charts example (modify `src/Dashboard.jsx` instead). When complete, refer to steps 3 & 4 of the **Quickstart** section to run the application.

- Replace the Charts `baseUrl` string with the base URL you copied from the MongoDB Charts Embedded Chart menu (look for `\~REPLACE\~` in the comments)
- Replace the `chartId` string with the chart ID you copied from the MongoDB Charts Embedded Chart menu (look for `\~REPLACE\~` in the comments)
- Change the filter to whatever makes sense for your project. Currently the filter gets the data between two years and is using the "Year" field for filtering.

Happy Charting! 🚀 📈
