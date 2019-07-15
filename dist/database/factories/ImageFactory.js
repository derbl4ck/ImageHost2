"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_seeding_1 = require("typeorm-seeding");
const uuid = tslib_1.__importStar(require("uuid"));
const Image_1 = require("../../api/models/Image");
typeorm_seeding_1.define(Image_1.Image, (faker) => {
    const image = new Image_1.Image();
    image.id = uuid.v1();
    image.file_name = faker.system.fileName('png');
    return image;
});
//# sourceMappingURL=ImageFactory.js.map