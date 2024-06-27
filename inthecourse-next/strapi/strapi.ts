import Strapi from "strapi-sdk-js";

export const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API || "http://localhost:1337";
const strapi = new Strapi({
    url: strapiApiUrl
});

export default strapi;