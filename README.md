# SHPE UF SWE Team Training Backend Template

![alt text](https://shpeuf.s3.amazonaws.com/public/misc/logo_horizontal.png "SHPE logo")


# GraphQL Backend API

This project is a GraphQL backend built with Apollo Server and MongoDB, providing a structured API for managing artist data. The backend supports queries and mutations for retrieving and modifying artist records.

## Features
- GraphQL API with Apollo Server
- MongoDB database integration using Mongoose
- Queries to fetch artists and individual artist data
- Mutations to add new artists

## Setup and Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- A MongoDB database (local or cloud-based, such as [MongoDB Atlas](https://www.mongodb.com/atlas))

### Installation Steps
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```
3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:
     ```env
     MONGODB=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database-name?retryWrites=true&w=majority
     ```

## Running the Server
Start the server using:
```sh
yarn start
```
The server should now be running, and you can access GraphQL Playground at:
```
http://localhost:5001/
```

## GraphQL API
### Queries
#### Fetch all artists
```graphql
query GetArtists {
  getArtists {
    id
    name
    genre
  }
}
```
#### Fetch a single artist by ID
```graphql
query GetArtist($id: ID!) {
  getArtist(id: $id) {
    id
    name
    genre
  }
}
```

### Mutations
#### Add a new artist
```graphql
mutation AddArtist($name: String!, $genre: String!) {
  addArtist(name: $name, genre: $genre) {
    id
    name
    genre
  }
}
```

## Project Structure
```
/project-root
│── graphql/
│   ├── TypeDefs.js  # GraphQL schema definitions
│   ├── resolvers/
│   │   ├── index.js  # Root resolver
│   │   ├── artist.js  # Artist-related resolvers
│── models/
│   ├── Artist.js  # Mongoose schema and model
│── config.js  # Configuration settings
│── index.js  # Entry point of the server
│── package.json  # Project dependencies and scripts
│── README.md  # Project documentation
```

## Open http://localhost:5001/ in Chrome 
<img width="1088" alt="Screenshot 2025-04-03 at 12 56 00 PM" src="https://github.com/user-attachments/assets/c1ce5fd6-ccc7-4682-8b20-cdcf1a6ec4ea" />


