# MongoDB Charts Embedding Example - Interactive Filtering

## Background

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/click-events-filtering)_

MongoDB Charts allows you to create visualizations of your MongoDB data using a simple web interface. You can view the visualizations within the Charts UI, or you can use the Embedding feature to render the charts in an external web application.

When you embed charts using the Embedding SDK, you are able to subscribe to events that show when a user clicked on a chart, and the details of the element on which they clicked. This feature can be used to build interactive charts. This sample shows how to implement interactive filtering, whereby clicks on one chart are used to generate filters which are applied to a second chart. To learn the basics of chart click events, see the [click events](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/click-events-basic) sample.

#### The features included in this demo are as follows:

- Adding a click event handler to a chart, using code similar to:

```
chart.addEventListener("click", callback, options);
```

- Adding an option to make just certain parts of the chart clickable (in this case only the bars)
- Obtaining an MQL filter document based on the data returned in the payload using `selectionFilter`
- Highlighting the clicked element on the first chart using `setHighlight`
- Filtering a second chart using the `setFilter` method

## Quickstart

_The following steps presume the use of npm, though yarn works as well._

1. Ensure you have Node installed. You can confirm with `node --version`. On some operating systems, Node is available as the `nodejs` binary instead.

2. Clone the Git repository or download the code to your computer.

3. Run `npm install` to install the package dependencies.

4. Run `npm start` to start the application. This will utilise parcel.js
   - Optional Parcel.js documentation https://parceljs.org/ for more information on what this is

This should create a local server running the Charts demo. Open a web browser and navigate to `http://localhost:1234` in the url bar to see the sample.

## Preparing your Chart for Embedding

This sample is preconfigured to render a specific chart. You can run the sample as-is, or you can modify it to render your own chart by completing the following steps:

1. Log onto MongoDB Charts

2. If you haven't done so already, create a chart on any dashboard that you would like to embed.

3. Go to the Data Sources tab, find the data source that you are using on the chart, and choose External Sharing Options from the ... menu. Make sure that embedding is enabled for this data source and select '**Unauthenticated or Verified Signature**'

4. Find the chart you want to embed, click the **...** menu and select **Embed Chart**

5. Ensure the Unauthenticated tab is selected and turn on '**Enable unauthenticated access**'

6. Select the **Javascript SDK** option

7. Note the Chart ID and the Chart Base URL, as you will need them for running the demo.

8. In the same menu, note the **User Specified Filters** option. If you wish to try out filtering on your own dataset, you will need to whitelist a field by which to filter on. For example, our sample Movies dataset filters on `year` and `genres`.
   Furthermore, the filter related code in `src/index.js` will need to be updated to conform to the filter query you wish to apply.

## Running this Sample with your data

1. If you do not wish to use our sample data and have completed the above steps to prepare your own chart for embedding,

   - Open the _index.js_ file (`src/index.js`)
   - Replace the `baseUrl` string on with the base URL you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
   - Replace the `chartId` string on with the chart ID you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
   - Replace the filter in the `addEventListener` callback with a suitable filter document for your chart

2. Run `npm install` to install the package dependencies.
3. Run `npm start` to launch the sample application

This should create a local server running the Charts demo. Open a web browser and navigate to `http://localhost:1234` in the url bar to see the sample.

Happy Charting! 🚀📈
