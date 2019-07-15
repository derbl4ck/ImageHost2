"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_graphql_1 = tslib_1.__importDefault(require("express-graphql"));
const path = tslib_1.__importStar(require("path"));
const type_graphql_1 = require("type-graphql");
const typedi_1 = tslib_1.__importDefault(require("typedi"));
const env_1 = require("../env");
const graphql_1 = require("../lib/graphql");
exports.graphqlLoader = (settings) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    if (settings && env_1.env.graphql.enabled) {
        const expressApp = settings.getData('express_app');
        const schema = yield type_graphql_1.buildSchema({
            resolvers: env_1.env.app.dirs.resolvers,
            // automatically create `schema.gql` file with schema definition in current folder
            emitSchemaFile: path.resolve(__dirname, '../api', 'schema.gql'),
        });
        graphql_1.handlingErrors(schema);
        // Add graphql layer to the express app
        expressApp.use(env_1.env.graphql.route, (request, response) => {
            // Build GraphQLContext
            const requestId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); // uuid-like
            const container = typedi_1.default.of(requestId); // get scoped container
            const context = { requestId, container, request, response }; // create our context
            container.set('context', context); // place context or other data in container
            // Setup GraphQL Server
            express_graphql_1.default({
                schema,
                context,
                graphiql: env_1.env.graphql.editor,
                formatError: error => ({
                    code: graphql_1.getErrorCode(error.message),
                    message: graphql_1.getErrorMessage(error.message),
                    path: error.path,
                }),
            })(request, response);
        });
    }
});
//# sourceMappingURL=graphqlLoader.js.map