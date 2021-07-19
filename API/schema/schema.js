"use strict";
exports.__esModule = true;
exports.StartByLocationIdResponseJsonSchema = void 0;
// * Params for location id
var ParamsByIdJsonSchema = {
    type: "object",
    required: ["locationId"],
    properties: {
        locationId: { type: "string", example: "locationId", "in": "path" }
    }
};
// * General 404 respons
var Response404WithID = {
    type: "object",
    properties: {
        statusCode: { type: "number", example: 404 },
        message: {
            type: "string",
            example: "No location present with this id"
        }
    }
};
var generalStats = {
    type: "object",
    properties: {
        avgNumberOfPeopleIn: { type: "number", example: 100 },
        avgNumberOfPeopleOut: { type: "number", example: 100 },
        maxNumberOfPeopleIn: { type: "number", example: 100 },
        minNumberOfPeopleIn: { type: "number", example: 100 },
        maxNumberOfPeopleOut: { type: "number", example: 100 },
        minNumberOfPeopleOut: { type: "number", example: 100 },
        avgStayTime: { type: "number", example: 10 },
        maxStayTime: { type: "number", example: 10 },
        minStayTime: { type: "number", example: 10 }
    }
};
var lastHourStats = {
    type: "object",
    properties: {
        numberOfPeopleIn: { type: "number", example: 100 },
        numberOfPeopleOut: { type: "number", example: 100 },
        avgStayTime: { type: "number", example: 10 },
        startTime: { type: "string", format: "date-time", example: "2021-07-21T17:32:28Z" }
    }
};
// * stat result 
var StatsLocationByIdResult = {
    type: "object",
    properties: {
        locationId: { type: "string", example: "locationId" },
        generalStats: generalStats,
        lastHourStats: lastHourStats
    }
};
// *  Compleate response for stats get 
exports.StartByLocationIdResponseJsonSchema = {
    descritpion: "Information about number of people inside the location",
    params: ParamsByIdJsonSchema,
    response: {
        200: StatsLocationByIdResult,
        404: Response404WithID
    }
};
