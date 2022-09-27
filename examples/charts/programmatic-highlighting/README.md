# MongoDB Charts Embedding Example - Programmatic Highlighting

## Background

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/programmatic-highlighting)_

MongoDB Charts allows you to create visualizations of your MongoDB data using a simple web interface. You can view the visualizations within the Charts UI, or you can use the Embedding feature to render the charts in an external web application.

When you embed charts using the Embedding SDK, you ae able to customise the embedded charts by setting attributes. One of these is `setHighlight()`, which lets you emphasise part of your charts to attract attention. This feature adds a layer of richness to interactive charts, and can be used to show relationships between charts. To learn the basics of interactive charts, see the [click events](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/click-events-basic) sample. To learn about other properties you can use to customise your charts, please refer to the [API documentation](https://www.npmjs.com/package/@mongodb-js/charts-embed-dom).

More information regarding charts highlighting can be found in the [Charts documentation](https://docs.mongodb.com/charts/saas/handle-click-events/).

#### The features included in this demo are as follows:

- Adding chart highlighting:

```javascript
chart.setHighlight({ field: { $expr }});
```

- Highlighting two charts (one bar, one table) at the same time with the same filter expression
- Showing more complicated MQL filters with the drop down
- Allow custom filtering expressions by editing the textarea

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

### Create chart to embed

1. Log onto MongoDB Charts

2. If you haven't done so already, create a chart on any dashboard that you would like to embed.

### Enable data source for unauthenticated access

3. Go to the Data Sources tab found on the side panel.

4. Find the data source that you want to use on the chart by selecting the deployment, database and collection. Once found, click on the Manage button in the Data access section to access the Data source management page.

5. Make sure the "External users can view data in this data source" option is toggled on and "Allow unauthenticated data access" has been selected.

### Enable chart for embedded access

6. Find the chart you want to embed, click the **...** menu and select **Embed chart**

7. Ensure the Unauthenticated tab is selected and turn on '**Enable unauthenticated access**'

8.  Select the **Javascript SDK** option

9.  Note the Chart ID and the Base URL, as you will need them for running the demo.

## Running this Sample with your data

1. If you do not wish to use our sample data and have completed the above steps to prepare your own chart for embedding,

   - Open the _index.js_ file (`src/index.js`)
   - Replace the `baseUrl` string on with the base URL you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
   - Replace the `chartId` string on with the chart ID you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)

2. Run `npm install` to install the package dependencies.
3. Run `npm start` to launch the sample application

This should create a local server running the Charts demo. Open a web browser and navigate to `http://localhost:1234` in the url bar to see the sample.

Happy Charting! 🚀 📈
