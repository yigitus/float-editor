import * as monaco from "monaco-editor";
import { editorConfig } from "../utils/editorConfig.js";
import { initialStyle } from "../utils/initalValues.js";

export function initCssEditor() {
  return monaco.editor.create(document.querySelector("#css-editor"), {
    ...editorConfig,
    value: initialStyle,
    language: "css",
  });
}
