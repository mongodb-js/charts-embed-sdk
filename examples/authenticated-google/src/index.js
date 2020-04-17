import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "regenerator-runtime/runtime";

async function tryLogin() {
  const url = 'http://localhost:1234/api/getGoogleId';

  fetch(url)
  .then((response) => response.text())
  .then((response) => {
    var id_token = response;
    console.log("IDTOKEN == " + (id_token))

    const sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts-dev.mongodb.com/charts-test2-pebbp", // Optional: ~REPLACE~ with your Charts URL
      getUserToken: () => { return id_token },
    });
  
    const chart = sdk.createChart({
      chartId: "0d984f0c-5f1b-4711-9e5d-f78aa1ea8fcb", // Optional: ~REPLACE~ with your Chart ID
    });
  
    chart.render(document.getElementById("chart"));
  })
  .then((data) => {
    console.log(data);
  });
}

// Observe the body to move onto the login state.
const domBody = document.getElementsByTagName("body")[0];
const config = { attributes: true };

// Create an observer instance linked to the callback function
const observer = new MutationObserver(tryLogin);

// Start observing the target node for configured mutations
observer.observe(domBody, config);


