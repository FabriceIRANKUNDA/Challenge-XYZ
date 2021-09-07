import axios from "./axiosConfig";
// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));
import fetch from "node-fetch";

class PaymentHandler {
  async requestToken() {
    try {
      const result = await axios({
        method: "POST",
        url: "/token/",
      });
      return result;
    } catch (error) {
      console.log(JSON.stringify(error));
      return error;
    }
  }

  async requestToPay(token, uuid, amount, userId) {
    let myHeaders = {
      Authorization: `Bearer ${token}`,
    };

    myHeaders["X-Reference-Id"] = uuid;
    myHeaders["X-Target-Environment"] = "mtnrwanda";
    myHeaders["Ocp-Apim-Subscription-Key"] = process.env.MTN_OCP_APIM;
    myHeaders["Content-Type"] = "application/json";

    const raw = JSON.stringify({
      amount: amount,
      currency: "RWF",
      externalId: userId,
      payer: { partyIdType: "MSISDN", partyId: "250789379839" },
      payerMessage: "Transactin pending",
      payeeNote: "We will let you know once processed",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return await fetch(
      "https://mtndeveloperapi.portal.mtn.co.rw/collection/v1_0/requesttopay",
      requestOptions
    );
  }
}

export default PaymentHandler;
