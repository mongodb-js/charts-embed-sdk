# MongoDB Charts Embedding Example - Authenticated Embedded Chart

## Background

#include "examples/.markdown/docs/chart/embed-sdk-introduction.md"

This sample shows how to use the JavaScript Embedding SDK to render **authenticated** embedded charts, specifically via a custom jwt authentication. The sample app has its own authentication and token issuing logic. You may want to follow a similar approach if you are not integrating with an external authentication mechanism or your authentication is not based on JWTs. Alternatively, if you are using an existing authentication mechanism that issues JWTs, you can use those tokens to authenticate your chart rendering requests after configuring a Charts authentication provider that can validate the JWT.

#include "examples/.markdown/docs/chart/authenticated-common-features.md"
- 🔑 Custom JWT authentication via `jsonwebtoken`

## Quickstart

#include "examples/.markdown/docs/quickstart.md" Along with this, a local jwt authentication server will be spun up on `http://localhost:8000`.

## Preparing your Chart for Embedding

#include "examples/.markdown/docs/chart/chart-preparation-steps/create-chart-to-embed.md"

#include "examples/.markdown/docs/chart/chart-preparation-steps/enable-authenticated-access.md"

    - Name: `Custom JWT` _Note, this is only for your convenience and can be named anything_
    - Provider: `Custom JSON Web Token`
    - Signing Algorithm: `HS256` _Note, this is the default signing algorithm for the `jsonwebtoken` library and many others_
    - Signing Key: `topsecret` _Note, this key must correlate with the key found in `config.js`_

## Running this Sample with your data

#include "examples/.markdown/docs/chart/using-own-data-general-steps.md"

The hard coded credentials used in this demo are:

- Username: `admin`
- Password: `password`

## Next Steps

#include "examples/.markdown/docs/chart/next-steps-common-text.md"
- Change the login logic to adapt to your project's security workflow.
- Think whether an authenticated chart is the feature you're after. If you're simply looking for a way to show off your data, [unauthenticated embedding](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/unauthenticated) simplifies the workflow even further.

#include "examples/.markdown/docs/footer.md"