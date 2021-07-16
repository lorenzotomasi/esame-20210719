// ? Uncomment what you need
// import { fastify } from "fastify";
// import { fastify-swagger} from "fastify-swagger";
// import {} from "./schema/schema";

// const BaseURL = "/api/";

// const app = fastify({
//     logger: true,
//     ignoreTrailingSlash: true,
// });

// app.register(fastifySwagger, {
//     routePrefix: "/documentation",
//     swagger: {
//       info: {
// ! Cambia nome del title e della description
//         title: "Cecklist",
//         description: "API for acces data from database of ski resort",
//         version: "0.1.0",
//       },
//       host: "localhost:9090",
//       schemes: ["http"],
//       consumes: ["application/json"],
//       produces: ["application/json"],
//     },
//     exposeRoute: true,
//   });

//   app.get(
//       // ! Template per lista
//     `${BaseURL}lista/`,
//     {
//       schema: TemplateListaResponseJsonSchema,
//     },
//     async (req, reply) => {}
//   );

//   app.get(
//     // ! Template per dettaglio lista
//   `${BaseURL}lista/:id`,
//   {
//     schema: TemplateDettaglioListaResponseJsonSchema,
//   },
//   async (req, reply) => {}
// );

// app.get(
// ! Template per elemento/elementi da lista specifica
//   `${BaseURL}lista/:id/items`,
//   {
//     schema: TemplateItemsByListaIdResponseJsonSchema,
//   },
//   async (req, reply) => {}
// );

//   app.listen(9090, (err, address) => {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//   });
