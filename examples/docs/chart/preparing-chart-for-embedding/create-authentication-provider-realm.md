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