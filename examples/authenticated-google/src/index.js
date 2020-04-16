import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "regenerator-runtime/runtime";

var id_token;

function logOut() {
  document.body.classList.toggle("logged-in", false);
}

window.fn1 = function tryLogin(googleToken) {
  console.log("TRY LOGIN")
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts-dev.mongodb.com/charts-test2-pebbp", // Optional: ~REPLACE~ with your Charts URL
    getUserToken: () => { return googleToken },
  });

  const chart = sdk.createChart({
    chartId: "a2e775e6-f267-4c2c-a65d-fbf3fad4a4f2", // Optional: ~REPLACE~ with your Chart ID
  });

  chart.render(document.getElementById("chart"));
  document.body.classList.toggle("logged-in", true);
}


