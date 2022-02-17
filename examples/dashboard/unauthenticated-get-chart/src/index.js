import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://localhost/mongodb-charts-vrelu", // Optional: ~REPLACE~ with the Base URL from your Embed Dashboard dialog
});

const dashboard = sdk.createDashboard({
  dashboardId: "6209eedf-cbeb-4b28-8efa-6577b324d6f1",
});

async function populateDropdown() {
  const dashboardCharts = await dashboard.getAllCharts();
  const select = document.getElementById("select-chart");
  dashboardCharts.forEach((dashboardChart) => {
    const title = dashboardChart.chartId;
    const option = document.createElement("option");
    option.text = title;
    option.value = title;
    select.add(option);
  });
}

function addEventListeners() {
  document.getElementById("select-chart").addEventListener("change", (e) => {
    const selectedChartId = e.target.value;
    document.getElementById("select-chart-text").innerText = selectedChartId;
  });

  document
    .getElementById("refresh-button")
    .addEventListener("click", async (e) => {
      const selectedChartId =
        document.getElementById("select-chart-text").innerText;
      const chart = await dashboard.getChart(selectedChartId);
      await chart.refresh();
    });
}

async function renderDashboard() {
  await dashboard.render(document.getElementById("dashboard"));
  populateDropdown();
  addEventListeners();
}

renderDashboard().catch((e) => window.alert(e.message));
