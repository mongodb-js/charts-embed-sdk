import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-embedding-examples-wgffp", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const chart = sdk.createChart({
  chartId: "90a8fe84-dd27-4d53-a3fc-0e40392685dd", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "700px",
});

const clickHandler = (payload) => {
  document.getElementById("payload").innerHTML =
    "<pre>" + JSON.stringify(payload, null, 2) + "</pre>";

  let infoText = "";
  if (payload.target.role) {
    infoText += `<li>Role: ${payload.target.role}</li>`;
    infoText += `<li>Type: ${payload.target.type}</li>`;
  }

  if (payload.target.fill) {
    infoText += `<li>Fill: <span style="color:${payload.target.fill}">${payload.target.fill}</li>`;
  }
  if (payload.data.x) {
    infoText += `<li>x.label: ${payload.data.x.label}</li>`;
    infoText += `<li>x.value: ${payload.data.x.value}</li>`;
  }
  if (payload.data.y) {
    infoText += `<li>y.label: ${payload.data.y.label}</li>`;
    infoText += `<li>y.value: ${payload.data.y.value}</li>`;
  }
  if (payload.data.color) {
    infoText += `<li>color.label: ${payload.data.color.label}</li>`;
    infoText += `<li>color.value: ${payload.data.color.value}</li>`;
  }

  document.getElementById("info").innerHTML = "<ul>" + infoText + "</ul>";
};

async function renderCharts() {
  await chart.render(document.getElementById("chart"));
  await chart.addEventListener("click", clickHandler);
}

renderCharts().catch((e) => window.alert(e.message));
