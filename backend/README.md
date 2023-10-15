# Backend for Receipt Reading and Reward System

This is the backend for the Receipt Reading and Reward System application. It is built using Express.js and can be connected to either MongoDB or PostgreSQL database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and either MongoDB or PostgreSQL installed on your machine.

### Installing

1. Clone the repository
2. Navigate to the backend directory
3. Install the dependencies using `npm install`
4. Create a `.env` file and set your environment variables (refer to `.env.example` for required variables)
5. Start the server using `npm start`

## Project Structure

```
backend/
|-- node_modules/
|-- config/
|   |-- db.js
|   |-- auth0.js
|-- models/
|   |-- User.js
|   |-- Receipt.js
|   |-- Product.js
|-- routes/
|   |-- users.js
|   |-- receipts.js
|   |-- products.js
|   |-- admin.js
|-- utils/
|   |-- ocr.js
|-- app.js
|-- package.json
|-- README.md
```

## Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [MongoDB](https://www.mongodb.com/) or [PostgreSQL](https://www.postgresql.org/) - The database used
- [Google OCR API](https://cloud.google.com/vision/docs/ocr) - Used to read receipts
- [Auth0 API](https://auth0.com/) - Used for user authentication

## Authors

- Your Name

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc