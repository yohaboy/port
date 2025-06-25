# React + Tailwind CSS v4 + Vite Starter

A minimal, modern starter template to kickstart your next React project with [Vite](https://vitejs.dev/), [React 19](https://react.dev/), and [Tailwind CSS v4](https://tailwindcss.com/). Includes hot module replacement (HMR), ESLint integration, and a clean, extendable structure.

## Features
- ⚡️ **Vite** for fast development and builds
- ⚛️ **React 19** with functional components
- 🎨 **Tailwind CSS v4** for utility-first styling
- 🧹 **ESLint** with recommended rules and React hooks support
- 🔥 HMR (Hot Module Replacement) out of the box
- 🏗️ Minimal, easy-to-extend project structure

## Tech Stack
- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [ESLint 9](https://eslint.org/)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
```bash
npm install
```

### Development
Start the local development server with hot reloading:
```bash
npm run dev
```

### Build
Create a production build:
```bash
npm run build
```

### Preview
Preview the production build locally:
```bash
npm run preview
```

### Lint
Check code for linting errors:
```bash
npm run lint
```

## Project Structure
```
react-tailwindcss4-vite/
├── public/           # Static assets (favicon, etc.)
├── src/              # Source code
│   ├── assets/       # Images, SVGs, etc.
│   ├── App.jsx       # Main app component
│   ├── App.css       # Example custom styles
│   ├── index.css     # Tailwind CSS import
│   └── main.jsx      # Entry point
├── index.html        # HTML template
├── vite.config.js    # Vite configuration
├── eslint.config.js  # ESLint configuration
├── package.json      # Project metadata & scripts
└── README.md         # Project documentation
```

## Customization
- **Tailwind CSS**: Edit `src/index.css` to add custom styles or Tailwind directives.
- **ESLint**: Update `eslint.config.js` to adjust linting rules.
- **Vite**: Modify `vite.config.js` for advanced configuration.

## Contributing
Pull requests and issues are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE) © 0xdavinci
