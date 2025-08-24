# Todo App

A modern, responsive Todo application built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Add, toggle, and delete todos**
- 🔍 **Filter todos** (All, Active, Completed)
- 💾 **Persistent storage** using localStorage
- 🎨 **Beautiful animations** with Framer Motion
- 📱 **Responsive design** that works on all devices
- ♿ **Accessible** with proper ARIA labels and semantic HTML
- 🎯 **TypeScript** for type safety and better development experience

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library

## Color Palette

- **Light Mint** (`#E6F7ED`) - Background and subtle UI elements
- **Medium Green** (`#6FCF97`) - Primary buttons and highlights
- **Dark Teal** (`#2F6E82`) - Text and strong accents

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── TodoInput.tsx   # Input form for adding todos
│   ├── TodoItem.tsx    # Individual todo item
│   └── FilterButtons.tsx # Filter buttons
├── hooks/              # Custom React hooks
│   └── useTodos.ts     # Todo management logic
├── pages/              # Page components
│   └── Home.tsx        # Main todo page
├── types/              # TypeScript type definitions
│   └── todo.ts         # Todo interface and types
├── utils/              # Utility functions
│   └── storage.ts      # localStorage helpers
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Key Features Implementation

### Todo Management
- **Add todos**: Type and submit to add new todos
- **Toggle completion**: Click the circular button to mark as complete/incomplete
- **Delete todos**: Click the trash icon to remove todos
- **Persistent storage**: Todos are automatically saved to localStorage

### Filtering
- **All**: Shows all todos
- **Active**: Shows only incomplete todos
- **Completed**: Shows only completed todos
- **Counts**: Each filter shows the count of matching todos

### Animations
- **Smooth transitions** when adding/removing todos
- **Hover effects** on interactive elements
- **Layout animations** for smooth reordering
- **Entrance animations** for new elements

### Accessibility
- **Semantic HTML** structure
- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Focus management** for form elements

## Development

### Code Quality
- **TypeScript strict mode** enabled
- **ESLint** configuration for code quality
- **Prettier** for consistent formatting
- **Component-based architecture** for maintainability

### Styling
- **Tailwind CSS** for utility-first styling
- **Custom color palette** defined in `tailwind.config.js`
- **Responsive design** with mobile-first approach
- **Smooth transitions** and hover states

## License

This project is open source and available under the [LICENSE](LICENSE) file.
