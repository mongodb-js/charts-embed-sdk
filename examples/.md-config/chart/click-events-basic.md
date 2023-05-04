# MongoDB Charts Embedding Example - Click Events

#include "examples/docs/chart/background/start-block.md"

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/click-events-basic)_

#include "examples/docs/chart/background/desc-simple.md"

#include "examples/docs/chart/background/desc-click-events.md"
This sample shows the basics of how to subscribe to and handle click events, including extracting relevant details about the chart elmement that was clicked. You can also see a more advanced demo that demonstrates [interactive filtering](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/click-events-filtering).

#### The features included in this demo are as follows:

- Adding a click event handler to a chart, using code similar to:

```javascript
chart.addEventListener("click", callback);
```

- Highlighting the element clicked on the chart, using the following code:

```javascript
chart.setHighlight(payload.selectionFilter)
```

- Parsing the payload returned to the callback event. A typical click event's payload will look something like this:

```json
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

More information regarding how to handle click events can be found in the [Charts documentation](https://docs.mongodb.com/charts/saas/handle-click-events/).

#include "examples/docs/quickstart.md"

#include "examples/docs/chart/preparing-chart-for-embedding/create-chart-to-embed.md"

#include "examples/docs/chart/preparing-chart-for-embedding/enable-unauthenticated-access.md"

#include "examples/docs/chart/using-own-data/start-block.md"
    - Open the _index.js_ file (`src/index.js`)
#include "examples/docs/chart/using-own-data/replace-block.md"
#include "examples/docs/chart/using-own-data/end-block.md"

#include "examples/docs/chart/next-steps.md"
- Embed multiple charts, and use the click events to filter one chart based on the click events detected on the other. This is demonstrated in our
  [interactive filtering](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/click-events-filtering) example.

#include "examples/docs/footer.md"