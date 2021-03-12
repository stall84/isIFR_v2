import { GraphQLList, 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLScalarType
 } from 'graphql';

import {API} from '../../keys/apikey';

import axios from 'axios';

const BASE_URL = `https://avwx.rest/api/metar/`;
const API_KEY = API.key;

function fetchWeather(ICAO) {
    return axios.get(`${BASE_URL}${ICAO}?token=${API_KEY}`)
        .then((res) => {
            console.log('fetchWeather Called ');
            return res.data;
        })
        .catch((error) => {
            console.log('Error: ', error);
        })
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
            type: WeatherResponseType,
            args: {
                code: { type: GraphQLString },
            },
            async resolve(root, args) {
                const responseObj = await fetchWeather(`${args.code}`); 
                console.log('Query Received')
                return responseObj;
            }
        }
    })
})


export default new GraphQLSchema({
    query: QueryType,
});