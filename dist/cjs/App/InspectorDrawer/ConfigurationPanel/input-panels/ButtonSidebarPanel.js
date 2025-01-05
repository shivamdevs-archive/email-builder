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
const block_button_1 = require("@usewaypoint/block-button");
const BaseSidebarPanel_1 = __importDefault(require("./helpers/BaseSidebarPanel"));
const ColorInput_1 = __importDefault(require("./helpers/inputs/ColorInput"));
const RadioGroupInput_1 = __importDefault(require("./helpers/inputs/RadioGroupInput"));
const TextInput_1 = __importDefault(require("./helpers/inputs/TextInput"));
const MultiStylePropertyPanel_1 = __importDefault(require("./helpers/style-inputs/MultiStylePropertyPanel"));
function ButtonSidebarPanel({ data, setData }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const [, setErrors] = (0, react_1.useState)(null);
    const updateData = (d) => {
        const res = block_button_1.ButtonPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    const text = (_b = (_a = data.props) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : block_button_1.ButtonPropsDefaults.text;
    const url = (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.url) !== null && _d !== void 0 ? _d : block_button_1.ButtonPropsDefaults.url;
    const fullWidth = (_f = (_e = data.props) === null || _e === void 0 ? void 0 : _e.fullWidth) !== null && _f !== void 0 ? _f : block_button_1.ButtonPropsDefaults.fullWidth;
    const size = (_h = (_g = data.props) === null || _g === void 0 ? void 0 : _g.size) !== null && _h !== void 0 ? _h : block_button_1.ButtonPropsDefaults.size;
    const buttonStyle = (_k = (_j = data.props) === null || _j === void 0 ? void 0 : _j.buttonStyle) !== null && _k !== void 0 ? _k : block_button_1.ButtonPropsDefaults.buttonStyle;
    const buttonTextColor = (_m = (_l = data.props) === null || _l === void 0 ? void 0 : _l.buttonTextColor) !== null && _m !== void 0 ? _m : block_button_1.ButtonPropsDefaults.buttonTextColor;
    const buttonBackgroundColor = (_p = (_o = data.props) === null || _o === void 0 ? void 0 : _o.buttonBackgroundColor) !== null && _p !== void 0 ? _p : block_button_1.ButtonPropsDefaults.buttonBackgroundColor;
    return (react_1.default.createElement(BaseSidebarPanel_1.default, { title: "Button block" },
        react_1.default.createElement(TextInput_1.default, { label: "Text", defaultValue: text, onChange: (text) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { text }) })) }),
        react_1.default.createElement(TextInput_1.default, { label: "Url", defaultValue: url, onChange: (url) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { url }) })) }),
        react_1.default.createElement(RadioGroupInput_1.default, { label: "Width", defaultValue: fullWidth ? 'FULL_WIDTH' : 'AUTO', onChange: (v) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { fullWidth: v === 'FULL_WIDTH' }) })) },
            react_1.default.createElement(material_1.ToggleButton, { value: "FULL_WIDTH" }, "Full"),
            react_1.default.createElement(material_1.ToggleButton, { value: "AUTO" }, "Auto")),
        react_1.default.createElement(RadioGroupInput_1.default, { label: "Size", defaultValue: size, onChange: (size) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { size }) })) },
            react_1.default.createElement(material_1.ToggleButton, { value: "x-small" }, "Xs"),
            react_1.default.createElement(material_1.ToggleButton, { value: "small" }, "Sm"),
            react_1.default.createElement(material_1.ToggleButton, { value: "medium" }, "Md"),
            react_1.default.createElement(material_1.ToggleButton, { value: "large" }, "Lg")),
        react_1.default.createElement(RadioGroupInput_1.default, { label: "Style", defaultValue: buttonStyle, onChange: (buttonStyle) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { buttonStyle }) })) },
            react_1.default.createElement(material_1.ToggleButton, { value: "rectangle" }, "Rectangle"),
            react_1.default.createElement(material_1.ToggleButton, { value: "rounded" }, "Rounded"),
            react_1.default.createElement(material_1.ToggleButton, { value: "pill" }, "Pill")),
        react_1.default.createElement(ColorInput_1.default, { label: "Text color", defaultValue: buttonTextColor, onChange: (buttonTextColor) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { buttonTextColor }) })) }),
        react_1.default.createElement(ColorInput_1.default, { label: "Button color", defaultValue: buttonBackgroundColor, onChange: (buttonBackgroundColor) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { buttonBackgroundColor }) })) }),
        react_1.default.createElement(MultiStylePropertyPanel_1.default, { names: ['backgroundColor', 'fontFamily', 'fontSize', 'fontWeight', 'textAlign', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
exports.default = ButtonSidebarPanel;
//# sourceMappingURL=ButtonSidebarPanel.js.map