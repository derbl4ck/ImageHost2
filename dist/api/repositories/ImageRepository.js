"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Image_1 = require("../models/Image");
let ImageRepository = class ImageRepository extends typeorm_1.Repository {
    /**
     * Find by user_id is used for our data-loader to get all needed images in one query.
     */
    findByUserIds(ids) {
        return this.createQueryBuilder()
            .select()
            .where(`image.user_id IN (${ids.map(id => `'${id}'`).join(', ')})`)
            .getMany();
    }
};
ImageRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Image_1.Image)
], ImageRepository);
exports.ImageRepository = ImageRepository;
//# sourceMappingURL=ImageRepository.js.map