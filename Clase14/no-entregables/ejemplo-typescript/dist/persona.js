"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Persona.prototype.getFullName = function () {
        return "".concat(this.fname, " ").concat(this.lname);
    };
    return Persona;
}());
exports.default = Persona;
