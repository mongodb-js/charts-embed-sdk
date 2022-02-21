import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "@alenaksu/json-viewer";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-embedding-examples-wgffp", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const chart = sdk.createChart({
  chartId: "735cfa75-15b8-483a-bc2e-7c6659511c7c", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "700px",
});

async function renderChart() {
  await chart.render(document.getElementById("chart"));

  /*
    chart.refresh()
    Manually fetches the latest data for the chart
   */
  document.getElementById("refresh").addEventListener("click", () => {
    chart.refresh();
  });

  /*
    chart.setMaxDataAge(interval: number)
    The default rate is to auto refresh every 1 hour.
    The minimum rate is every 10 seconds.

    chart.getMaxDataAge()
    Returns a number pertaining to the charts current
    refresh interval.
   */
  document
    .getElementById("refresh-interval")
    .addEventListener("change", async (e) => {
      var refreshInterval = e.target.value;
      refreshInterval
        ? chart.setMaxDataAge(Number(refreshInterval))
        : chart.setMaxDataAge(3600);

      var currentRefreshInterval = await chart.getMaxDataAge();
      document.getElementById("currentRefreshInterval").innerText =
        currentRefreshInterval;
    });

  /*
    chart.setFilter(filter: object)
    Filters the chart with the given filter string.
    It's important to manually whitelist fields you want users
    to be able to filter on. Do this in the Embedded settings of 
    your chart. 

    chart.getFilter()
    Returns the current filter object. The key is the field,
    and the value the query.
   */
  document
    .getElementById("country-filter")
    .addEventListener("change", async (e) => {
      const country = e.target.value;
      const currentFilterDOM = document.getElementById("currentFilter");
      if (country) {
        await chart.setFilter({ "address.country": country }); // Optional: ~REPLACE~ with the your own whitelisted field
        const filter = await chart.getFilter();
        currentFilterDOM.innerText = JSON.stringify(filter);
      } else {
        await chart.setFilter({});
        const filter = await chart.getFilter();
        currentFilterDOM.innerText = JSON.stringify(filter);
      }

      // Update JSON Viewer values
      const chartDataButtonTextElement = document.getElementById(
        "chartDataButtonText"
      );
      const jsonViewerElement = document.getElementById("jsonViewer");
      if (chartDataButtonTextElement.textContent === "Hide") {
        const data = await chart.getData();
        jsonViewerElement.data = data;
      }
    });

  /*
    chart.setTheme(theme: 'dark' | 'light');
    When the chart is set to dark, it's background becomes transparent.
    It is important when activating this setting you set the background of 
    the body to an appropriate colour.

    chart.getTheme()
    The current state of the charts theme is maintained by the chart.
    Returns a string.
   */
  document
    .getElementById("themeSwitch")
    .addEventListener("change", async function () {
      if (this.checked) {
        await chart.setTheme("dark");
        document.body.classList.toggle("dark-mode", true);
      } else {
        await chart.setTheme("light");
        document.body.classList.toggle("dark-mode", false);
      }

      var currentTheme = await chart.getTheme();
      document.getElementById("currentTheme").innerText = currentTheme;
    });

  /*
    chart.getData();
    Retrieves the data used to render the current chart.

    The data that returns usually has the format of:

    ```
    {
      documents: [ ... ],
      fields: [ ... ]
    }
    ```
  */
  document
    .getElementById("chartDataButton")
    .addEventListener("click", async function () {
      const chartDataButtonTextElement = document.getElementById(
        "chartDataButtonText"
      );
      const jsonViewerElement = document.getElementById("jsonViewer");

      const currentState = chartDataButtonTextElement.textContent;
      if (currentState === "Show") {
        // Update text inside button
        chartDataButtonTextElement.innerText = "Hide";

        // Get chart data and display it
        const data = await chart.getData();
        jsonViewerElement.data = data;
        jsonViewerElement.style.visibility = "visible";
      } else {
        // Update text inside button
        chartDataButtonTextElement.innerText = "Show";
        // Reset JSON Viewer element
        jsonViewerElement.data = "{}";
        jsonViewerElement.style.visibility = "hidden";
      }
    });
}

renderChart().catch((e) => window.alert(e.message));
