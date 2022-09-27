import ChartsEmbedSDK, {
  getRealmUserToken,
} from "@mongodb-js/charts-embed-dom";
import * as Realm from "realm-web";

const client = new Realm.App({
  id: "charts-embedding-sdk-nsuat", // Optional: ~REPLACE~ with your Realm App ID
});

function getUser() {
  return document.getElementById("username").value;
}

function getPass() {
  return document.getElementById("password").value;
}

function logOut() {
  document.body.classList.toggle("logged-in", false);
}

document
  .getElementById("login-page")
  .addEventListener("input", () =>
    document.body.classList.toggle("error", false)
  );

document
  .getElementById("loginButton")
  .addEventListener("click", () => tryLogin());

document
  .getElementById("logoutButton")
  .addEventListener("click", () => logOut());

async function renderDashboard() {
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-embedding-examples-wgffp", // Optional: ~REPLACE~ with the Base URL from your Embed Dashboard dialog
    getUserToken: () => getRealmUserToken(client),
  });

  // Read https://dochub.mongodb.org/core/charts-dashboards-embedded-dashboard-options for more options
  const dashboard = sdk.createDashboard({
    // Optional: ~REPLACE~ with the Dashboard ID from your Embed Dashboard dialog
    dashboardId: "620c9847-fc5c-4199-865d-27b2ae20db07",
    theme: "dark",
    widthMode: "scale",
  });

  // render the dashboard into a container
  dashboard.render(document.getElementById("dashboard"));
  document.body.classList.toggle("logged-in", true);
}

async function tryLogin() {
  const credentials = Realm.Credentials.emailPassword(getUser(), getPass());

  try {
    await client.logIn(credentials);
    renderDashboard();
  } catch (err) {
    console.error(
      "Authentication failed. If you are using the pre-built sample, please use one of the listed email addresses and use 'password' as the password."
    );
    document.body.classList.toggle("error", true);
  }
}
