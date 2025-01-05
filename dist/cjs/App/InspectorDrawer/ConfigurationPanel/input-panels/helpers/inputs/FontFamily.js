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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableFontFamily = void 0;
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const fontFamily_1 = require("../../../../../../documents/blocks/helpers/fontFamily");
const OPTIONS = fontFamily_1.FONT_FAMILIES.map((option) => (react_1.default.createElement(material_1.MenuItem, { key: option.key, value: option.key, sx: { fontFamily: option.value } }, option.label)));
function NullableFontFamily({ label, onChange, defaultValue }) {
    const [value, setValue] = (0, react_1.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : 'inherit');
    return (react_1.default.createElement(material_1.TextField, { select: true, variant: "standard", label: label, value: value, onChange: (ev) => {
            const v = ev.target.value;
            setValue(v);
            onChange(v === null ? null : v);
        } },
        react_1.default.createElement(material_1.MenuItem, { value: "inherit" }, "Match email settings"),
        OPTIONS));
}
exports.NullableFontFamily = NullableFontFamily;
//# sourceMappingURL=FontFamily.js.map