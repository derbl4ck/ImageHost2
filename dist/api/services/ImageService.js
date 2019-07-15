"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const uuid_1 = tslib_1.__importDefault(require("uuid"));
const EventDispatcher_1 = require("../../decorators/EventDispatcher");
const Logger_1 = require("../../decorators/Logger");
const ImageRepository_1 = require("../repositories/ImageRepository");
const events_1 = require("../subscribers/events");
let ImageService = class ImageService {
    constructor(imageRepository, eventDispatcher, log) {
        this.imageRepository = imageRepository;
        this.eventDispatcher = eventDispatcher;
        this.log = log;
    }
    find() {
        this.log.info('Find all images');
        return this.imageRepository.find();
    }
    findByUser(user) {
        this.log.info('Find all images of the user', user.toString());
        return this.imageRepository.find({
            where: {
                userId: user.id,
            },
        });
    }
    findOne(id) {
        this.log.info('Find all images');
        return this.imageRepository.findOne({ id });
    }
    create(image) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Create a new image => ', image.toString());
            image.id = uuid_1.default.v1();
            const newImage = yield this.imageRepository.save(image);
            this.eventDispatcher.dispatch(events_1.events.image.created, newImage);
            return newImage;
        });
    }
    update(id, image) {
        this.log.info('Update a image');
        image.id = id;
        return this.imageRepository.save(image);
    }
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Delete a image');
            yield this.imageRepository.delete(id);
            return;
        });
    }
};
ImageService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, EventDispatcher_1.EventDispatcher()),
    tslib_1.__param(2, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [ImageRepository_1.ImageRepository,
        EventDispatcher_1.EventDispatcherInterface, Object])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=ImageService.js.map