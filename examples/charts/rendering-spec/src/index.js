import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "@alenaksu/json-viewer";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-embedding-examples-wgffp", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const chart = sdk.createChart({
  chartId: "735cfa75-15b8-483a-bc2e-7c6659511c7c", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "700px",
});

async function renderChart() {
  await chart.render(document.getElementById("chart"));

  /*
    Collecting all the data from the form and based on it preparing the rendering spec
    that will be sent to chart.setRenderingSpecOverride() to apply customizations on the embedded chart
  */
  document.forms["form"].addEventListener("submit", async function (e) {
    e.preventDefault();

    // get all the values from the form
    const formMarkup = new FormData(e.target);
    const formData = Object.fromEntries(formMarkup);

    const { title, description, labelX, labelY, labelSize, colorPalette } =
      formData;

    // prepare the rendering spec document
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

  /*
    This button click calls chart.getChannels().
    It returns the channels of the embedded chart.
    That can help you to do the customizations with chart.setRenderingSpecOverride()
  */
  document
    .getElementById("chartChannelsButton")
    .addEventListener("click", async function () {
      const chartChannelButtonTextElement = document.getElementById(
        "chartChannelsButtonText"
      );
      const jsonViewerElement = document.getElementById("jsonViewerChannels");

      const currentState = chartChannelButtonTextElement.textContent;
      if (currentState === "Get") {
        // Update text inside button
        chartChannelButtonTextElement.innerText = "Hide";

        // Get chart channels data and display it
        const data = await chart.getChannels();
        jsonViewerElement.data = data;
        jsonViewerElement.style.visibility = "visible";
      } else {
        // Update text inside button
        chartChannelButtonTextElement.innerText = "Get";
        // Reset JSON Viewer element
        jsonViewerElement.data = "{}";
        jsonViewerElement.style.visibility = "hidden";
      }
    });

  /*
    This button click calls chart.getCustomizableAxes().
    It returns the axes of the embedded chart.
    That can help you to do the customizations with chart.setRenderingSpecOverride()
  */
  document
    .getElementById("chartAxesButton")
    .addEventListener("click", async function () {
      const chartAxesButtonTextElement = document.getElementById(
        "chartAxesButtonText"
      );
      const jsonViewerElement = document.getElementById("jsonViewerAxes");

      const currentState = chartAxesButtonTextElement.textContent;
      if (currentState === "Get") {
        // Update text inside button
        chartAxesButtonTextElement.innerText = "Hide";

        // Get chart axes data and display it
        const data = await chart.getCustomizableAxes();
        jsonViewerElement.data = data;
        jsonViewerElement.style.visibility = "visible";
      } else {
        // Update text inside button
        chartAxesButtonTextElement.innerText = "Get";
        // Reset JSON Viewer element
        jsonViewerElement.data = "{}";
        jsonViewerElement.style.visibility = "hidden";
      }
    });
}

renderChart().catch((e) => window.alert(e.message));
