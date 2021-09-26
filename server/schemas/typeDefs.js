// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User 
  {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book
  {
      authors: [String]
      description: String!
      bookId: String!
      image: String
      link: String
      title: String!
  }
  
  type Auth 
  {
    token: ID!
    user: User
  }

  type Query 
  {
    me: User
  }

  input BookContent 
  {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }

  type Mutation 
  {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(content: BookContent!): User
    removeBook(bookId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;