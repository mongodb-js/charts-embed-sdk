import "regenerator-runtime/runtime";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts-qa.mongodb.com/charts-tom-2020-09-09-yammr" // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const chart = sdk.createChart({
  chartId: "c0774a27-3432-4207-b795-afeb56243652", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "700px"
});

chart.addEventListener("click", (payload) => {
  document.getElementById("payload").innerHTML = '<pre>' + JSON.stringify(payload, null, 2) + '</pre>'; 

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
});

async function renderCharts() {
  await chart.render(document.getElementById("chart"));
}

renderCharts().catch((e) => window.alert(e.message));
