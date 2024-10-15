

## Installation

Follow these steps to set up the backend project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/satyamjaysawal/TodoList-with-Auth-Assign-Backend.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd TodoList-with-Auth-Assign-Backend
   ```

3. **Install the required dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine. Then run:

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root of the project and add the following environment variables:

   ```plaintext
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   PORT=5000
   ```

   Replace `<your_mongodb_connection_string>` and `<your_jwt_secret_key>` with your MongoDB connection string and a secret key for JWT authentication.

## Usage

To start the backend server, run:

```bash
npm start
```

The server will be available at `http://localhost:5000`.

## Dependencies

This project uses the following dependencies:

- **Express**: A web framework for Node.js.
- **Mongoose**: A MongoDB object modeling tool.
- **bcryptjs**: A library for hashing passwords.
- **jsonwebtoken**: A library for creating and verifying JSON Web Tokens.
- **dotenv**: A zero-dependency module that loads environment variables.
- **cors**: A middleware for enabling Cross-Origin Resource Sharing.

You can view the full list of dependencies in the `package.json` file.

