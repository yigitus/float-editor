import * as monaco from "monaco-editor";
import { editorConfig } from "../utils/editorConfig.js";
import { initialScript } from "../utils/initalValues.js";

export function initJsEditor() {
  return monaco.editor.create(document.querySelector("#js-editor"), {
    ...editorConfig,
    value: initialScript,
    language: "javascript",
  });
}
