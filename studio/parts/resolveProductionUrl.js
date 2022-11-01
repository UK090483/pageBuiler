import { REMOTE_URL } from "../../PageBuilder/constants";

const remoteUrl = REMOTE_URL;
const localUrl = `http://localhost:3000`;

const previewSecret = "j8heapkqy4rdz6kudrvsc7ywpvfhrv022abyx5zgmuwpc1xv";

export default function resolveProductionUrl(doc) {
  if (!["page"].includes(doc?._type)) return false;
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const docId = typeof doc?._id === "string" && doc._id.replace("drafts.", "");
  if (!docId) return false;
  const previewUrl = new URL(baseUrl);
  previewUrl.pathname = `/api/preview/start`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`id`, docId);
  return previewUrl.toString();
}
