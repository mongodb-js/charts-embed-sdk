import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const SNIPPETS = {
  simple: { 'address.country': 'Australia' },
  range: { beds: { $lte: 12, $gte: 3 } },
  complex: {
    $and: [{
      'address.country': { $in: ['Australia', 'Canada'] }
    }, {
      beds: { $gte: 3 }
    }]
  },
  empty: {},
};

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-embedding-examples-wgffp", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const chart1 = sdk.createChart({
  chartId: "706f1d93-bab2-44e9-b7d3-77cee8953549", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "500px",
});

const chart2 = sdk.createChart({
  chartId: "2e41d915-c394-48ad-b772-12ffceeaada4", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "500px",
});

async function applyHighlight() {
  const rawValue = document.getElementById('query-text').value;
  try {
    const highlight = JSON.parse(rawValue);
    await chart1.setHighlight(highlight);
    await chart2.setHighlight(highlight);
  } catch (err) {
    // Do nothing
  }
}

async function setSnippet(snippet) {
  if (SNIPPETS[snippet]) {
    document.getElementById('query-text').value = JSON.stringify(SNIPPETS[snippet], null, 4);
    await applyHighlight();
  }
}

async function onSelectChange(event) {
  const snippet = event.target.value;
  await setSnippet(snippet);
}

async function onTextChange(event) {
  document.getElementById('query-select').value = 'custom';
  applyHighlight();
}

document.getElementById('query-select').onchange = onSelectChange;
document.getElementById('query-text').onchange = onTextChange;

// Setting up the initial snippet state
setSnippet(document.getElementById('query-select').value)

async function renderCharts() {
  await chart1.render(document.getElementById("chart1"));
  await chart2.render(document.getElementById("chart2"));
  await applyHighlight();
}

renderCharts().catch((e) => window.alert(e.message));
