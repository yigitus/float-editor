import * as monaco from "monaco-editor";
import { editorConfig } from "../utils/editorConfig.js";

export function initHtmlEditor() {
  return monaco.editor.create(document.querySelector("#html-editor"), {
    ...editorConfig,
    value: `<p>Hello</p>`,
    language: "html",
  });
}
