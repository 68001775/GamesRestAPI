const swaggerJSdoc = require("swagger-jsdoc");
const options = {
    definition: {
        opeapi: "3.0.0",
        info: {
            title: "Node.js Express IGDB Games REST API",
            version: "1.0.0",
        },
    },
    apis: ["./routes/*.js"]
}
const swaggerSpec = swaggerJSdoc(options)
module.exports = swaggerSpec