"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_seeding_1 = require("typeorm-seeding");
const Image_1 = require("../../api/models/Image");
const User_1 = require("../../api/models/User");
class CreateImages {
    seed(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            yield typeorm_seeding_1.times(10, (n) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const image = yield factory(Image_1.Image)().seed();
                const user = yield factory(User_1.User)().make();
                user.images = [image];
                return yield em.save(user);
            }));
        });
    }
}
exports.CreateImages = CreateImages;
//# sourceMappingURL=CreateImages.js.map