
# ThullyReact

## Getting Started

Follow these instructions to set up and run the project locally.


### Installation

Install the dependencies:

   ```bash
   npm install
   ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

### Unavoidable Issues Encountered

#### 1. React and Astro.js Compatibility Issue

While integrating React with Astro.js, I encountered an issue related to Hot Module Replacement (HMR), specifically when editing components in real-time. The error message is as follows:

```
hmr invalidate /src/components/App/App.tsx Could not Fast Refresh ("AppContext" export is incompatible). Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports
```

This issue arises from the `useContext` hook behaving unexpectedly, particularly with the "AppContext" export. After some troubleshooting, I configured the development server to require a full restart whenever this issue occurs. 

**Key Consideration:** This only happens when editing code in real-time. Under normal circumstances (without live edits), the server runs smoothly without any issues. However, when code changes trigger this error, a full restart is necessary to ensure compatibility and avoid any runtime errors.

#### 2. API Issue: Broken Images

The second issue I encountered is related to broken images returned from the API:

```
https://arthurfrost.qflo.co.za/php/getTimeline.php
```

Some of the images fetched from this API are not loading correctly, resulting in missing visuals on the front end. My initial instinct was to edit or manipulate the `image.png` files directly based on the returned data, but I realized this approach would lead to further complications and is considered bad practice.

