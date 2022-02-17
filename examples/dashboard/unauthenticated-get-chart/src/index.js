import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://localhost/mongodb-charts-vrelu", // Optional: ~REPLACE~ with the Base URL from your Embed Dashboard dialog
});

const dashboard = sdk.createDashboard({
  dashboardId: "6209eedf-cbeb-4b28-8efa-6577b324d6f1",
});

async function populateDropdown() {
  const dashboardCharts = await dashboard.getAllCharts();
  const options = dashboardCharts.map((dashboardChart) => {
    const title = dashboardChart.chartId;
    return `<option value=${title}>${title}</option>`;
  });
  const select = document.getElementById("select-chart");
  select.innerHTML = options;
}

function addEventListeners() {}

async function renderDashboard() {
  await dashboard.render(document.getElementById("dashboard"));
  populateDropdown();
  addEventListeners();
}

renderDashboard().catch((e) => window.alert(e.message));
