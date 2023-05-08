# MongoDB Charts Embedding Example - App Services Authentication [DEPRECATED]

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/authenticated-realm-deprecated)_

> ## :rotating_light: The [`mongodb-stitch-browser-sdk`](https://www.npmjs.com/package/mongodb-stitch-browser-sdk) package is now deprecated. Please use [`realm-web`](https://www.npmjs.com/package/realm-web) instead and follow the [authenticated-realm-web](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/authenticated-realm-web) example.

## Background

#include "examples/.markdown/docs/chart/embed-sdk-introduction.md"

This sample shows how to use the JavaScript Embedding SDK to render **authenticated** embedded charts, specifically via configuring **Atlas App Services** as an authentication provider. The sample app is already set up to authenticate with an App Services application hosted by the Charts Development team.

This sample also demonstrates data filtering by role, thanks to the App Services Rules system. See more details [here](https://www.mongodb.com/docs/atlas/app-services/mongodb/define-roles-and-permissions/). Simply login with either `australianEmployee@mongodb.com` or `canadianEmployee@mongodb.com`, and take note of the different results!

#include "examples/.markdown/docs/chart/authenticated-common-features.md"
- 🔑 App Services authentication
- 🙋‍♂️ Data filtering by App Services User Role

## Quickstart

#include "examples/.markdown/docs/quickstart.md"

#include "examples/.markdown/docs/realm-credentials.md"

## Authenticate with your App Services App

#include "examples/.markdown/docs/chart/realm-app-preparation-steps.md"

## Preparing your Chart for Embedding

#include "examples/.markdown/docs/chart/chart-preparation-steps/create-chart-to-embed.md"

#include "examples/.markdown/docs/chart/chart-preparation-steps/enable-authenticated-access.md"

#include "examples/.markdown/docs/chart/chart-preparation-steps/create-authentication-provider-realm.md"

## Running this Sample with your data

#include "examples/.markdown/docs/chart/using-own-data-general-steps.md"
- Replace the Realm `AppClientID` string with the base URL for your App Services app (look for "\~REPLACE\~" in the comments)
- Replace the Stitch App ID in the Stitch Constructor, and remove the base URL. `Stitch.initializeAppClient('<your-app-id>')`

## Next Steps

#include "examples/.markdown/docs/chart/next-steps-common-text.md"
- Play with App Services Rules system, and change how different accounts see your Chart.
- Think whether an authenticated chart is the feature you're after. If you're simply looking for a way to show off your data, [unauthenticated embedding](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/unauthenticated) simplifies the workflow even further.

#include "examples/.markdown/docs/footer.md"