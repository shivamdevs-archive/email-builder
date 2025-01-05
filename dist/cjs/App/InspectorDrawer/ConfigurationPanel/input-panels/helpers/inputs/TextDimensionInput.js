"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
function TextDimensionInput({ label, defaultValue, onChange }) {
    const handleChange = (ev) => {
        const value = parseInt(ev.target.value);
        onChange(isNaN(value) ? null : value);
    };
    return (react_1.default.createElement(material_1.TextField, { fullWidth: true, onChange: handleChange, defaultValue: defaultValue, label: label, variant: "standard", placeholder: "auto", size: "small", InputProps: {
            endAdornment: (react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, "px")),
        } }));
}
exports.default = TextDimensionInput;
//# sourceMappingURL=TextDimensionInput.js.map