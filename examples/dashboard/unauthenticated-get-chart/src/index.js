import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-embedding-examples-wgffp", // Optional: ~REPLACE~ with the Base URL from your Embed Dashboard dialog
});

// Read https://dochub.mongodb.org/core/charts-dashboards-embedded-dashboard-options for more options
const dashboard = sdk.createDashboard({
  dashboardId: "620ddc92-d1cd-42df-8c16-d94afba775d6",
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

const clickHandler = (payload) => {
  // Display information about the clicked element
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

function resetInfo() {
  const infoText = document.getElementById("info");
  infoText.innerText = "(click the chart to see!)";

  const eventPayloadText = document.getElementById("payload");
  eventPayloadText.innerHTML = "";
}

function addEventListeners() {
  document
    .getElementById("select-chart")
    .addEventListener("change", async (e) => {
      // Remove previous click event handler
      const currentChartId =
        document.getElementById("select-chart-text").innerText;

      // Remove old click event listener from previous Chart
      if (currentChartId !== "") {
        const prevDashboardChart = await dashboard.getChart(currentChartId);
        prevDashboardChart.removeEventListener("click", clickHandler);
      }

      // Update text with new chart ID
      const selectedChartId = e.target.value;
      document.getElementById("select-chart-text").innerText = selectedChartId;

      // Add new click event listeners
      if (selectedChartId !== "") {
        const selectedDashboardChart = await dashboard.getChart(
          selectedChartId
        );
        selectedDashboardChart.addEventListener("click", clickHandler);
      }
      resetInfo();
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
