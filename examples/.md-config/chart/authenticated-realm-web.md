# MongoDB Charts Embedding Example - App Services Authentication

#include "examples/docs/chart/background/start-block.md"

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/authenticated-realm-web)_

#include "examples/docs/chart/background/desc-simple.md"

#include "examples/docs/chart/background/desc-extended.md"

This sample shows how to use the JavaScript Embedding SDK to render **authenticated** embedded charts, specifically via configuring **Atlas App Services** as an authentication provider. The sample app is already set up to authenticate with an App Services application hosted by the Charts Development team.

This sample also demonstrates data filtering by role, thanks to the App Services Rules system. See more details [here](https://www.mongodb.com/docs/atlas/app-services/mongodb/define-roles-and-permissions/). Simply login with either `australianEmployee@mongodb.com` or `canadianEmployee@mongodb.com`, and take note of the different results!

#include "examples/docs/chart/background/features-authenticated.md"
- 🔑 App Services authentication
- 🙋‍♂️ Data filtering by App Services User Role

#include "examples/docs/quickstart.md"

#include "examples/docs/realm-credentials.md"

#include "examples/docs/chart/preparing-realm-app.md"

#include "examples/docs/chart/preparing-chart-for-embedding/create-chart-to-embed.md"

#include "examples/docs/chart/preparing-chart-for-embedding/enable-authenticated-access.md"

#include "examples/docs/chart/preparing-chart-for-embedding/create-authentication-provider-realm.md"

#include "examples/docs/chart/using-own-data/start-block.md"
    - Open the _index.js_ file (`src/index.js`)
    - Replace the Realm App ID string. `Realm.App({id: '<your-app-id>'})`
#include "examples/docs/chart/using-own-data/replace-block.md"

#include "examples/docs/chart/next-steps.md"
- Play with App Services Rules system, and change how different accounts see your Chart.
- Think whether an authenticated chart is the feature you're after. If you're simply looking for a way to show off your data, [unauthenticated embedding](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/unauthenticated) simplifies the workflow even further.

#include "examples/docs/happy-charting.md"