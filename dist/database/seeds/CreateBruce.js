"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const uuid = tslib_1.__importStar(require("uuid"));
const User_1 = require("../../../src/api/models/User");
class CreateBruce {
    seed(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            const user = new User_1.User();
            user.id = uuid.v1();
            user.name = 'Bruce';
            user.username = 'xXbruceXx';
            user.password = '1234';
            return yield em.save(user);
        });
    }
}
exports.CreateBruce = CreateBruce;
//# sourceMappingURL=CreateBruce.js.map