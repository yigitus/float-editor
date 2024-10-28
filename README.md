# Float Editor

Float Editor is a minimalistic, browser-based code editor designed to allow developers to write HTML, CSS, and JavaScript while viewing a full-width and full-height preview of their work. Unlike traditional editors, each editor panel "floats" independently, giving users an unobstructed view of the output page in real-time. This unique approach makes it easy to build responsive, immersive layouts without the constraints of a split-screen setup.

## Features

- **Floating Panels**: Each code editor (HTML, CSS, JavaScript) is a separate, movable, translucent window.
- **Full-Page Preview**: See the entire webpage preview without any obstructive UI elements.
- **Live Reload**: Real-time updates to the preview as you code.
- **Lightweight and Fast**: Built with Vite for a fast development experience.

## Project Structure

```plaintext
.
├── .gitignore          # Files to ignore in version control
├── index.html          # Main HTML file
├── main.js             # JavaScript for the core functionality
├── package.json        # Project dependencies and scripts
├── public/             # Static assets (images, icons, etc.)
├── style.css           # Main stylesheet for styling the editor and preview
└── vite.config.js      # Configuration for Vite bundler
```

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your system. [You can download Node.js from here](https://nodejs.org/tr).

### Installation
1. Clone the repository:
```
git clone https://github.com/yourusername/float-editor.git
cd float-editor
```
2. Install dependencies:
```
npm install
```
3. Start the development server:
```
npm run dev
```
4. Open the localhost link from the command prompt.

## Contributing
We welcome contributions to Float Editor! To contribute:
1. Fork the repository.
2. Clone your fork and create a new branch:
```
git checkout -b feature/your-feature-name
```
3. Commit your changes with a clear message.
4. Push to your fork and submit a Pull Request.

Please check the issues page for tasks that need help, or feel free to suggest your own improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.