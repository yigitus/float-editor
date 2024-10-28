import * as monaco from "monaco-editor";
import { editorConfig } from "../utils/editorConfig.js";

export function initCssEditor() {
  return monaco.editor.create(document.querySelector("#css-editor"), {
    ...editorConfig,
    value: `
body { background-color: #0E1218; }
h1, p { color: #FFF; }
`,
    language: "css",
  });
}
