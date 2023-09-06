# MongoDB Charts Embedding Example - Interactive Filtering

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/click-events-filtering)_

## Background

#include "examples/.markdown/docs/chart/embed-sdk-introduction.md"

#include "examples/.markdown/docs/chart/click-events-description.md"

This sample shows how to implement interactive filtering, whereby clicks on one chart are used to generate filters which are applied to a second chart. To learn the basics of chart click events, see the [click events](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/click-events-basic) sample.

More information regarding how to handle click events can be found in the [Charts documentation](https://docs.mongodb.com/charts/saas/handle-click-events/).

#### The features included in this demo are as follows:

- Adding a click event handler to a chart, using code similar to:

```javascript
chart.addEventListener("click", callback, options);
```

- Adding an option to make just certain parts of the chart clickable (in this case only the bars)
- Obtaining an MQL filter document based on the data returned in the payload using `selectionFilter`
- Highlighting the clicked element on the first chart using `setHighlight`
- Filtering a second chart using the `setFilter` method

## Quickstart

#include "examples/.markdown/docs/quickstart.md"

## Preparing your Chart for Embedding

#include "examples/.markdown/docs/chart/chart-preparation-steps/create-chart-to-embed.md"

#include "examples/.markdown/docs/chart/chart-preparation-steps/enable-unauthenticated-access.md"

11. In the same menu, note the **User Specified Filters** option. If you wish to try out filtering on your own dataset, you will need to whitelist a field by which to filter on. For example, our sample Movies dataset filters on `year` and `genres`.

      Furthermore, the filter related code in `src/index.js` will need to be updated to conform to the filter query you wish to apply.

## Running this Sample with your data

#include "examples/.markdown/docs/chart/using-own-data-general-steps.md"
- Replace the filter in the `addEventListener` callback with a suitable filter document for your chart

#include "examples/.markdown/docs/footer.md"