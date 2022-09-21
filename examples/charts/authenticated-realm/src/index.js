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

async function tryLogin() {
  const credentials = Realm.Credentials.emailPassword(getUser(), getPass());

  try {
    await client.logIn(credentials);
    const sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts.mongodb.com/charts-embedding-examples-wgffp", // Optional: ~REPLACE~ with your Charts URL
      getUserToken: () => getRealmUserToken(client),
    });

    const chart = sdk.createChart({
      chartId: "e966910a-563d-40af-a0e6-57f9d7824c12", // Optional: ~REPLACE~ with your Chart ID
    });

    chart.render(document.getElementById("chart"));
    document.body.classList.toggle("logged-in", true);
  } catch (err) {
    console.error(
      "Authentication failed. If you are using the pre-built sample, please use one of the listed email addresses and use 'password' as the password."
    );
    document.body.classList.toggle("error", true);
  }
}
