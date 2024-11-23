# MongoDB Charts Embedding Example - Unauthenticated Embedded Chart

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/unauthenticated)_

## Background

#include "examples/.markdown/docs/chart/embed-sdk-introduction.md"

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

#include "examples/.markdown/docs/quickstart.md"

## Preparing your Chart for Embedding

#include "examples/.markdown/docs/chart/chart-preparation-steps/create-chart-to-embed.md"

#include "examples/.markdown/docs/chart/chart-preparation-steps/enable-unauthenticated-access.md"

11. **Optional**
   In the same menu, note the **User Specified Filters** option. If you wish to try out filtering on your own dataset, you will need to whitelist a field by which to filter on. For example, our sample AirBnB dataset filters on `address.country`.

      Furthermore, the filter related code in `src/index.js` will need to be updated to conform to the filter query you wish to run, and the options provided in `index.html` will need to be updated too. To be clear,
       - Update the query **field** in `src/index.js`
       - Update the query **values** in `index.html`

## Running this Sample with your data

#include "examples/.markdown/docs/chart/using-own-data-general-steps.md"

## Next Steps

#include "examples/.markdown/docs/chart/next-steps-common-text.md"
- Think whether an unauthenticated chart is the feature you're after. [Embedding iframes](https://docs.mongodb.com/charts/master/embedded-chart-options/) from Charts is a great way to showcase your data if you don't need the user to interact with the chart.
- Consider the data you're making available, and the queries you're allowing. If the data is sensitive and you need to ensure the charts can only be accessed by authorized people, you should look at using authenticated embedding.

#include "examples/.markdown/docs/footer.md"