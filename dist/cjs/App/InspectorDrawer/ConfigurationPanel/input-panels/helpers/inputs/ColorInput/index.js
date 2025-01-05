"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableColorInput = void 0;
const react_1 = __importDefault(require("react"));
const BaseColorInput_1 = __importDefault(require("./BaseColorInput"));
function ColorInput(props) {
    return react_1.default.createElement(BaseColorInput_1.default, Object.assign({}, props, { nullable: false }));
}
exports.default = ColorInput;
function NullableColorInput(props) {
    return react_1.default.createElement(BaseColorInput_1.default, Object.assign({}, props, { nullable: true }));
}
exports.NullableColorInput = NullableColorInput;
//# sourceMappingURL=index.js.map