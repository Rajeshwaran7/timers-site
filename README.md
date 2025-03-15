# Kandha Leela Timbers - Premium Teak Furniture E-Commerce Website

A modern, responsive e-commerce website for Kandha Leela Timbers, showcasing premium teak furniture products.

## Features

- **Modern UI Design**: Clean, wood-themed interface with responsive layout for all devices
- **Product Catalog**: Browse products by categories (Chairs, Tables, Sofas, Cots)
- **Product Details**: View detailed product information, specifications, and images
- **Shopping Cart**: Add products to cart, adjust quantities, and proceed to checkout
- **Dark Mode**: Toggle between light and dark themes for a premium experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices

## Tech Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for improved development experience
- **TailwindCSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **React Router**: For navigation and routing
- **Headless UI**: Accessible UI components
- **Heroicons**: Beautiful SVG icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kandha-leela-timbers.git
   cd kandha-leela-timbers
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable UI components
│   ├── layout/     # Layout components (Navbar, Footer, etc.)
│   ├── product/    # Product-related components
│   └── ui/         # Generic UI components
├── context/        # React context providers
├── data/           # Sample product data
├── hooks/          # Custom React hooks
├── pages/          # Page components
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Customization

- **Colors**: Edit the `tailwind.config.js` file to customize the color scheme
- **Products**: Update the `src/data/products.ts` file to add or modify products
- **Theme**: Modify the dark mode implementation in `src/context/ThemeContext.tsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from premium furniture websites
- Icons provided by [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
