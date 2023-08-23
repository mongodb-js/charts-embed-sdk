# Changelog

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v3.2.0 (`latest`)

## New

- Set customizations for an embedded chart with `setRenderingSpecOverride` method.
- Set customizations for an embedded chart for the initial render with `renderingSpec` property in `EmbedChartOptions`.
- Get customizations set on an embedded chart with `getRenderingSpecOverride` method.
- Get chart channels for an embedded chart with `getChannels` method.
- Get customizable chart axes for an embedded chart with `getCustomizableAxes` method.

## v3.2.0-beta.1 (`beta`)

## New

- Set customizations for an embedded chart with `setRenderingSpecOverride` method.
- Set customizations for an embedded chart for the initial render with `renderingSpec` property in `EmbedChartOptions`.
- Get customizations set on an embedded chart with `getRenderingSpecOverride` method.
- Get chart channels for an embedded chart with `getChannels` method.
- Get customizable chart axes for an embedded chart with `getCustomizableAxes` method.

## v3.1.0

## Dashboard embedding new methods and embedding options

- Get an image of an embedded dashboard by using the new `getImage()` method to get PNG in `base64` or `binary` encoding
- Get the chart data from an embedded dashboard chart by using the new method `getData()` for dashboard charts
- Added a new `charts` field in the dashboard embedding options for `createDashboard()` that allows you to configure the charts individually in an embedded dashboard. For now, you can specify a different filter for every chart in the embedded dashboard.

## v3.1.0-beta.0

## Dashboard embedding new methods and embedding options

- Get an image of an embedded dashboard by using the new `getImage()` method to get PNG in `base64` or `binary` encoding
- Get the chart data from an embedded dashboard chart by using the new method `getData()` for dashboard charts
- Added a new `charts` field in the dashboard embedding options for `createDashboard()` that allows you to configure the charts individually in an embedded dashboard. For now, you can specify a different filter for every chart in the embedded dashboard.

## v3.0.0

## Breaking Changes

