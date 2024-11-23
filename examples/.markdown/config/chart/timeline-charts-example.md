# MongoDB Charts Embedding Example - Timeline Chart

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/timeline-charts-example)_

## Background

#include "examples/.markdown/docs/chart/embed-sdk-introduction.md"

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

#include "examples/.markdown/docs/quickstart.md"

## Preparing your Chart for Embedding

#include "examples/.markdown/docs/chart/chart-preparation-steps/create-chart-to-embed.md"

#include "examples/.markdown/docs/chart/chart-preparation-steps/enable-unauthenticated-access.md" Ensure you have whitelisted all the fields you want to use filters for.

## Running this Sample with your data

#include "examples/.markdown/docs/chart/using-own-data-general-steps.md"
- Change the filter to whatever makes sense for your project. Currently the filter gets the data between two years and is using the "Year" field for filtering.

#include "examples/.markdown/docs/footer.md"