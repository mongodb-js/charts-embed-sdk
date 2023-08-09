import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-embedding-examples-wgffp", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const chart = sdk.createChart({
  chartId: "735cfa75-15b8-483a-bc2e-7c6659511c7c", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "700px",
});

async function renderChart() {
  await chart.render(document.getElementById("chart"));

  document.forms["form"].addEventListener("submit", async function (e) {
    e.preventDefault();

    // get all the values from the form
    const formMarkup = new FormData(e.target);
    const formData = Object.fromEntries(formMarkup);

    const { title, description, labelX, labelY, labelSize, colorPalette } =
      formData;

    const renderingSpec = {
      version: 1,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
    };

    if (labelX || labelY) {
      renderingSpec.channels = {
        ...(labelX ? { x: { labelOverride: labelX } } : {}),
        ...(labelY ? { y: { labelOverride: labelY } } : {}),
      };
    }

    if (labelSize || colorPalette) {
      renderingSpec.options = {
        ...(labelSize ? { labelSize: parseInt(labelSize) } : {}),
        ...(colorPalette
          ? {
              colorPalette: {
                type: "discrete",
                value: [colorPalette],
              },
            }
          : {}),
      };
    }

    await chart.setRenderingSpecOverride(renderingSpec);
  });
}

renderChart().catch((e) => window.alert(e.message));