- Minimum `refresh tolerance` when `autoRefresh` is enabled for embedded chart and dashboard is increased from 10 seconds to 60 seconds. Please see [API doc](https://www.npmjs.com/package/@mongodb-js/charts-embed-dom?activeTab=readme#API) for more information under `Refresh Tolerance` section.
- `setFilter` method for embedded chart and dashboard now will only accept a `JavaScript plain object` with valid [query operators](https://www.mongodb.com/docs/manual/reference/operator/query/#query-selectors). If an array is supplied, an exception will be raised.
- The return format of `getFilter` and `getHighlight` methods for embedded chart is updated from EJSON to deserialised EJSON. E.g.`{ beds: {$gt: {$numberInt: '2'}}} ` will now become `{ beds: {$gt: 2}}`.

## New

### Dashboard Embedding

- Dashboard

  - You can now set filter on a dashboard level for embedded dashboard through:
    - `setFilter` method for embedded dashboard.
    - `filter` option during embedded dashboard initialisation
  - Added `getFilter` method to retrieve the current filter set to the embedded dashboard

### Chart Embedding

- `getImage` method to get png of the embedded chart in `base64` or `binary` encoding. `Table Chart` is not supported for this method.

## v3.0.0-beta.0

## Breaking Changes

- Minimum `refresh tolerance` when `autoRefresh` is enabled for embedded chart and dashboard is increased from 10 seconds to 60 seconds. Please see [API doc](https://www.npmjs.com/package/@mongodb-js/charts-embed-dom?activeTab=readme#API) for more information under `Refresh Tolerance` section.
- `setFilter` method for embedded chart and dashboard now will only accept a `JavaScript plain object` with valid [query operators](https://www.mongodb.com/docs/manual/reference/operator/query/#query-selectors). If an array is supplied, an exception will be raised.
- The return format of `getFilter` and `getHighlight` methods for embedded chart is updated from EJSON to deserialised EJSON. E.g.`{ beds: {$gt: {$numberInt: '2'}}} ` will now become `{ beds: {$gt: 2}}`.

## New

### Dashboard Embedding

- Dashboard

  - You can now set filter on a dashboard level for embedded dashboard through:
    - `setFilter` method for embedded dashboard.
    - `filter` option during embedded dashboard initialisation
  - Added `getFilter` method to retrieve the current filter set to the embedded dashboard

- Dashboard Chart
  - N/A

### Chart Embedding

- `getImage` method to get png of the embedded chart in `base64` or `binary` encoding. `Table Chart` is not supported for this method.

## v2.3.1

## Fixed

- Security patch to update `jsonwebtoken` package version to `v9.0.0`.

## v2.3.0

## Dashboard embedding new methods

- Set/Get a filter for a chart in an embedded dashboard.
  - `setFilter` and `getFilter` for embedded dashboard charts.
- Set/Get a highlight for a chart in an embedded dashboard.
  - `setHighlight` and `getHighlight` for embedded dashboard charts

## Authenticated Embedding

- Add support for authenticated chart and dashboard embedding with [`realm-web`](https://www.npmjs.com/package/realm-web) SDK.

## v2.3.0-beta.2 (`beta`)

### Dashboard embedding new methods

- Set or get a highlight for a chart in an embedded dashboard with the new methods we added - `setHighlight` and `getHighlight` for embedded dashboard charts

### Authenticated embedding

- Added support for authenticated embedding with `realm-web` SDK

## v2.3.0-beta.1

### Dashboard embedding new methods

- Set or get a filter for a chart in an embedded dashboard with the new methods we added - `setFilter` and `getFilter` for embedded dashboard charts.

## v2.2.0

### 🎉 Dashboard embedding

- Embed dashboard in authenticated or unauthenticated way by using `sdk.createDashboard`

### Chart embedding

- Added support for getting chart data via `chart.getData()`

## v2.2.0-beta.2

### Dashboard embedding (beta)

- Added functionality to embed dashboard

## v2.1.0

### 🎉 Interactive click events and applying chart highlights

- Subscribe to click events on an embedded chart using `chart.addEventListener`. The `payload`
  parameter in the event callback contains details on the chart element clicked.
- Apply a highlight on an embedded chart using `chart.setHighlight`

### 🛠 Performance Improvements

- Improved performance for authenticated embedded charts, by eliminating redundant API calls.

## v2.1.0-beta.1

### Interactive click events (beta)

- Added the ability to filter click events by role to ensure the "hand" mouse cursor only appears over interactive elements.

### Performance Improvements

- Improved performance for authenticated embedded charts, by eliminating redundant API calls.

## v2.0.1

### Bug fixes

- fix: Publish the UMD bundle of `@mongodb-js/charts-embed-dom` that was mistakenly omitted from the `v2.0.0` release.

## v2.0.0

### Breaking Changes

Changed the [Content-Security-Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) of the `iframe` created by the SDK to include the following `sandbox` directive flags:

- **`allow-popups`**: Allows popups to function (eg: `window.open`, `target="_blank"`).
- **`allow-popups-to-escape-sandbox`**: Allows a sandboxed document to open new windows without forcing the sandboxing flags upon them.

This change fixes the issue that prevented hyperlinks within the `iframe` document from opening a new tab/window. While this change does not change an explicit SDK API, it does change the implicit behaviour of the security model, and therefore warranted a major version bump.

## v1.2.0-beta.1

### Interactive click events (beta)

- Subscribe to click events on a chart using `chart.addEventListener('click', eventHandler);` The `payload`
  parameter in the event callback contains details on the chart element clicked. In this beta release, not
  all chart types are supported, and the payload format is subject to change.

## v1.1.3

### Bug Fixes

- Fixed an issue (#14) where types for `mongodb-stitch-browser-sdk` were missing causing builds with TSC to fail.

## v1.1.2

### Improved API Documentation

In this release, we've added generated API docs to the NPM package bundle in the `docs` folder. We've also corrected some minor typos and omissions in the README.

### Bug Fixes

- We fixed a minor bug in the `maxAgeData` prop where it would ignore when the prop was set to `0`. This resulted in cached data still being served to the client.

## v1.1.1

### Improved Rollup documentation

We've now added an example `rollup.config.js` to the package README to help Rollup users get started with the SDK.

## v1.1.0

### Chart Caching Support

In the latest Charts cloud release, we’ve given developers more control over the caching and refresh behaviour, which can improve performance and user experience. The new `maxDataAge` option allows you to specify when data should be retrieved from the cache or re-queried from the database. This can also be combined with the `autoRefresh` option to ensure charts are always kept current.

Note: as part of this change, we have deprecated the `refreshInterval` property, as the same functionality is accessible through the new `autoRefresh` and `maxDataAge` properties.

### Minor fixes

- Moved `ts-node` to a dev-dependency

## v1.0.0

### Highlights

- 🎉 First release of the Charts Embedding SDK
- 🛠 Dynamically set the current theme, refresh interval, and filter
- 🔒 Support for embedding authentication providers (Custom / Realm / Google)

### 🎉 First release of the Charts Embedding SDK

We're excited to show you the first v1.0.0 release of the embedding SDK. For comprehensive documentation and guides, head on over to https://github.com/mongodb-js/charts-embed-sdk, or https://docs.mongodb.com/charts/master/embedding-charts-sdk/.

### 🛠 Embedding SDK Commands

The SDK unlocks interactivity in your charts that simply wasn't possible with IFrame embedding.

- You can now dynamically toggle between dark mode using `setTheme`
- Adjust how frequently your chart refreshes using `setRefreshInterval`
- Control what data is shown in your chart using `setFilter`

### 🔒 Support for Embedding Authentication Providers

You can now control who can view your embedded charts by enabling authenticated embedding. With this setting enabled, you will need to pass in a function to `getUserToken` that returns a JWT with claims
representing the user attempting to view the Chart. For more information, check out our authenticated embedding example here: https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/authenticated-custom-jwt
