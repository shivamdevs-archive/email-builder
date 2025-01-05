"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const RadioGroupInput_1 = __importDefault(require("./RadioGroupInput"));
function FontWeightInput({ label, defaultValue, onChange }) {
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    return (react_1.default.createElement(RadioGroupInput_1.default, { label: label, defaultValue: value, onChange: (fontWeight) => {
            setValue(fontWeight);
            onChange(fontWeight);
        } },
        react_1.default.createElement(material_1.ToggleButton, { value: "normal" }, "Regular"),
        react_1.default.createElement(material_1.ToggleButton, { value: "bold" }, "Bold")));
}
exports.default = FontWeightInput;
//# sourceMappingURL=FontWeightInput.js.map