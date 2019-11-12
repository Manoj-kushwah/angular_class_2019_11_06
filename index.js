"use strict";
exports.__esModule = true;
console.log("Hello student.");
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["subadmin"] = 1] = "subadmin";
    Role[Role["manager"] = 2] = "manager";
    Role[Role["user"] = 3] = "user";
    Role[Role["hr"] = 4] = "hr";
})(Role || (Role = {}));
var Admin = /** @class */ (function () {
    function Admin(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = Role.admin;
    }
    Admin.prototype.getFirstName = function () {
        return this.firstName;
    };
    Admin.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Admin.prototype.getRole = function () {
        return this.role;
    };
    Admin.prototype.setRole = function (role) {
        this.role = role;
    };
    return Admin;
}());
var admin1 = new Admin('Abc', 'zyx');
console.log(admin1);
console.log(admin1.getRole());
console.log(admin1.getFirstName());
