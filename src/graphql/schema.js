import { GraphQLList, 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLScalarType
 } from 'graphql';

import {API} from '../../keys/apikey';

const BASE_URL = `https://avwx.rest/api/metar/`;
const API_KEY = API.key;

function fetchWeather(ICAO) {
    return fetch(`${BASE_URL}${ICAO}${API_KEY}`)
        .then(res => res.json());
}

const WeatherResponseType = new GraphQLObjectType({
    name: 'WeatherResponseType',
    description: 'Modeling fields we will use from the avwx api response object',
    fields: () => ({
        flightRules: {
            type: GraphQLString,
            resolve: wxRx => wxRx.flight_rules,
        },
        metar: {
            type: GraphQLString,
            resolve: wxRx => wxRx.raw,
        }
    })
})

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query call to avwx REST API',
    fields: () => ({
        wxResponse: {
            type: new GraphQLList(WeatherResponseType),
            args: {
                code: { type: GraphQLString },
            },
            resolve: (root, args) => fetchWeather(`${args.code}`) 
        }
    })
})


export default new GraphQLSchema({
    query: QueryType,
});