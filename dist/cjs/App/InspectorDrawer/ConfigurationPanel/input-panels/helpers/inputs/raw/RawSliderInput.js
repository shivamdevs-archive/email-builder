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
const material_1 = require("@mui/material");
function RawSliderInput(_a) {
    var { iconLabel, value, setValue, units } = _a, props = __rest(_a, ["iconLabel", "value", "setValue", "units"]);
    return (react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "center", spacing: 2, justifyContent: "space-between", width: "100%" },
        react_1.default.createElement(material_1.Box, { sx: { minWidth: 24, lineHeight: 1, flexShrink: 0 } }, iconLabel),
        react_1.default.createElement(material_1.Slider, Object.assign({}, props, { value: value, onChange: (_, value) => {
                if (typeof value !== 'number') {
                    throw new Error('RawSliderInput values can only receive numeric values');
                }
                setValue(value);
            } })),
        react_1.default.createElement(material_1.Box, { sx: { minWidth: 32, textAlign: 'right', flexShrink: 0 } },
            react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1 } },
                value,
                units))));
}
exports.default = RawSliderInput;
//# sourceMappingURL=RawSliderInput.js.map