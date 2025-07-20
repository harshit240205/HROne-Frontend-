# HROne Frontend Intern Hiring Task

This repository contains the JSON Schema Builder application created for the HROne Frontend Intern Hiring Task.

## Project Overview

The JSON Schema Builder is a React-based application that allows users to dynamically create and edit JSON schemas through an intuitive interface. It features:

- Dynamic field management (add, edit, delete)
- Support for String, Number, and Nested data types
- Recursive nested field creation
- Real-time JSON preview
- Modern UI built with Ant Design

## Quick Start

1. Navigate to the project directory:
   ```bash
   cd json-schema-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technology Stack

- **React 19.1.0** - Modern React with hooks
- **Ant Design 5.26.5** - UI component library
- **React Hook Form 7.60.0** - Form management
- **JavaScript** - ES6+ features

## Features Implemented

✅ **Core Functionality**
- Edit field names/keys
- Add fields dynamically
- Delete fields
- Add nested fields for 'Nested' type
- Recursive nested field support

✅ **UI/UX**
- Tabbed interface (Schema Builder + JSON Preview)
- Real-time JSON preview
- Modern Ant Design styling
- Responsive design

✅ **Data Types**
- String (default: empty string)
- Number (default: 0)
- Nested (supports recursive nesting)

## Project Structure

```
HROne-Frontend-/
├── json-schema-builder/          # Main application
│   ├── src/
│   │   ├── components/
│   │   │   ├── SchemaBuilder.js  # Main schema builder component
│   │   │   └── FieldItem.js      # Individual field component
│   │   ├── App.js               # Root application component
│   │   └── index.js             # Application entry point
│   ├── package.json             # Dependencies and scripts
│   └── README.md               # Detailed project documentation
└── README.md                   # This file
```

## Deployment

The application is ready for deployment on:
- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: `npm run build` then upload build folder

## Task Requirements Met

- ✅ ReactJS application with Ant Design
- ✅ JavaScript implementation (TypeScript optional)
- ✅ Dynamic field management
- ✅ Nested field support with recursion
- ✅ Real-time JSON preview in tabs
- ✅ Default values for String and Number types
- ✅ Modern, clean UI design

## Contact

For questions about this implementation, please refer to the task requirements or contact the hiring team.