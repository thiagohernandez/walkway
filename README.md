## Live version

See online [https://walkway.vercel.app/](https://walkway.vercel.app/)

## Getting Started

First, clone the project locally and install the dependencies:

````bash
npm install --force
````

### Why use --force flag
The project was built using the latest version of Next.js, which incorporates React 19 RC. To prevent compatibility issues when installing dependencies use this specific flag.


Second, start the development server:

```bash
npm run dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## File structure
The project is organized following this guideline: <br>
<img src="https://raw.githubusercontent.com/thiagohernandez/walkway/refs/heads/main/public/fileStructure.png" alt="File structure">

## Styling the app
This project uses TailwindCSS to style the app but you can use plain CSS directly on `app/globals.css`.

<ul>
  <li><strong>public</strong>: Contain all the public files used in the final version;</li>
  <li><strong>src/app</strong>: All the pages are created in under this folder;</li>
  <li><strong>src/components</strong>: Holds all components used in the application;</li>
  <li><strong>src/data</strong>: Mock the data used in this example;</li>
  <li><strong>src/types</strong>: Organize the types that were used multiple times in the app.</li>
</ul>

## Next steps (to-do)
 <ul>
    <li>[ ] Create more components in order to reduce code complexity;</li>
    <li>[ ] Check if it is necessary to use the useCallback hook to improve performance;</li>
    <li>[ ] Change the favicon</li>
    <li>[ ] Refactor the tooltip to improve the UX</li>
    <li>[ ] Create the test files using Jest</li>
 </ul>

