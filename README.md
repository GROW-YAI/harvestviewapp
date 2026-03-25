# HarvestView GH

## Project Overview

HarvestView GH is a modern agricultural technology website built for Ghana's farming community. The platform showcases innovative farming solutions and sustainable agriculture practices, focusing on hydroponics and modern farming techniques.

### Purpose
The website serves as a digital presence for HarvestView GH, an agricultural innovation company that aims to revolutionize farming in Ghana through technology-driven solutions.

### Main Features
- **Hero Section**: Dynamic landing page with compelling visuals showcasing modern farming
- **About Product**: Detailed information about hydroponics and modern farming solutions
- **About Innovator**: Profile section highlighting the company's mission and vision
- **Showcase**: Gallery of farming projects and innovations
- **Contact**: Interactive contact form with Leaflet map integration for location display
- **Accessibility**: Boafo accessibility widget integration for inclusive user experience

### Technologies Used
- **Frontend Framework**: React 19 with React Router v7
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion for smooth transitions
- **Maps**: React Leaflet for interactive location display
- **Icons**: React Icons library
- **Build Tool**: Vite v6
- **Accessibility**: Boafo Accessibility Widget for enhanced accessibility features

### Accessibility
This project uses the **Boafo Accessibility Widget** to make the site accessible to all users. The widget provides features like:
- Screen reader support
- High contrast mode
- Font size adjustments
- Keyboard navigation enhancements
- And more accessibility features

---

## How to Get Your Boafo API Key

1. Visit [boafo.co](https://boafo.co)
2. Register for an account or log in to your existing account
3. Navigate to your dashboard
4. Find your API key in the dashboard settings
5. Copy the API key for use in your project

**Note**: Do not share your API key publicly or commit it to version control.

---

## How to Integrate the Boafo Widget

### Step 1: Install the Package
```bash
npm install boafo-accessibility-widget
```

### Step 2: Create a Client Component
Create a client component at `app/components/BoafoWidgetInitializer.tsx` that reads the API key from the environment variable:

```tsx
"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const apiKey = import.meta.env.VITE_BOAFO_API_KEY;
    if (apiKey) {
      initializeBoafoWidget(apiKey);
    }
  }, []);

  return null; // nothing to render
}
```

### Step 3: Import and Use in Layout
Import and use `BoafoWidgetInitializer` inside your main layout file (`src/layouts/RootLayout.jsx` or `app/layout.tsx`):

```jsx
import BoafoWidgetInitializer from "../../app/components/BoafoWidgetInitializer";

function RootLayout() {
  return (
    <>
      <BoafoWidgetInitializer />
      {/* Other layout components */}
    </>
  );
}

export default RootLayout;
```

### Step 4: TypeScript Support (Optional)
For TypeScript support, create `src/types/global.d.ts` with the module declaration:

```typescript
declare module "boafo-accessibility-widget" {
  export function initializeBoafoWidget(apiKey: string): void;
}

interface ImportMetaEnv {
  readonly VITE_BOAFO_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

Update `tsconfig.json` to include `src/types`:

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./src/types"]
  }
}
```

### Step 5: For Static HTML Integration
If using static HTML, add the Boafo script tag using `data-api-key` pointing to the environment variable:

```html
<script
  src="https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js"
  data-api-key="%VITE_BOAFO_API_KEY%"
  defer
></script>
```

---

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/GROW-YAI/harvestviewapp.git
cd harvestviewapp
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

4. **Add your API key**
Open the `.env` file and add your Boafo API key:
```
VITE_BOAFO_API_KEY=your_actual_api_key_here
```

5. **Run the development server**
```bash
npm run dev
# or
pnpm dev
```

6. **Build for production**
```bash
npm run build
# or
pnpm build
```

7. **Preview production build**
```bash
npm run preview
# or
pnpm preview
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BOAFO_API_KEY` | Your Boafo Accessibility Widget API key | Yes |

---

## Project Structure

```
harvestviewapp/
├── app/
│   └── components/
│       └── BoafoWidgetInitializer.tsx
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ScrollToTop.jsx
│   ├── layouts/
│   │   └── RootLayout.jsx
│   ├── pages/
│   │   └── home/
│   │       ├── index.jsx
│   │       └── sections/
│   │           ├── AboutInnovator.jsx
│   │           ├── AboutProduct.jsx
│   │           ├── Contact.jsx
│   │           ├── Hero.jsx
│   │           └── Showcase.jsx
│   ├── types/
│   │   └── global.d.ts
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   └── images/
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.js
```

---

## License

This project is private and proprietary to HarvestView GH.

---

## Support

For support or questions about the Boafo widget, visit [boafo.co](https://boafo.co) or refer to their documentation.