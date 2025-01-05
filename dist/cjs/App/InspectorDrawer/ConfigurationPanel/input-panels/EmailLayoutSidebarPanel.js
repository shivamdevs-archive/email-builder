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
const icons_material_1 = require("@mui/icons-material");
const EmailLayoutPropsSchema_1 = __importDefault(require("../../../../documents/blocks/EmailLayout/EmailLayoutPropsSchema"));
const BaseSidebarPanel_1 = __importDefault(require("./helpers/BaseSidebarPanel"));
const ColorInput_1 = __importStar(require("./helpers/inputs/ColorInput"));
const FontFamily_1 = require("./helpers/inputs/FontFamily");
const SliderInput_1 = __importDefault(require("./helpers/inputs/SliderInput"));
function EmailLayoutSidebarFields({ data, setData }) {
    var _a, _b, _c, _d, _e;
    const [, setErrors] = (0, react_1.useState)(null);
    const updateData = (d) => {
        const res = EmailLayoutPropsSchema_1.default.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    return (react_1.default.createElement(BaseSidebarPanel_1.default, { title: "Global" },
        react_1.default.createElement(ColorInput_1.default, { label: "Backdrop color", defaultValue: (_a = data.backdropColor) !== null && _a !== void 0 ? _a : '#F5F5F5', onChange: (backdropColor) => updateData(Object.assign(Object.assign({}, data), { backdropColor })) }),
        react_1.default.createElement(ColorInput_1.default, { label: "Canvas color", defaultValue: (_b = data.canvasColor) !== null && _b !== void 0 ? _b : '#FFFFFF', onChange: (canvasColor) => updateData(Object.assign(Object.assign({}, data), { canvasColor })) }),
        react_1.default.createElement(ColorInput_1.NullableColorInput, { label: "Canvas border color", defaultValue: (_c = data.borderColor) !== null && _c !== void 0 ? _c : null, onChange: (borderColor) => updateData(Object.assign(Object.assign({}, data), { borderColor })) }),
        react_1.default.createElement(SliderInput_1.default, { iconLabel: react_1.default.createElement(icons_material_1.RoundedCornerOutlined, null), units: "px", step: 4, marks: true, min: 0, max: 48, label: "Canvas border radius", defaultValue: (_d = data.borderRadius) !== null && _d !== void 0 ? _d : 0, onChange: (borderRadius) => updateData(Object.assign(Object.assign({}, data), { borderRadius })) }),
        react_1.default.createElement(FontFamily_1.NullableFontFamily, { label: "Font family", defaultValue: "MODERN_SANS", onChange: (fontFamily) => updateData(Object.assign(Object.assign({}, data), { fontFamily })) }),
        react_1.default.createElement(ColorInput_1.default, { label: "Text color", defaultValue: (_e = data.textColor) !== null && _e !== void 0 ? _e : '#262626', onChange: (textColor) => updateData(Object.assign(Object.assign({}, data), { textColor })) })));
}
exports.default = EmailLayoutSidebarFields;
//# sourceMappingURL=EmailLayoutSidebarPanel.js.map