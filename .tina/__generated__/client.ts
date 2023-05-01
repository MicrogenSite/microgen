import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '1d130d490b9cb61095a84de7b2c15b3733b0bdc0', queries });
export default client;
  