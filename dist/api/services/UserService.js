"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const uuid_1 = tslib_1.__importDefault(require("uuid"));
const EventDispatcher_1 = require("../../decorators/EventDispatcher");
const Logger_1 = require("../../decorators/Logger");
const UserRepository_1 = require("../repositories/UserRepository");
const events_1 = require("../subscribers/events");
let UserService = class UserService {
    constructor(userRepository, eventDispatcher, log) {
        this.userRepository = userRepository;
        this.eventDispatcher = eventDispatcher;
        this.log = log;
    }
    find() {
        this.log.info('Find all users');
        return this.userRepository.find({ relations: ['images'] });
    }
    findOne(id) {
        this.log.info('Find one user');
        return this.userRepository.findOne({ id });
    }
    create(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Create a new user => ', user.toString());
            user.id = uuid_1.default.v1();
            const newUser = yield this.userRepository.save(user);
            this.eventDispatcher.dispatch(events_1.events.user.created, newUser);
            return newUser;
        });
    }
    update(id, user) {
        this.log.info('Update a user');
        user.id = id;
        return this.userRepository.save(user);
    }
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Delete a user');
            yield this.userRepository.delete(id);
            return;
        });
    }
};
UserService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, EventDispatcher_1.EventDispatcher()),
    tslib_1.__param(2, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [UserRepository_1.UserRepository,
        EventDispatcher_1.EventDispatcherInterface, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map