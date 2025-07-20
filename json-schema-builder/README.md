# JSON Schema Builder

A React-based JSON Schema Builder application that allows users to dynamically create and edit JSON schemas through an intuitive interface.

## Features

- **Dynamic Field Management**: Add, edit, and delete fields dynamically
- **Multiple Data Types**: Support for String, Number, and Nested types
- **Recursive Nested Fields**: Create unlimited nested objects with recursive functionality
- **Real-time JSON Preview**: Live JSON output that updates as you build your schema
- **Modern UI**: Built with Ant Design for a clean and professional look
- **Tabbed Interface**: Separate tabs for schema building and JSON preview

## Technology Stack

- **React 19.1.0**: Modern React with hooks
- **Ant Design 5.26.5**: UI component library
- **React Hook Form 7.60.0**: Form management (ready for future enhancements)
- **JavaScript**: ES6+ features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
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

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Basic Operations

1. **Adding Fields**: Click the "Add Field" button to add new fields to your schema
2. **Editing Field Names**: Click on the field name input to edit the key
3. **Changing Types**: Use the dropdown to select between String, Number, or Nested types
4. **Deleting Fields**: Click the delete button (trash icon) to remove fields
5. **Nested Fields**: Select "Nested" type to create nested objects with their own fields

### Schema Types

- **String**: Creates string fields with empty string default values
- **Number**: Creates number fields with 0 as default values
- **Nested**: Creates object fields that can contain other fields

### JSON Preview

Switch to the "JSON Preview" tab to see the real-time JSON output of your schema. The JSON updates automatically as you modify the schema.

## Project Structure

```
src/
├── components/
│   ├── SchemaBuilder.js    # Main schema builder component
│   └── FieldItem.js        # Individual field component
├── App.js                  # Root application component
└── index.js               # Application entry point
```

## Key Components

### SchemaBuilder
- Main component that manages the overall schema state
- Handles field addition, deletion, and updates
- Generates JSON output from field definitions
- Provides tabbed interface for builder and preview

### FieldItem
- Renders individual field inputs
- Handles field type changes and nested field management
- Supports recursive rendering for nested objects
- Manages field deletion and updates

## Development

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

### Code Style

The project follows React best practices:
- Functional components with hooks
- Proper state management
- Clean component separation
- Consistent naming conventions

## Future Enhancements

- Form validation using React Hook Form
- Schema import/export functionality
- Custom field types
- Schema templates
- TypeScript migration
- Unit tests

## Deployment

The application can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the build folder to Netlify
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for the HROne Frontend Intern Hiring Task.

## Contact

For questions or support, please refer to the task requirements or contact the hiring team.
