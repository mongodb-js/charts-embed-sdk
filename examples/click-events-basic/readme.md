# MongoDB Charts Embedding Example - Click Events 

## Background

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/click-events-basic)_

MongoDB Charts allows you to create visualizations of your MongoDB data using a simple web interface. You can view the visualizations within the Charts UI, or you can use the Embedding feature to render the charts in an external web application.

When you embed charts using the Embedding SDK, you are able to subscribe to events that show when a user clicked on a chart, and the details of the element on which they clicked. This feature can be used to build interactive charts. This sample shows the basics of how to subscribe to and handle click events, including extracting relevant details about the chart elmement that was clicked. You can also see a more advanced demo that demonstrates [interactive filtering](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/click-events-filtering).

#### The features included in this demo are as follows:

- Adding a click event handler to a chart, using code similar to:
```
chart.addEventListener("click", callback);
```

- Highlighting the element clicked on the chart, using the following code:
```
chart.setHighlight(payload.selectionFilter)
```

- Parsing the payload returned to the callback event. A typical click event's payload will look something like this:
```
{
  "chartId": "c0774a27-3432-4207-b795-afeb56243652",
  "event": {
    "type": "click",
    "altKey": false,
    "ctrlKey": false,
    "shiftKey": false,
    "metaKey": false,
    "offsetX": 152,
    "offsetY": 176,
    "clientX": 172,
    "clientY": 241,
    "pageX": 172,
    "pageY": 241,
    "screenX": 172,
    "screenY": 312
  },
  "data": {
    "y": {
      "label": "unwind array 'genres'",
      "value": "Adventure"
    },
    "x": {
      "label": "count ( _id )",
      "value": 659
    },
    "color": {
      "label": "year",
      "value": "2000 - 2010",
      "lowerBound": 2000,
      "upperBound": 2010
    }
  },
  "target": {
    "type": "rect",
    "role": "mark",
    "fill": "#8CB6F2"
  },
  "apiVersion": 1
}
```

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

## Running this Sample with your data

1. If you do not wish to use our sample data and have completed the above steps to prepare your own chart for embedding,
   - Open the _index.js_ file (`src/index.js`)
   - Replace the `baseUrl` string on with the base URL you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
   - Replace the `chartId` string on with the chart ID you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
2. Run `npm install` to install the package dependencies.
3. Run `npm start` to launch the sample application

This should create a local server running the Charts demo. Open a web browser and navigate to `http://localhost:1234` in the url bar to see the sample.

## Next Steps

Once you gain an understanding of the API, consider the following

- Embed multiple charts, and use the click events to filter one chart based on the click events detected on the other. This is demonstrated in our
[interactive filtering](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/click-events-filtering) example.

Happy Charting! 🚀📈
