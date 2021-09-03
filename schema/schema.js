const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const movies = [
  { id: '1', name: 'Pelky Blinders', genre: 'Crime' },
  { id: '2', name: 'Patriot', genre: 'Comedy' },
  { id: 3, name: 'Pink Panter', genre: 'Cartoon' },
  { id: 4, name: 'Terminator 2', genre: 'Action' }
];

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
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
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query
});
