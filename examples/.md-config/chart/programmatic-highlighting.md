# MongoDB Charts Embedding Example - Programmatic Highlighting

#include "examples/docs/chart/background/start-block.md"

🎮 _[Play with a live demo of this sample here](https://codesandbox.io/s/github/mongodb-js/charts-embed-sdk/tree/master/examples/charts/programmatic-highlighting)_

#include "examples/docs/chart/background/desc-simple.md"

When you embed charts using the Embedding SDK, you are able to customise the embedded charts by setting attributes. One of these is `setHighlight()`, which lets you emphasise part of your charts to attract attention. This feature adds a layer of richness to interactive charts, and can be used to show relationships between charts. To learn the basics of interactive charts, see the [click events](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/click-events-basic) sample. To learn about other properties you can use to customise your charts, please refer to the [API documentation](https://www.npmjs.com/package/@mongodb-js/charts-embed-dom).

More information regarding charts highlighting can be found in the [Charts documentation](https://docs.mongodb.com/charts/saas/handle-click-events/).

#### The features included in this demo are as follows:

- Adding chart highlighting:

```javascript
chart.setHighlight({ field: { $expr }});
```

- Highlighting two charts (one bar, one table) at the same time with the same filter expression
- Showing more complicated MQL filters with the drop down
- Allow custom filtering expressions by editing the textarea

#include "examples/docs/quickstart.md"

#include "examples/docs/chart/preparing-chart-for-embedding/create-chart-to-embed.md"

#include "examples/docs/chart/preparing-chart-for-embedding/enable-unauthenticated-access.md"

#include "examples/docs/chart/using-own-data/start-block.md"
    - Open the _index.js_ file (`src/index.js`)
#include "examples/docs/chart/using-own-data/replace-block.md"
#include "examples/docs/chart/using-own-data/end-block.md"

#include "examples/docs/footer.md"