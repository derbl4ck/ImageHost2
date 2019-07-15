"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Image_1 = require("./Image");
let User = class User {
};
tslib_1.__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({
        description: 'The first name of the user.',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({
        description: 'The username of the user.',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => [Image_1.Image], {
        description: 'A list of images which belong to the user.',
    }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "images", void 0);
User = tslib_1.__decorate([
    type_graphql_1.ObjectType({
        description: 'User object.',
    })
], User);
exports.User = User;
//# sourceMappingURL=User.js.map