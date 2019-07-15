"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Image = class Image {
    toString() {
        return `${this.file_name}`;
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    tslib_1.__metadata("design:type", String)
], Image.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Image.prototype, "file_name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        name: 'user_id',
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Image.prototype, "userId", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Image.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => User_1.User, user => user.images),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    tslib_1.__metadata("design:type", User_1.User)
], Image.prototype, "user", void 0);
Image = tslib_1.__decorate([
    typeorm_1.Entity()
], Image);
exports.Image = Image;
//# sourceMappingURL=Image.js.map