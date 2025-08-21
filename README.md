# Color Palette Builder

A fast, lightweight, and user-friendly generator for custom color palettes — ideal for designers, developers, and anyone
who wants to compose harmonious colors.

- Live demo: https://dkluske.github.io/color-palette-builder
- Stack: React 19, Vite 7, GitHub Pages

## Features

- Random colors with one click: instantly create a palette of 5 starter colors and re-roll individual entries.
- Manual editing: edit the hex code per color (accepts `#RRGGBB` or `RRGGBB`; automatically normalized to uppercase).
- Validation: prevents invalid hex codes; helpful error message on invalid input.
- Keyboard shortcuts while editing: Enter = Save, Escape = Cancel.
- Manage the palette: add colors (up to 10 entries) or delete (at least 1 color is always kept).

## Quick start

Prerequisite: Node.js (LTS recommended).

1. Clone or download the repository
2. Install dependencies
    - `npm install`
3. Start the development server
    - `npm run dev`
4. Open the app in your browser (Vite prints the local URL in the console)

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create the production build in `dist`
- `npm run preview` — start a local preview server for the build
- `npm run lint` — run linting
- `npm run deploy` — publish to GitHub Pages (automatically builds via `predeploy`)

## Deployment (GitHub Pages)

This project uses `gh-pages` to host the production build from the `dist` folder.

- Build and deploy with a single command: `npm run deploy`
- Make sure the repository is configured accordingly (the `gh-pages` branch is maintained automatically).

## Technical overview

- React 19 (with hooks)
- Vite 7 (fast development and build)
- ESLint (including React Hooks plugin)

## Roadmap / ideas

- Export the palette (e.g., as JSON, CSS variables, Tailwind config)
- Import palettes
- Support for HSL/HSV and color names
- Copy hex code on click
- Sharing link for palettes

## Contributing

Contributions are welcome!

- Issues: report bugs or make suggestions
- Pull requests: small, focused changes with a short description
- Code style: follow ESLint (`npm run lint`)

## License

There is currently no license file in the repository. For real open-source usage, consider adding a LICENSE file (e.g.,
MIT). If you want a specific license, add the file to the project root and adjust this section accordingly.

## Acknowledgements

- Built with React and Vite
- Hosted via GitHub Pages