# MongoDB Charts Embedding Example - Google Authentication

## Background

📄 _[See the MongoDB Charts Embedding Docs for more details](https://docs.mongodb.com/charts/saas/embedding-charts/)_

MongoDB Charts allows you to create visualizations of your MongoDB data using a simple web interface. You can view the visualizations within the Charts UI, or you can use the Embedding feature to render the charts in an external web application.

Charts can be embedded either using a simple IFRAME snippet, or by using the Charts Embedding SDK from your JavaScript code. When using the SDK, embedded charts can be either unauthenticated (meaning anyone who has the embed code can view the chart), or authenticated (whereby the user can only view the chart if they have an active authentication session linked to a Charts authentication provider).

This sample shows how to use the JavaScript Embedding SDK to render **authenticated** embedded charts, specifically via configuring **Google** as an authentication provider. The sample app is already set up to authenticate with a Google Client ID hosted by the Charts Development team.

#### The features included in this demo are as follows:

- 📈 Render an embedded chart on a web page
- 🔒 Only render charts to valid users
- 𝗚 Google authentication

## Quickstart

_The following steps presume the use of npm, though yarn works as well._

1. Ensure you have Node installed. You can confirm with `node --version`. On some operating systems, Node is available as the `nodejs` binary instead.

2. Clone the Git repository or download the code to your computer.

3. Run `npm install` to install the package dependencies.

4. Run `npm start` to start the application. This will utilise parcel.js
   - Optional Parcel.js documentation https://parceljs.org/ for more information on what this is

This should create a local server running the Charts demo. Open a web browser and navigate to `http://localhost:3000` in the url bar to see the sample. Use Incognito mode to see the full Google login flow rather then signing in with your Chrome Google account.

Logging in with any valid Google account will allow you to render the chart.

## Getting a Google Client ID

This sample is pre-configured with a MongoDB-owned test Client ID. To use Google Sign-In in your own apps, you must create your own Client ID.

Steps on how to configure a Project with Google and attain a Google Client ID can be found [here](https://developers.google.com/identity/sign-in/web/sign-in). You'll need to set the Origin and Redirect URIs to whatever you use in your application. In our sample, that is http://localhost:3000.

## Preparing your Chart for Embedding

This sample is preconfigured to render a specific chart. You can run the sample as-is, or you can modify it to render your own chart by completing the following steps:

### Create chart to embed

1. Log onto MongoDB Charts

2. If you haven't done so already, create a chart you would like to embed on any dashboard.

### Enable data source for authenticated access

3. Go to the Data Sources tab found on the side panel.

4. Find the data source that you want to use on the chart by selecting the deployment, database and collection. Once found, click on the Manage button in the Data access section to access the Data source management page.

5. Make sure the "External users can view data in this data source" option is toggled on and "Allow authenticated data access" has been selected.

### Enable chart for embedded access

6. Go to the Dashboards tab on the side panel, and select the dashboard that contains the chart you wish to embed.

7. Find the chart you want to embed, click the **...** menu and select **Embed chart**

8. Ensure the Unauthenticated tab is selected and turn on '**Enable Authenticated access**'

9. Note the Chart ID and the Base URL, as you will need them for running the demo.

### Create authentication provider

10. Go to the Embedding tab on the side panel.

11. Ensure the "Authentication Settings" tab is selected and press the "Add" button in the Authentication providers section.

12. Go to the Admin Settings tab on the left navigation column. Under 'Embedding Authentication Providers', click 'Add New Provider'.

13. Fill in the details like so:

   - Name: `Google` _Note, this is only for your convenience and can be named anything you want here_
   - Provider: `Google`
   - Google Client ID: _See above for 
     - This should be the entire string `<encodedData>.apps.googleusercontent.com`

## Running this Sample with your data

If you do not wish to use our sample data and have completed the above steps to prepare your own chart for embedding,

- Open the `index.html` file
- Replace the Charts `baseUrl` string with the base URL you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
- Replace the `chartId` string with the chart ID you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
- **Optional**
  - Replace the `<meta content="YourClientIDHere">` with your own Google Client ID. (look for "\~REPLACE\~" in the comments)

## Next Steps

Once you gain an understanding of the API, consider the following

- Take on the optional steps to prepare and manipulate your own data source rather than the sample.
- Use Incognito Mode to see a pure login experience
- Consider how you want to secure your data with the Google Embedding Provider. Anybody can create a Google account. Consider using Charts Injected Filters to make your application more secure.

  - For example, consider the following injected filter

  ```javascript
  // Reject tokens that aren't from example.com domain
  if (context.token.hd != "yourCompany.com") {
    return false;
  }
  return true;
  ```

  - ![Screen Shot 2020-04-21 at 1 47 54 pm](https://user-images.githubusercontent.com/19422770/79823279-b9b35880-83d6-11ea-8370-774bcde80252.png)
  - This will only allow users from your company domain to view the chart data 🔒

- Think whether an authenticated chart is the feature you're after. If you're simply looking for a way to show off your data, [unauthenticated embedding](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/unauthenticated) simplifies the workflow even further.

Happy Charting! 🚀 📈
