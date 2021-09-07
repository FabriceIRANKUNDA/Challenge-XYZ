import axios from "axios";

const defaultOptions = {
  baseURL: "https://mtndeveloperapi.portal.mtn.co.rw/collection",
  headers: {
    "Content-Type": "application/json",
  },
};
const instance = axios.create(defaultOptions);

instance.interceptors.request.use((req) => {
  if (req.url === "/token/") {
    req.headers["Ocp-Apim-Subscription-Key"] = process.env.MTN_OCP_APIM;
    req.headers.common["Authorization"] =
      "Basic " +
      "YTcyMmVhZDgtY2Y5ZC00MmRhLWIzYjItYTFlNGM4NmI0MzAyOjdmN2U2MmNhZmJmYjQ4NDk5NjQ0Y2U0M2JjYzFjNjc1";
  }
  return req;
});

export default instance;
