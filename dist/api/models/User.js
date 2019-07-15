"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var User_1;
"use strict";
const bcryptjs = tslib_1.__importStar(require("bcryptjs"));
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Image_1 = require("./Image");
let User = User_1 = class User {
    static hashPassword(password) {
        return new Promise((resolve, reject) => {
            bcryptjs.hash(password, 10, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    }
    static comparePassword(user, password) {
        return new Promise((resolve, reject) => {
            bcryptjs.compare(password, user.password, (err, res) => {
                resolve(res === true);
            });
        });
    }
    toString() {
        return `${this.name} (${this.username})`;
    }
    hashPassword() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.password = yield User_1.hashPassword(this.password);
        });
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column({ name: 'name' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column(),
    class_transformer_1.Exclude(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => Image_1.Image, image => image.user),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "images", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = User_1 = tslib_1.__decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map