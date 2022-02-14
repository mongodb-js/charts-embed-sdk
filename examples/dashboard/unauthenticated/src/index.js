import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://localhost/mongodb-charts-vrelu", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const dashboard = sdk.createDashboard({
  dashboardId: "6209eedf-cbeb-4b28-8efa-6577b324d6f1",
});

async function renderDashboard() {
  await dashboard.render(document.getElementById("dashboard"));
}

renderDashboard().catch((e) => window.alert(e.message));
