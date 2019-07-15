"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const User_1 = require("../models/User");
const ImageService_1 = require("../services/ImageService");
const UserService_1 = require("../services/UserService");
const User_2 = require("../types/User");
let UserResolver = class UserResolver {
    constructor(userService, imageService) {
        this.userService = userService;
        this.imageService = imageService;
    }
    users() {
        return this.userService.find();
    }
    images(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.imageService.findByUser(user);
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(returns => [User_2.User]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "images", null);
UserResolver = tslib_1.__decorate([
    typedi_1.Service(),
    type_graphql_1.Resolver(of => User_2.User),
    tslib_1.__metadata("design:paramtypes", [UserService_1.UserService,
        ImageService_1.ImageService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UserResolver.js.map