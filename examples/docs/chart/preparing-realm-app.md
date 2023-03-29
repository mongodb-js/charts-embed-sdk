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