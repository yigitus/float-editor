import { initialPreviewSrc } from "../utils/initalValues";

export function initPreview() {
  const iframe = document.createElement("iframe");
  iframe.srcdoc = initialPreviewSrc;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.position = "absolute";
  iframe.style.top = "0";
  document.body.appendChild(iframe);
}

export function updatePreviewSrc(style, body, script) {
  const previewSrc = `<!doctype html><html><head><style>${style}</style></head><body>${body}<script>${script}</script></body></html>`;
  document.querySelector("iframe").srcdoc = previewSrc;
  return previewSrc;
}
