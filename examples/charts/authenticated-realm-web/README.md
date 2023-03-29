# MongoDB Charts Embedding Example - App Services Authentication

## Background

📄 _[See the MongoDB Charts Embedding Docs for more details](https://docs.mongodb.com/charts/saas/embedding-charts/)_

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/authenticated-realm-web)_

MongoDB Charts allows you to create visualizations of your MongoDB data using a simple web interface. You can view the visualizations within the Charts UI, or you can use the Embedding feature to render the charts in an external web application.

Charts can be embedded either using a simple IFRAME snippet, or by using the Charts Embedding SDK from your JavaScript code. When using the SDK, embedded charts can be either unauthenticated (meaning anyone who has access to the page where the chart is embedded can view the chart), or authenticated (whereby the user can only view the chart if they have an active authentication session linked to a Charts authentication provider).

This sample shows how to use the JavaScript Embedding SDK to render **authenticated** embedded charts, specifically via configuring **Atlas App Services** as an authentication provider. The sample app is already set up to authenticate with an App Services application hosted by the Charts Development team.

This sample also demonstrates data filtering by role, thanks to the App Services Rules system. See more details [here](https://www.mongodb.com/docs/atlas/app-services/mongodb/define-roles-and-permissions/). Simply login with either `australianEmployee@mongodb.com` or `canadianEmployee@mongodb.com`, and take note of the different results!

#### The features included in this demo are as follows:

- 📈 Render an embedded chart on a web page
- 🔒 Only render charts to valid users
- 🔑 App Services authentication
- 🙋‍♂️ Data filtering by App Services User Role

## Quickstart

_The following steps presume the use of npm, though yarn works as well._

1. Ensure you have Node installed. You can confirm with `node --version`. On some operating systems, Node is available as the `nodejs` binary instead.

2. Clone the Git repository or download the code to your computer.

3. Run `npm install` to install the package dependencies.

4. Run `npm start` to start the application. This will utilise parcel.js.
   - Optional Parcel.js documentation https://parceljs.org/ for more information on what this is

This should create a local server running the Charts demo. Open a web browser and navigate to `http://localhost:1234` in the url bar to see the sample.

The two hard coded credentials used in this demo are:

```
username: australianEmployee@mongodb.com
password: password
```

```
username: canadianEmployee@mongodb.com
password: password
```

And they will display localised data thanks to the configured App Services User Roles.

## Authenticate with your App Services App

This sample is preconfigured to render, and more specifically, **authenticate** users who are verified to view a specific chart. You can run the sample as-is, or you can modify it to render and authenticate your own chart by completing the following steps:

### Prepare your App Services App

Choose or create an App which will be used to authenticate users who wish to view your chart.

1. Log onto Atlas App Services

   - Create App Services App if you haven't already

2. Click on Users on the left navigation column

3. Click on Providers

4. Set up a provider, or utilise and existing one. One of the easiest providers to setup is Email/Password

   1. Click on Edit for the Email/Password Provider
   2. Enable the Provider
   3. Set User Confirmation to automatically confirm users
   4. Set Password Reset to send a reset email
      1. Set the reset URL to `http://localhost`
      2. You can also do this for confirming users if you prefer
   5. Save these settings.
   6. Deploy these changes

5. Click the Users tab
6. Click Add New User
7. Fill out the new User details

### Optionally, Prepare your Dataset

If you want to use your App to filter data for each user, (Like we have done in our sample) set up an [Atlas service](https://www.mongodb.com/cloud/atlas) and corresponding [Rules](https://www.mongodb.com/docs/atlas/app-services/mongodb/define-roles-and-permissions/) that filter the data as desired. Injected Filters and [Dashboard filtering](https://www.mongodb.com/blog/post/filter-your-dashboards-with-mongodb-charts) are other Charts features one can use to attain similar functionality.

## Preparing your Chart for Embedding

This sample is preconfigured to render a specific chart. You can run the sample as-is, or you can modify it to render your own chart by completing the following steps:

### Create chart to embed

1. Log onto MongoDB Charts.

2. If you haven't done so already, create a chart on any dashboard that you would like to embed.

### Enable data source for authenticated access

3. Go to the Data Sources tab found on the side panel.

4. Find the data source that you want to use on the chart by selecting the deployment, database and collection. Once found, click on the Manage button in the Data access section to access the Data source management page.

5. Make sure the "External users can view data in this data source" option is toggled on and "Allow authenticated data access" has been selected.

### Enable chart for embedded access

6. Go to the **Dashboards** tab on the side panel, and select the dashboard that contains the chart you wish to embed.

7. Find the chart you want to embed, click the **...** menu and select **Embed chart**.

8. Ensure the **Authenticated** tab is selected and turn on '**Enable authenticated access**'.

9. Note the **Chart ID** and the **Base URL**, as you will need them for running the demo.

### Create authentication provider

10. Go to the Embedding tab on the side panel.

11. Ensure the **Authentication Settings** tab is selected and press the **Add** button in the **Authentication providers** section.

12. Fill in the details like so:

    - Name: `App Services Auth Provider` _Note, this is only for your convenience and can be named anything_
    - Provider: `Atlas App Services`
    - Atlas Project: Select the Atlas project that contains the App Services Application you configured in the previous steps
    - App ID: Select the ID of the App Services App you configured in the previous steps

13. Click "Save"

     **Optional**

   - Turn on "Fetch data using App Services".
     - This option should be turned on when you wish to delegate data fetching logic to your App. Specifically, if you have configured App Services Rules that apply to the users that are being authenticated, and you wish to have these rules enforced before the chart is rendered, turn this setting on.
     - This setting should be left off if you only require App Services to authenticate valid users, and you have no desire to filter data by their role in your App. i.e, all valid users see the same chart, invalid users cannot see the chart.
   - Enter the Service name that retrieves your data. To find the name of this,
     - Navigate to "Linked Data Sources" on the left hand navigation panel.
     - Look for the "Service Name" associated with your deployment.

## Running this Sample with your data

1. If you do not wish to use our sample data and have completed the above steps to prepare your own chart for embedding,
    - Open the _index.js_ file (`src/index.js`)
    - Replace the Realm App ID string. `Realm.App({id: '<your-app-id>'})`
    - Replace the Charts `baseUrl` string with the base URL you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
    - Replace the `chartId` string with the chart ID you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)

## Next Steps

Once you gain an understanding of the API, consider the following

- Take on the optional steps to prepare and manipulate your own data source rather than the sample.
- Play with App Services Rules system, and change how different accounts see your Chart.
- Think whether an authenticated chart is the feature you're after. If you're simply looking for a way to show off your data, [unauthenticated embedding](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/unauthenticated) simplifies the workflow even further.

Happy Charting! 🚀 📈
