# MongoDB Charts Embedding Example - Realm Authentication

## Background

📄 _[See the MongoDB Charts Embedding Docs for more details](https://docs.mongodb.com/charts/saas/embedding-charts/)_


MongoDB Charts allows you to create visualizations of your MongoDB data using a simple web interface. You can view the visualizations within the Charts UI, or you can use the Embedding feature to render the charts in an external web application.

Charts can be embedded either using a simple IFRAME snippet, or by using the Charts Embedding SDK from your JavaScript code. When using the SDK, embedded charts can be either unauthenticated (meaning anyone who has the embed code can view the chart), or authenticated (whereby the user can only view the chart if they have an active authentication session linked to a Charts authentication provider).

This sample shows how to use the JavaScript Embedding SDK to render **authenticated** embedded charts, specifically via configuring **MongoDB Realm** as an authentication provider. The sample app is already set up to authenticate with a Realm Application hosted by the Charts Development team. 

This sample also demonstrates data filtering by role, thanks to Realm's extensive rules system. See more details [here](https://docs.mongodb.com/stitch/mongodb/define-roles-and-permissions/). Simply login with either australianEmployee@mongodb.com or canadianEmployee@mongodb.com, and take note of the different results!

#### The features included in this demo are as follows:

- 📈 Render an embedded chart on a web page
- 🔒 Only render charts to valid users
- 🔑 Realm authentication
- 🙋‍♂️ Data filtering by Realm User Role.

## Quickstart
_The following steps presume the use of npm, though yarn works as well._

1. Ensure you have Node installed. You can confirm with `node --version`. On some operating systems, Node is available as the `nodejs` binary instead.

2. Clone the Git repository or download the code to your computer.

3. Run `npm install` to install the package dependencies.
   
4. Run `npm install -g parcel-bundler` to install Parcel. You may need to run `sudo npm install -g parcel-bundler` if you lack permissions.
   - Optional Parcel.js documentation https://parceljs.org/ for more information on what this is
  
5. Run `parcel index.html` to start the application.

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
And they will display localised data thanks to the configured Realm User Roles.

## Authenticate with your Realm App

This sample is preconfigured to render, and more specifically, **authenticate** users who are verified to view a specific chart. You can run the sample as-is, or you can modify it to render your own chart by completing the following steps:

### Prepare MongoDB Realm
Choose or create a Realm Cloud app which will be used to authenticate users who wish to view your chart.

1. Log onto MongoDB Realm

   - Create Realm App if you haven't already

2. Click on Users on the left navigation column
   
3. Click on Providers
   
4. Set up a provider, or utilise and existing one. One of the easiest providers to setup is Email/Password
   1. Click on Edit for the Email/Password Provider
   2. Enable the Provider
   3. Set User Confirmation to automatically confirm users
   1. Set Password Reset to 'Run a password reset function', and leave it as the default.
   2. Save these settings.
   3. Deploy these changes

5. Click the Users tab
6. Click Add New User
7. Fill out the new User details

### Optionally, Prepare your Dataset
If you want the data to be filtered for each user, (Like we have done in our sample) set up an [Atlas service](https://www.mongodb.com/cloud/atlas) and corresponding [Rules](https://docs.mongodb.com/stitch/mongodb/define-roles-and-permissions/) that filter the data as desired.


### Prepare MongoDB Charts

1. Log onto MongoDB Charts

2. If you haven't done so already, create a chart on any dashboard that you would like to embed.

3. Go to the Data Sources tab on the left navigation column. Find the data source that you are using on the chart, and choose External Sharing Options from the ... menu. Make sure that embedding is enabled for this data source and select '**Authenticated Embedding Only**'

4. Go to the Admin Settings tab on the left navigation column. Under 'Embedding Authentication Providers', click 'Add New Provider'. 

   - Select the Realm Provider.
   - Select the Realm Project that contains the Realm Application you configured in the previous steps
   - Select the Realm Application you configured in the previous steps
  
      **Optional** 
   - Turn on Fetch data using the Realm App.
     - This option should be turned on when you wish to delegate data fetching logic to your Realm App. Specifically, if you have configured Realm Rules that apply to the users that are being authenticated, and you wish to have these rules enforced before the chart is rendered, turn this setting on.
     - This setting should be left off if you only require Realm to authenticate valid users, and you have no desire to filter data by their role in your Realm App. i.e, all valid users see the same chart, invalid users cannot see the chart. 
   - Enter the Realm Service name that retrieves your data. By default, this will be `mongodb-atlas`

![](https://i.imgur.com/e5DDM4B.png)

5. Go to the Dashboards tab on the left navigation column, and select the dashboard that contains the chart you wish to embed. 

6. Find the chart you want to embed, click the **...** menu and select **Embed Chart**

7.  Ensure the Unauthenticated tab is selected and turn on '**Enable Authenticated access**'

8.  Note the Chart ID and the Chart Base URL, as you will need them for running the demo.


## Running this Sample with your data

If you do not wish to use our sample data and have completed the above steps to prepare your own chart for embedding,
   - Open the _index.js_ file (`src/index.js`)
   - Replace the `baseUrl` string on with the base URL you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
   - Replace the `chartId` string on with the chart ID you copied from the MongoDB Charts Embedded Chart menu (look for "\~REPLACE\~" in the comments)
   - Replace the Stitch App ID in the Stitch Constructor, and remove the base URL. `Stitch.initializeAppClient('<your-app-id>')` 

## Next Steps

Once you gain an understanding of the API, consider the following

- Take on the optional steps to prepare and manipulate your own data source rather than the sample.
- Play with Realms Rules system, and change how different accounts see your Chart.
- Think whether an authenticated chart is the feature you're after. If you're simply looking for a way to show off your data, unauthenticated embedding simplifies the workflow even further.

Happy Charting! 🚀📈
