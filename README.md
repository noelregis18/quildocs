# QuilDocs

QuilDocs is a real-time collaborative document editing application inspired by Google Docs. It allows multiple users to edit the same document simultaneously, with changes reflected in real-time across all connected clients.

## Features

- **Real-time Collaboration**: Multiple users can edit the same document simultaneously
- **Rich Text Editing**: Powered by Quill.js with support for formatting, lists, images, and more
- **Automatic Saving**: Documents are automatically saved to MongoDB at regular intervals
- **Unique Document IDs**: Each document has a unique URL that can be shared with collaborators
- **Responsive Design**: Works on various screen sizes

## Tech Stack

### Frontend
- React.js
- Quill.js (Rich text editor)
- Socket.io-client (Real-time communication)
- React Router (Navigation)
- Material UI (UI components)

### Backend
- Node.js
- Socket.io (WebSocket server)
- MongoDB (Document storage)
- Mongoose (MongoDB ODM)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or accessible via connection string)

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd quildocs
   ```

2. Install server dependencies
   ```
   cd server
   npm install
   ```

3. Install client dependencies
   ```
   cd ../client
   npm install
   ```

### Configuration

1. Make sure MongoDB is running on your local machine at `mongodb://127.0.0.1:27017`
   - If you're using a different MongoDB connection string, update it in `server/server.js`

2. The server runs on port 8000 and the client on port 5173 by default
   - If you need to change these ports, update them in the respective configuration files

### Running the Application

1. Start the server
   ```
   cd server
   npm start
   ```

2. Start the client (in a new terminal)
   ```
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Usage

1. When you visit the application, you'll be automatically redirected to a new document with a unique ID
2. Share the URL with collaborators to allow them to edit the same document
3. All changes are automatically saved to the database
4. Use the rich text toolbar to format your document

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Editor.jsx  # Main editor component
│   │   │   └── styles.css  # Editor styles
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # Entry point
│   └── package.json        # Frontend dependencies
└── server/                 # Backend Node.js application
    ├── Document.js         # MongoDB document model
    ├── server.js           # Socket.io server
    └── package.json        # Backend dependencies
```

## License

[MIT](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.