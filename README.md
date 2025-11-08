# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# QC Data Table – React + TypeScript 

This project implements a reusable, configurable data table component with the following features:

- Dynamic columns and rows passed through props  
- Sorting (ascending / descending)  
- Global search (with text highlighting)  
- Row selection callback  
- Horizontal scrolling for smaller screens  
- Vertical scrolling for high number of datas
- Pagination
- Loading and error states  
- Clean UI with CSS Modules  
- Fetching data from a public API (`jsonplaceholder.typicode.com/users`)

---

##  Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **CSS Modules**

---

##  Project Setup

Clone the repo and install dependencies:

```bash
npm install
npm run dev

# The app will start at
http://localhost:5173

#Folder structure
src/
  components/
    QcDataTable/
      QcDataTable.tsx
      QcDataTable.module.css
    Loading/
      Loading.tsx
      Loading.module.css
  hooks/
    useUsers.ts
    useDataFilter.ts
    useDataSorting.ts
    usePagination.ts
  pages/
    mainpage.tsx
  App.tsx
main.tsx

## Design and approach
1.Fetch Users

Data is fetched from: "https://jsonplaceholder.typicode.com/users"

We extract only: "id, name, email"

Errors and loading states are handled cleanly.

2.Global Search (with Highlight)

Users can type in a search box, and the table filters and highlights matching text inside cells.

3.Sorting

Click on a column header to sort:

Ascending ▲

Descending ▼

Sorting is controlled per-column using a simple handler.

4.Row Selection

When a row is clicked, the selected row data is returned via:

onRowSelect={(row) => console.log("Selected:", row)}

The selected row is visually highlighted.

5.Horizontal Scroll

For large tables and smaller screens, the table scrolls horizontally.

6. Vertical scroll

7.Pagination

This project includes a lightweight and reusable pagination system designed specifically for the data table component. Pagination is implemented using a custom React hook that handles:

- Current page tracking
- Total pages calculation
- Page slicing (returning only the rows for the active page)
- Navigation helpers (next, previous, go to page)
- Support for any page size (default: 5 rows per page)

To run these command:

    npm run dev
    for production - npm run build


