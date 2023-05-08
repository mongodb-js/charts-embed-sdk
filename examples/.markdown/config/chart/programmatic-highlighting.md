# MongoDB Charts Embedding Example - Programmatic Highlighting

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/programmatic-highlighting)_

## Background

#include "examples/.markdown/docs/chart/embed-sdk-introduction.md"

When you embed charts using the Embedding SDK, you are able to customise the embedded charts by setting attributes. One of these is `setHighlight()`, which lets you emphasise part of your charts to attract attention. This feature adds a layer of richness to interactive charts, and can be used to show relationships between charts. To learn the basics of interactive charts, see the [click events](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/click-events-basic) sample. To learn about other properties you can use to customise your charts, please refer to the [API documentation](https://www.npmjs.com/package/@mongodb-js/charts-embed-dom).

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

#include "examples/.markdown/docs/quickstart.md"

## Preparing your Chart for Embedding

#include "examples/.markdown/docs/chart/chart-preparation-steps/create-chart-to-embed.md"

#include "examples/.markdown/docs/chart/chart-preparation-steps/enable-unauthenticated-access.md"

## Running this Sample with your data

#include "examples/.markdown/docs/chart/using-own-data-general-steps.md"

#include "examples/.markdown/docs/footer.md"