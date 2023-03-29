# MongoDB Charts Embedding Example - Authenticated Embedded Chart

#include "examples/docs/chart/background/start-block.md"

#include "examples/docs/chart/background/desc-simple.md"

#include "examples/docs/chart/background/desc-extended.md"

This sample shows how to use the JavaScript Embedding SDK to render **authenticated** embedded charts, specifically via a custom jwt authentication. The sample app has its own authentication and token issuing logic. You may want to follow a similar approach if you are not integrating with an external authentication mechanism or your authentication is not based on JWTs. Alternatively, if you are using an existing authentication mechanism that issues JWTs, you can use those tokens to authenticate your chart rendering requests after configuring a Charts authentication provider that can validate the JWT.

#include "examples/docs/chart/background/features-authenticated.md"
- 🔑 Custom JWT authentication via `jsonwebtoken`

#include "examples/docs/quickstart.md"

#include "examples/docs/chart/preparing-chart-for-embedding/create-chart-to-embed.md"

#include "examples/docs/chart/preparing-chart-for-embedding/enable-authenticated-access.md"

    - Name: `Custom JWT` _Note, this is only for your convenience and can be named anything_
    - Provider: `Custom JSON Web Token`
    - Signing Algorithm: `HS256` _Note, this is the default signing algorithm for the `jsonwebtoken` library and many others_
    - Signing Key: `topsecret` _Note, this key must correlate with the key found in `config.js`_

#include "examples/docs/chart/using-own-data/start-block.md"
    - Open the _index.js_ file (`src/index.js`)
#include "examples/docs/chart/using-own-data/replace-block.md"
#include "examples/docs/chart/using-own-data/end-block.md"
Along with this, a local jwt authentication server will be spun up on `http://localhost:8000`.

The hard coded credentials used in this demo are:

- Username : `admin`
- Password: `password`

#include "examples/docs/chart/next-steps.md"
- Change the login logic to adapt to your project's security workflow.
- Think whether an authenticated chart is the feature you're after. If you're simply looking for a way to show off your data, [unauthenticated embedding](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/unauthenticated) simplifies the workflow even further.

#include "examples/docs/happy-charting.md"