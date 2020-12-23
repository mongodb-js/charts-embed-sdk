import "regenerator-runtime/runtime";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-embedding-examples-wgffp" // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const chart1 = sdk.createChart({
  chartId: "90a8fe84-dd27-4d53-a3fc-0e40392685dd", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "700px"
});

const chart2 = sdk.createChart({
  chartId: "c6d6b83e-b096-4bb8-9d7f-b7344177cd11", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
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
    document.getElementById("filterMessage").innerText = `${payload.data.y.value} movies from the ${payload.data.color.lowerBound}s`

  } else {
    chart2.setFilter({});
    document.getElementById("filterMessage").innerText = "all movies"
  }
});

async function renderCharts() {
  await chart1.render(document.getElementById("chart1"));
  await chart2.render(document.getElementById("chart2"));
}

renderCharts().catch((e) => window.alert(e.message));
