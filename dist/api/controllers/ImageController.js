"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const ImageNotFoundError_1 = require("../errors/ImageNotFoundError");
const Image_1 = require("../models/Image");
const ImageService_1 = require("../services/ImageService");
let ImageController = class ImageController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    find() {
        return this.imageService.find();
    }
    one(id) {
        return this.imageService.findOne(id);
    }
    create(image) {
        return this.imageService.create(image);
    }
    update(id, image) {
        return this.imageService.update(id, image);
    }
    delete(id) {
        return this.imageService.delete(id);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ImageController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id'),
    routing_controllers_1.OnUndefined(ImageNotFoundError_1.ImageNotFoundError),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Post(),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Image_1.Image]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageController.prototype, "create", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/:id'),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Image_1.Image]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageController.prototype, "update", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/:id'),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageController.prototype, "delete", null);
ImageController = tslib_1.__decorate([
    routing_controllers_1.Authorized(),
    routing_controllers_1.JsonController('/images'),
    tslib_1.__metadata("design:paramtypes", [ImageService_1.ImageService])
], ImageController);
exports.ImageController = ImageController;
//# sourceMappingURL=ImageController.js.map