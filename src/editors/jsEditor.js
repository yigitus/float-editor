import * as monaco from "monaco-editor";
import { editorConfig } from "../utils/editorConfig.js";

export function initJsEditor() {
  return monaco.editor.create(document.querySelector("#js-editor"), {
    ...editorConfig,
    value: `console.log("Hello World!");`,
    language: "javascript",
  });
}
