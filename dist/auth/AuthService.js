"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const User_1 = require("../api/models/User");
const UserRepository_1 = require("../api/repositories/UserRepository");
const Logger_1 = require("../decorators/Logger");
let AuthService = class AuthService {
    constructor(log, userRepository) {
        this.log = log;
        this.userRepository = userRepository;
    }
    parseBasicAuthFromRequest(req) {
        const authorization = req.header('authorization');
        if (authorization && authorization.split(' ')[0] === 'Basic') {
            this.log.info('Credentials provided by the client');
            const decodedBase64 = Buffer.from(authorization.split(' ')[1], 'base64').toString('ascii');
            const username = decodedBase64.split(':')[0];
            const password = decodedBase64.split(':')[1];
            if (username && password) {
                return { username, password };
            }
        }
        this.log.info('No credentials provided by the client');
        return undefined;
    }
    validateUser(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: {
                    username,
                },
            });
            if (yield User_1.User.comparePassword(user, password)) {
                return user;
            }
            return undefined;
        });
    }
};
AuthService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__param(1, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__metadata("design:paramtypes", [Object, UserRepository_1.UserRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map