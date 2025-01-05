"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function ReaderBlockWrapper({ style, children }) {
    const { padding, borderColor } = style, restStyle = __rest(style, ["padding", "borderColor"]);
    const cssStyle = Object.assign({}, restStyle);
    if (padding) {
        const { top, bottom, left, right } = padding;
        cssStyle.padding = `${top}px ${right}px ${bottom}px ${left}px`;
    }
    if (borderColor) {
        cssStyle.border = `1px solid ${borderColor}`;
    }
    return react_1.default.createElement("div", { style: Object.assign({ maxWidth: '100%' }, cssStyle) }, children);
}
exports.default = ReaderBlockWrapper;
//# sourceMappingURL=ReaderBlockWrapper.js.map