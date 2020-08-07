# MongoDB Charts Embedding Example - Timeline Chart

## Background

📄 _[See the MongoDB Charts Embedding Docs for more details](https://docs.mongodb.com/charts/saas/embedding-charts/)_

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

1. Ensure you have Node installed. You can confirm with `node --version`.

2. Clone the Git repository or download the code to your computer.

3. Run `npm install` to install the package dependencies.

4. Run `npm start` to start the application. It will open directly in the browser at this address `http://localhost:3000`.

## Preparing your Chart for Embedding

This sample is preconfigured to render specific charts. You can run the sample as-is, or you can modify it to render your own charts by completing the following steps:

1. Log onto MongoDB Charts

2. If you haven't done so already, create a chart on any dashboard that you would like to embed.

3. Go to the Data Sources tab, find the data source that you are using on the chart, and choose External Sharing Options from the (...) menu. Make sure that embedding is enabled for this data source and select '**Unauthenticated or Verified Signature**'

4. Find the chart you want to embed, click the **(...)** menu and select **Embed Chart**

5. Ensure the Unauthenticated tab is selected and turn on '**Enable unauthenticated access**'

6. Ensure that you whitelist all fields that you want to use filters for.

7. Select the **Javascript SDK** option

8. Note the Chart ID and the Chart Base URL, as you will need them for running the demo.

## Running this Sample with your data

1. If you do not wish to use our sample data and have completed the above steps to prepare your own chart for embedding,
   - Open the _Dashboard.jsx_ file (`src/Dashboard.jsx`)
   - Replace the `baseUrl` string on with the base URL you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
   - Replace the `chartId` string on with the chart ID you copied from the MongoDB Charts Embedded Chart menu. The example code shows 2 charts. (look for "\~REPLACE\~" in the comments)
   - Change the filter to whatever makes sense for your project. Currently the filter gets the data between two years and is using the "Year" field for filtering.
