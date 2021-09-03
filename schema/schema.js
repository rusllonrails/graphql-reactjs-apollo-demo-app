const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const movies = [
  { id: 1, name: 'Pelky Blinders', genre: 'Crime', directorId: 2 },
  { id: 2, name: 'Patriot', genre: 'Comedy', directorId: 1 },
  { id: 3, name: 'Pink Panter', genre: 'Cartoon', directorId: 4 },
  { id: 4, name: 'Terminator 2', genre: 'Action', directorId: 3 },
  { id: 5, name: 'Vorse', genre: 'Crime', directorId: 2 },
  { id: 6, name: 'Gringos', genre: 'Comedy', directorId: 1 },
  { id: 7, name: 'Low Big', genre: 'Cartoon', directorId: 4 },
  { id: 8, name: 'Plumber 2', genre: 'Action', directorId: 3 }
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
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        return directors.find(director => director.id == parent.directorId);
      }
    }
  })
});

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies.filter(movie => movie.directorId == parent.id);
      }
    }
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
