# MongoDB Charts Embedding Example - Google Authentication

#include "examples/docs/chart/background/start-block.md"

#include "examples/docs/chart/background/desc-simple.md"

#include "examples/docs/chart/background/desc-extended.md"

This sample shows how to use the JavaScript Embedding SDK to render **authenticated** embedded charts, specifically via configuring **Google** as an authentication provider. The sample app is already set up to authenticate with a Google Client ID hosted by the Charts Development team.

#include "examples/docs/chart/background/features-authenticated.md"
- 𝗚 Google authentication

#include "examples/docs/quickstart-google.md"

## Getting a Google Client ID

This sample is pre-configured with a MongoDB-owned test Client ID. To use Google Sign-In in your own apps, you must create your own Client ID.

Steps on how to configure a Project with Google and attain a Google Client ID can be found [here](https://developers.google.com/identity/sign-in/web/sign-in). You'll need to set the Origin and Redirect URIs to whatever you use in your application. In our sample, that is http://localhost:3000.

#include "examples/docs/chart/preparing-chart-for-embedding/create-chart-to-embed.md"

#include "examples/docs/chart/preparing-chart-for-embedding/enable-authenticated-access.md"

    - Name: `Google` _Note, this is only for your convenience and can be named anything you want here_
    - Provider: `Google`
    - Google Client ID: _See above for
      - This should be the entire string `<encodedData>.apps.googleusercontent.com`

#include "examples/docs/chart/using-own-data/start-block.md"
    - Open the `index.html` file
#include "examples/docs/chart/using-own-data/replace-block.md"
    - **Optional**
      - Replace the `<meta content="YourClientIDHere">` with your own Google Client ID. (look for "\~REPLACE\~" in the comments)

#include "examples/docs/chart/next-steps.md"
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

#include "examples/docs/happy-charting.md"