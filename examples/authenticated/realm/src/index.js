import ChartsEmbedSDK, { getRealmUserToken }from "@mongodb-js/charts-embed-dom";
import { Stitch, UserPasswordCredential } from 'mongodb-stitch-browser-sdk'
import "regenerator-runtime/runtime";

const client = Stitch.initializeAppClient('realm-authentication-sample-eibkj', { baseUrl: 'https://stitch-dev.mongodb.com'});

function getUser() {
  return document.getElementById("username").value;
}

function getPass() {
  return document.getElementById("password").value;
}

document
  .getElementById("loginButton")
  .addEventListener("click", async () => await tryLogin());

async function tryLogin() {
  const credential = new UserPasswordCredential(getUser(), getPass())
  client.auth.loginWithCredential(credential).then(user =>
  {
    const sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts-dev.mongodb.com/charts-test2-pebbp",
      getUserToken: () => getRealmUserToken(client),
    });

    const chart = sdk.createChart({
      chartId: "a2e775e6-f267-4c2c-a65d-fbf3fad4a4f2",
    });

    chart.render(document.getElementById("chart"));
    document.body.classList.toggle("logged-in", true);

  }).catch(err => {
    console.error(err)
  });
}