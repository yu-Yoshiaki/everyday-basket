import { createClient } from "microcms-js-sdk";

export const microcms = createClient({
  serviceDomain: "40ty54leg1", // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.MICROCMS_KEY as string,
});
