import WinBox from "winbox";
import "./style.css";
import { initJsEditor } from "./src/editors/jsEditor.js";
import { initCssEditor } from "./src/editors/cssEditor.js";
import { initHtmlEditor } from "./src/editors/htmlEditor.js";
import { createEditorWindow } from "./src/window/editorWindows.js";
import { initPreview, updatePreviewSrc } from "./src/preview/previewManager.js";

// Initialize editors
const jsEditor = initJsEditor();
const cssEditor = initCssEditor();
const htmlEditor = initHtmlEditor();

// Update preview source when editors change
function updateScript() {
  updatePreviewSrc(cssEditor.getValue(), htmlEditor.getValue(), jsEditor.getValue());
}

// Initialize windows for editors
const jsEditorWindow = createEditorWindow("JavaScript", "#js-editor", "left", updateScript);
const cssEditorWindow = createEditorWindow("CSS", "#css-editor", "center", updateScript);
const htmlEditorWindow = createEditorWindow("HTML", "#html-editor", "right", updateScript);

// Initialize preview
initPreview();
