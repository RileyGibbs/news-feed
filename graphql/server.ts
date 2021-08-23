import {ApolloServer, gql} from 'apollo-server-micro'
import * as resolvers from './resolvers'

const typeDefs = gql`
  type Project {
    id: Int!
    name: String!
    description: String!
    icon_url: String!
    users: [User!]!
    created_ts: String!
  }

  type User {
    id: Int!
    name: String!
    bio: String!
    avatar_url: String!
    fellowship: String!
    projects: [Project!]!
    created_ts: String!
  }

  type Feed {
    title: String!
    body: String!
    img_url: String
    fellowship: String
    type: String!
    created_ts: String!
  }

  type Query {
    angels_feed(offset: Int!): [Feed!]!
    founders_feed(offset: Int!): [Feed!]!
    project(id: Int!): Project!
    user(id: Int!): User!
    writers_feed(offset: Int!): [Feed!]!
  }
`;

export const server = new ApolloServer({typeDefs, resolvers})
