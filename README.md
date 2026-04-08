# HarvestView App

## Project Overview

HarvestView is a modern web application built with React, Vite, and Tailwind CSS. The site features an integrated Boafo accessibility widget to ensure the platform is usable by all visitors, including those with disabilities. The application includes interactive maps powered by Leaflet, smooth animations with Framer Motion, and client-side routing via React Router.

### Main Features

- Boafo accessibility widget integration for enhanced site accessibility
- Interactive map visualizations using React Leaflet
- Responsive design with Tailwind CSS
- Smooth page transitions and animations with Framer Motion
- Client-side routing with React Router DOM

### Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router DOM
- Leaflet / React Leaflet
- Framer Motion
- Boafo Accessibility Widget

## How to Get Your Boafo API Key

1. Visit [boafo.co](https://boafo.co) to register for an account.
2. After registration, log in and navigate to your dashboard.
3. Retrieve your unique API key from the dashboard.

## Boafo Widget Integration Guide

For detailed instructions on integrating the Boafo widget, refer to the official guide:
https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/GROW-YAI/harvestviewapp.git
   cd harvestviewapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment example file:
   ```bash
   cp .env.example .env
   ```

4. Fill in your Boafo API key in the `.env` file:
   ```
   VITE_BOAFO_API_KEY=your_actual_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```
