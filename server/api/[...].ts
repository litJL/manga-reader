import { joinURL } from "ufo";

export default defineEventHandler(async (event) => {
    const baseURL = "https://api.mangadex.org";

    const path = event.path.replace(/^\/api\//, "");
    const target = joinURL(baseURL, path);

    return proxyRequest(event, target);
});
