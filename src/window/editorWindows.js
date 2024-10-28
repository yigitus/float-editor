// import WinBox from "winbox";

export function createEditorWindow(title, mountSelector, horizontalAlign, onSave) {
  const editorWindow = new WinBox(title, {
    root: document.querySelector("#app"),
    mount: document.querySelector(mountSelector),
    background: "rgba(0, 0, 0, 0.7)",
    width: "33%",
    height: "45%",
    x: horizontalAlign,
    y: "bottom",
    onclose: function () {
      onSave();  // Save the editor content before closing
    },
  });

  editorWindow.removeControl("wb-close");
  editorWindow.addControl({
    position: "left",
    class: "fa-regular fa-floppy-disk",
    click: onSave,
  });

  return editorWindow;
}