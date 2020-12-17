import "regenerator-runtime/runtime";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts-qa.mongodb.com/charts-tom-2020-09-09-yammr" // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const chart1 = sdk.createChart({
  chartId: "c0774a27-3432-4207-b795-afeb56243652", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "700px"
});

const chart2 = sdk.createChart({
  chartId: "422fbc03-4798-4ee0-abba-877690b028ef", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "700px"
});

chart1.addEventListener("click", (payload) => {
  if (payload.target.role === "mark") {
    // Optional: ~REPLACE~ this with a suitable filter if you're using your own chart
    const filter = {
      genres: payload.data.y.value,
      year: {
        $gte: payload.data.color.lowerBound,
        $lt: payload.data.color.upperBound
      }
    };
    chart2.setFilter(filter);
  }
});

async function renderCharts() {
  await chart1.render(document.getElementById("chart1"));
  await chart2.render(document.getElementById("chart2"));
}

renderCharts().catch((e) => window.alert(e.message));
