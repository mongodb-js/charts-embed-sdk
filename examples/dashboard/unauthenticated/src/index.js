import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-embedding-examples-wgffp", // Optional: ~REPLACE~ with the Base URL from your Embed Dashboard dialog
});

// Read https://dochub.mongodb.org/core/charts-dashboards-embedded-dashboard-options for more options
const dashboard = sdk.createDashboard({
  dashboardId: "620ddc92-d1cd-42df-8c16-d94afba775d6",
});

function addEventListeners() {
  /* Refresh button */
  document
    .getElementById("refresh-button")
    .addEventListener("click", async function () {
      await dashboard.refresh();
    });

  /* Theme toggle */
  document
    .getElementById("theme")
    .addEventListener("change", async function () {
      await dashboard.setTheme(this.checked ? "dark" : "light");

      const currentTheme = await dashboard.getTheme();
      document.getElementById("currentTheme").innerText =
        currentTheme === "light" ? "dark" : "light";
    });

  /* Max Data Age select */
  document
    .getElementById("max-data-age")
    .addEventListener("change", async (e) => {
      const maxDataAge = e.target.value;
      const defaultMaxDataAge = 3600;
      await dashboard.setMaxDataAge(Number(maxDataAge) ?? defaultMaxDataAge);
    });

  /* Height Mode select */
  document
    .getElementById("height-mode")
    .addEventListener("change", async (e) => {
      const heightMode = e.target.value;
      await dashboard.setHeightMode(heightMode);
    });

  /* Width Mode select */
  document
    .getElementById("width-mode")
    .addEventListener("change", async (e) => {
      const widthMode = e.target.value;
      await dashboard.setWidthMode(widthMode);
    });

  /* Charts Background select */
  document
    .getElementById("charts-background")
    .addEventListener("change", async (e) => {
      const chartsBackground = e.target.value;
      await dashboard.setChartsBackground(chartsBackground);
    });
}

async function renderDashboard() {
  await dashboard.render(document.getElementById("dashboard"));
  addEventListeners();
}

renderDashboard().catch((e) => window.alert(e.message));
