"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
class ImageNotFoundError extends routing_controllers_1.HttpError {
    constructor() {
        super(404, 'Image not found!');
    }
}
exports.ImageNotFoundError = ImageNotFoundError;
//# sourceMappingURL=ImageNotFoundError.js.map