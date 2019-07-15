"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const User_1 = require("../../../src/api/models/User");
class CreateUsers {
    seed(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield factory(User_1.User)().seedMany(10);
        });
    }
}
exports.CreateUsers = CreateUsers;
//# sourceMappingURL=CreateUsers.js.map