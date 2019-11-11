"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
console.log("Hello student.");
var RoleEnum;
(function (RoleEnum) {
    RoleEnum[RoleEnum["admin"] = 0] = "admin";
    RoleEnum[RoleEnum["subadmin"] = 1] = "subadmin";
    RoleEnum[RoleEnum["manager"] = 2] = "manager";
    RoleEnum[RoleEnum["user"] = 3] = "user";
    RoleEnum[RoleEnum["hr"] = 4] = "hr";
})(RoleEnum || (RoleEnum = {}));
var Role = /** @class */ (function () {
    function Role(roleEnum) {
        this.roleCode = roleEnum;
        this.roleName = RoleEnum[roleEnum];
    }
    return Role;
}());
var CommonUser = /** @class */ (function () {
    function CommonUser(role) {
        this.role = role;
    }
    CommonUser.prototype.getFirstName = function () {
        return this.firstName;
    };
    CommonUser.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    CommonUser.prototype.getLastName = function () {
        return this.lastName;
    };
    CommonUser.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    CommonUser.prototype.getGender = function () {
        return this.gender;
    };
    CommonUser.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    return CommonUser;
}());
exports.CommonUser = CommonUser;
var role = new Role(RoleEnum.admin);
console.log(new CommonUser(role));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super.call(this, new Role(RoleEnum.user)) || this;
    }
    return User;
}(CommonUser));
exports.User = User;
var user = new User();
console.log(user);
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser() {
        return _super.call(this, new Role(RoleEnum.admin)) || this;
    }
    return AdminUser;
}(CommonUser));
exports.AdminUser = AdminUser;
var adminUser = new AdminUser();
console.log(adminUser);
console.log(adminUser.getFirstName());
console.log(window);
