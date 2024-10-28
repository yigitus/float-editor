import "./style.css";
import "winbox";
import * as monaco from "monaco-editor";

let preview_style = `body { background-color: #0E1218; }`;
let preview_script = `console.log("Hello World!");`;
let preview_body = `<p>asd</p>`;
let preview_src = `<!doctype html><html><head><style>${preview_style}</style></head><body>${preview_body}<script>${preview_script}</script></body></html>`;

// Define custom theme with transparent background and no border
monaco.editor.defineTheme("island-dark", {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#00000033",
    "editor.lineHighlightBackground": "#00000033",
  },
});

let js_editor = monaco.editor.create(document.querySelector("#js-editor"), {
  value: preview_script,
  language: "javascript",
  automaticLayout: true,
  theme: "island-dark",
  minimap: {
    enabled: false,
  },
});

let css_editor = monaco.editor.create(document.querySelector("#css-editor"), {
  value: preview_style,
  language: "css",
  automaticLayout: true,
  theme: "island-dark",
  minimap: {
    enabled: false,
  },
});

let html_editor = monaco.editor.create(document.querySelector("#html-editor"), {
  value: preview_body,
  language: "html",
  automaticLayout: true,
  theme: "island-dark",
  minimap: {
    enabled: false,
  },
});


let js_editor_window = new WinBox("JavaScript", {
  id: "js-editor-window",
  root: document.querySelector("#app"),
  mount: document.querySelector("#js-editor"),
  background: "rgba(0, 0, 0, 0.7)",
  x: "left",
  y: "bottom",
  width: "33%",
  height: "45%",
  onclose: function () {
    js_editor.dispose();
  },
});
js_editor_window.removeControl("wb-close");
js_editor_window.addControl({
  position: "left",
  class: "fa-regular fa-floppy-disk",
  click: function () {
    preview_script = js_editor.getValue();
    preview_src = `<!doctype html><html><head><style>${preview_style}</style></head><body>${preview_body}<script>${preview_script}</script></body></html>`;
    document.querySelector("iframe").srcdoc = preview_src;
  },
});

let css_editor_window = new WinBox("CSS", {
  id: "css-editor-window",
  root: document.querySelector("#app"),
  mount: document.querySelector("#css-editor"),
  background: "rgba(0, 0, 0, 0.7)",
  x: "center",
  y: "bottom",
  width: "33%",
  height: "45%",
  onclose: function () {
    css_editor.dispose();
  },
});
css_editor_window.removeControl("wb-close");
css_editor_window.addControl({
  position: "left",
  class: "fa-regular fa-floppy-disk",
  click: function () {
    preview_style = css_editor.getValue();
    preview_src = `<!doctype html><html><head><style>${preview_style}</style></head><body>${preview_body}<script>${preview_script}</script></body></html>`;
    document.querySelector("iframe").srcdoc = preview_src;
  },
});

let html_editor_window = new WinBox("HTML", {
  id: "html-editor-window",
  root: document.querySelector("#app"),
  mount: document.querySelector("#html-editor"),
  background: "rgba(0, 0, 0, 0.7)",
  x: "right",
  y: "bottom",
  width: "33%",
  height: "45%",
  onclose: function () {
    html_editor.dispose();
  },
});

html_editor_window.removeControl("wb-close");
html_editor_window.addControl({
  position: "left",
  class: "fa-regular fa-floppy-disk",
  click: function () {
    preview_body = html_editor.getValue();
    preview_src = `<!doctype html><html><head><style>${preview_style}</style></head><body>${preview_body}<script>${preview_script}</script></body></html>`;
    document.querySelector("iframe").srcdoc = preview_src;
  },
});


function init_preview() {
  const iframe = document.createElement("iframe");
  iframe.srcdoc = preview_src;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.position = "absolute";
  iframe.style.top = "0";

  document.body.appendChild(iframe);
}

init_preview();
