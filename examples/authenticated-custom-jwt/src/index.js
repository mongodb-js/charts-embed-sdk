import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "regenerator-runtime/runtime";

document
  .getElementById("loginButton")
  .addEventListener("click", async () => await tryLogin());

function getUser() {
  return document.getElementById("username").value;
}

function getPass() {
  return document.getElementById("password").value;
}

async function tryLogin() {
  if (await login(getUser(), getPass())) {
    document.body.classList.toggle("logged-in", true);
    await renderChart();
  }
}

/*
  login(username, password) is the function we are going to give to the
  SDK to authenticate the user. It can be any function that returns a 
  JWT token on success. The core of this function is the jwt.sign code,
  which creates the token using the users username and our previously
  defined secret called 'topsecret'.
*/
async function login(username, password) {
  const rawResponse = await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: username, password: password })
  });
  const content = await rawResponse.json();

  return content.bearerToken;
}

/*
  Chart rendering is much the same as our unauthenticated charts. However,
  we now need to give the SDK a value for 'getUserToken'. This value needs
  to be a function that returns a valid JWT. We are using an anonymous 
  function syntax in order to pass variables to the function that
  will be called at a later time by the SDK code.
 */
async function renderChart() {
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts-dev.mongodb.com/charts-test2-pebbp", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
    getUserToken: async function() {
      return await login(getUser(), getPass());
    }
  });

  const chart = sdk.createChart({ chartId: "a2e775e6-f267-4c2c-a65d-fbf3fad4a4f2" }); // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog

  // render the chart into a container
  chart.render(document.getElementById("chart"));
}
