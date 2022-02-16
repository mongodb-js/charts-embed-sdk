import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://localhost/mongodb-charts-vrelu", // Optional: ~REPLACE~ with the Base URL from your Embed Dashboard dialog
});

const dashboard = sdk.createDashboard({
  dashboardId: "6209eedf-cbeb-4b28-8efa-6577b324d6f1",
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
      document.getElementById("currentTheme").innerText = currentTheme;
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
