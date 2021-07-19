// ? Uncomment what you need
import { fastify } from "fastify";
import { fastifySwagger } from "fastify-swagger";
import { StartByLocationIdResponseJsonSchema } from "./schema/schema";
// import {} from "./schema/schema";
const BaseURL = '/api/';

const app = fastify({
    logger: true,
    ignoreTrailingSlash: true,
});

app.register(fastifySwagger, {
    routePrefix: "/documentation",
    swagger: {
        info: {
            // ! Cambia nome del title e della description
            title: "Touring Club Italiano",
            description: "API for acces data from database of Touring Club Italiano",
            version: "0.1.0",
        },
        host: "localhost:9090",
        schemes: ["http"],
        consumes: ["application/json"],
        produces: ["application/json"],
    },
    exposeRoute: true,
});



app.get(
    `${BaseURL}location/:id/stats`,
    {
        schema: StartByLocationIdResponseJsonSchema,
    },
    async (req, reply) => { }
);

app.listen(9090, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});
