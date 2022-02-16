import "regenerator-runtime/runtime";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

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
    await renderDashboard();
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
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });
  const content = await rawResponse.json();

  return content.bearerToken;
}

/*
  Dashboard rendering is much the same as our unauthenticated dashboard. However,
  we now need to give the SDK a value for 'getUserToken'. This value needs
  to be a function that returns a valid JWT. We are using an anonymous 
  function syntax in order to pass variables to the function that
  will be called at a later time by the SDK code.
 */
async function renderDashboard() {
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://localhost/mongodb-charts-vrelu", // Optional: ~REPLACE~ with the Base URL from your Embed Dashboard dialog
    getUserToken: async function () {
      return await login(getUser(), getPass());
    },
  });

  const dashboard = sdk.createDashboard({
    // Optional: ~REPLACE~ with the Dashboard ID from your Embed Dashboard dialog
    dashboardId: "620c6c64-0868-4c68-8904-d210286a0a59",
    theme: "dark",
    widthMode: "scale",
  });

  // render the dashboard into a container
  dashboard.render(document.getElementById("dashboard"));
}
