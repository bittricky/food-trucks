# Food Trucks

> People gotta eat.

An interactive web application to help you discover food trucks near you.

## Features

- 🗺️ **Interactive Map**: Dark-themed map interface showing food truck locations
- 📍 **Location Search**: Search for any location to find nearby food trucks
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔍 **Smart Search**: Filter food trucks by name or type of food
- 📍 **Geolocation**: Use your current location to find nearby food trucks
- 🎯 **Distance-Based Results**: View food trucks within a specified radius
- 💫 **Smooth Animations**: Enjoyable user experience with animated transitions

## Data Source

The application uses real-time data from the [San Francisco Food Truck API](https://data.sfgov.org/resource/rqzj-sfat.json), providing up-to-date information about food truck locations, types of food, and operating hours.

## Tech Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS
- **Maps**: Leaflet with React-Leaflet
- **State Management**: React Query
- **Icons**: Lucide React
- **Location Search**: OpenStreetMap Nominatim API

## Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd food-trucks
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/app` - Next.js app router and API routes
- `/src/components` - React components
  - `/map` - Map-related components
  - `/sidebar` - Sidebar and search components
- `/src/utils` - Utility functions
- `/src/hooks` - Custom React hooks
- `/src/types` - TypeScript type definitions
- `/src/context` - React context providers

## API Endpoints

- `GET /api/food-trucks` - Get food trucks near a location
  - Query Parameters:
    - `lat` - Latitude (default: 37.7749)
    - `lon` - Longitude (default: -122.4194)
    - `radius` - Search radius in kilometers (default: 5)
    - `q` - Search query for filtering trucks
