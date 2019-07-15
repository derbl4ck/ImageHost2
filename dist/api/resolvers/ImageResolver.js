"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dataloader_1 = tslib_1.__importDefault(require("dataloader"));
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const DLoader_1 = require("../../decorators/DLoader");
const Logger_1 = require("../../decorators/Logger");
const Image_1 = require("../models/Image");
const User_1 = require("../models/User");
const ImageService_1 = require("../services/ImageService");
const Image_2 = require("../types/Image");
const ImageInput_1 = require("../types/input/ImageInput");
let ImageResolver = class ImageResolver {
    constructor(imageService, log, userLoader) {
        this.imageService = imageService;
        this.log = log;
        this.userLoader = userLoader;
    }
    images({ requestId }) {
        this.log.info(`{${requestId}} Find all users`);
        return this.imageService.find();
    }
    addImage(image) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newImage = new Image_1.Image();
            newImage.file_name = image.file_name;
            return this.imageService.create(newImage);
        });
    }
    owner(image) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (image.userId) {
                return this.userLoader.load(image.userId);
            }
            // return this.userService.findOne(`${image.userId}`);
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(returns => [Image_2.Image]),
    tslib_1.__param(0, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageResolver.prototype, "images", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(returns => Image_2.Image),
    tslib_1.__param(0, type_graphql_1.Arg('image')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ImageInput_1.ImageInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageResolver.prototype, "addImage", null);
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Image_1.Image]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageResolver.prototype, "owner", null);
ImageResolver = tslib_1.__decorate([
    typedi_1.Service(),
    type_graphql_1.Resolver(of => Image_2.Image),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__param(2, DLoader_1.DLoader(User_1.User)),
    tslib_1.__metadata("design:paramtypes", [ImageService_1.ImageService, Object, dataloader_1.default])
], ImageResolver);
exports.ImageResolver = ImageResolver;
//# sourceMappingURL=ImageResolver.js.map