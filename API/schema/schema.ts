// ! General params reqeust
// const ParamsByIdJsonSchema = {
//     type: "object",
//     required: ["itemsId"],
//     properties: {
//         itemsId: { type: "number", example: 1, in: "path" },
//     },
// };

// ! General 404 respons

// const Response404WithID = {
//     type: "object",
//     properties: {
//         statusCode: { type: "number", example: 404 },
//         message: {
//             type: "string",
//             example: "No item present with this id",
//         },
//     },
// };

// ! General response

// const ObjectTamplateResponse = {
//     type: "object",
//     properties: {
//         id: { type: "number", example: 1 },
//         objectName: { type: "string", example: "" },
//     },
// };

// ! General array response

// const ObjectArrayTamplateResponse = {
//     type: "array",
//     items: ObjectTamplateResponse,
// };

// ! General response with array
// const GeneralObjectTamplateResponse = {
//     type: "object",
//     properties: {
//         id: { type: "number", example: 1 },
//         objectName: { type: "string", example: "" },
//         otherPropBool: { type: "boolean", example: true },
//         otherPropNum: { type: "number", example: 2 },
//         otherPropString: { type: "string", example: "" },
//         otherPropStringFormatDate: {
//             type: "string",
//             format: "date",
//             example: "12:30",
//         },
// ? call for an array element
//         otherObject: {
//             type: "array",
//             items: ObjectArrayTamplateResponse,
//         },
//     },
// };

// const GeneralObjectArrayTamplateResponse = {
//     type: "array",
//     items: GeneralObjectTamplateResponse,
// };

// ! General params for body request
// const GeneralObjectTamplateBody = {
//     type: "object",
//     required: ["objectName", "otherPropBool"],
//     properties: {
//         objectName: { type: "string", example: "" },
//         otherPropBool: { type: "boolean", example: true },
//         otherPropNum: { type: "number", example: 2 },
//         otherPropString: { type: "string", example: "" },
//         otherPropStringFormatDate: {
//             type: "string",
//             format: "date",
//             example: "12:30",
//         },
//     },
// };

// ! General compleate response from GET
// export const GeneralResponseJsonSchema = {
//     descritpion: "",
//     params: ParamsByIdJsonSchema,
//     response: {
//         200: GeneralObjectTamplateResponse,
//         404: Response404WithID,
//     },
// };

// ! General compleate response for POST
// export const GeneralPostJsonSchema = {
//     description: "",
//     params: ParamsByIdJsonSchema,
//     body: GeneralObjectTamplateBody,
//     response: {
//         201: GeneralObjectTamplateResponse,
//         400: PostRespons400JsonSchema,
//         404: TaskListGetRespons404JsonSchema,
//     },
// };
