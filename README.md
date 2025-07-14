# Personality Quiz React App

This is a simple personality quiz web application built with [Create React App](https://github.com/facebook/create-react-app). Users answer a series of fun questions, and the app determines their "element" (Fire, Water, Earth, or Air) based on their answers. At the end, a random artwork from The Met's public collection is displayed.

## Features

- Enter your name to start the quiz
- Answer multiple-choice questions
- Get a result based on your answers
- See a random artwork from The Met Museum API
- Responsive and clean UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd personality_quiz
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Running Tests

```sh
npm test
```

## Project Structure

- `src/`
  - `components/` - Reusable React components (Header, Question, Results, UserForm, UserContext)
  - `pages/` - Page components (Home, Quiz)
  - `App.js` - Main app component with routing
  - `index.js` - Entry point
  - `App.css` - Styles

## API

This app uses [The Met Museum Collection API](https://metmuseum.github.io/) to fetch random artworks for the results page.

## License

This project is open source and available under the [MIT License](LICENSE).
