import { defineConfig } from 'vite'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monacoEditorPlugin.default({
            languages: ['javascript'],
            features: ['coreCommands', 'find', 'format', 'hover', 'suggest'],
        }),
    ],
})