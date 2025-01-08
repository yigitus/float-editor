import * as monaco from "monaco-editor";
import { editorConfig } from "../utils/editorConfig.js";
import { initialBody } from "../utils/initalValues.js";

export function initHtmlEditor() {
  return monaco.editor.create(document.querySelector("#html-editor"), {
    ...editorConfig,
    value: initialBody,
    language: "html",
  });
}
