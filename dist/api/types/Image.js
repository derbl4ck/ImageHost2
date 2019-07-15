"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
let Image = class Image {
};
tslib_1.__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Image.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({
        description: 'The filename of the image.',
    }),
    tslib_1.__metadata("design:type", String)
], Image.prototype, "file_name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => User_1.User, {
        nullable: true,
    }),
    tslib_1.__metadata("design:type", User_1.User)
], Image.prototype, "owner", void 0);
Image = tslib_1.__decorate([
    type_graphql_1.ObjectType({
        description: 'Image object.',
    })
], Image);
exports.Image = Image;
//# sourceMappingURL=Image.js.map