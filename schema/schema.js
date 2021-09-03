const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

const movies = [
  { id: 1, name: 'Pelky Blinders', genre: 'Crime' },
  { id: 2, name: 'Patriot', genre: 'Comedy' },
  { id: 3, name: 'Pink Panter', genre: 'Cartoon' },
  { id: 4, name: 'Terminator 2', genre: 'Action' }
];

const directors = [
  { id: 1, name: 'Mister Been', age: 65 },
  { id: 2, name: 'Astra Hanckock', age: 33 },
  { id: 3, name: 'Timoti Dalton', age: 45 },
  { id: 4, name: 'John Doe', age: 23 }
];

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return movies.find(movie => movie.id == args.id);
      }
    },
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return directors.find(director => director.id == args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query
});
