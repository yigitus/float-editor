import * as monaco from "monaco-editor";

// Define custom theme
monaco.editor.defineTheme("island-dark", {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#00000033",
    "editor.lineHighlightBackground": "#00000033",
  },
});

export const editorConfig = {
  automaticLayout: true,
  theme: "island-dark",
  minimap: {
    enabled: false,
  },
};
