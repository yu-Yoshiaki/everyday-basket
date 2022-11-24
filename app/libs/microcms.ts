import { createClient } from "microcms-js-sdk";

const serviceDomain = "40ty54leg1";
export const microcmsKey = process.env.MICROCMS_KEY as string;

export const microcms = createClient({ serviceDomain, apiKey: microcmsKey });

export const microcmsEndpoint = `https://${serviceDomain}.microcms.io/api/v1/`;
