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
const material_1 = require("@mui/material");
const block_avatar_1 = require("@usewaypoint/block-avatar");
const BaseSidebarPanel_1 = __importDefault(require("./helpers/BaseSidebarPanel"));
const RadioGroupInput_1 = __importDefault(require("./helpers/inputs/RadioGroupInput"));
const SliderInput_1 = __importDefault(require("./helpers/inputs/SliderInput"));
const TextInput_1 = __importDefault(require("./helpers/inputs/TextInput"));
const MultiStylePropertyPanel_1 = __importDefault(require("./helpers/style-inputs/MultiStylePropertyPanel"));
function AvatarSidebarPanel({ data, setData }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const [, setErrors] = (0, react_1.useState)(null);
    const updateData = (d) => {
        const res = block_avatar_1.AvatarPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    const size = (_b = (_a = data.props) === null || _a === void 0 ? void 0 : _a.size) !== null && _b !== void 0 ? _b : block_avatar_1.AvatarPropsDefaults.size;
    const imageUrl = (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.imageUrl) !== null && _d !== void 0 ? _d : block_avatar_1.AvatarPropsDefaults.imageUrl;
    const alt = (_f = (_e = data.props) === null || _e === void 0 ? void 0 : _e.alt) !== null && _f !== void 0 ? _f : block_avatar_1.AvatarPropsDefaults.alt;
    const shape = (_h = (_g = data.props) === null || _g === void 0 ? void 0 : _g.shape) !== null && _h !== void 0 ? _h : block_avatar_1.AvatarPropsDefaults.shape;
    return (react_1.default.createElement(BaseSidebarPanel_1.default, { title: "Avatar block" },
        react_1.default.createElement(SliderInput_1.default, { label: "Size", iconLabel: react_1.default.createElement(icons_material_1.AspectRatioOutlined, { sx: { color: 'text.secondary' } }), units: "px", step: 3, min: 32, max: 256, defaultValue: size, onChange: (size) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { size }) }));
            } }),
        react_1.default.createElement(RadioGroupInput_1.default, { label: "Shape", defaultValue: shape, onChange: (shape) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { shape }) }));
            } },
            react_1.default.createElement(material_1.ToggleButton, { value: "circle" }, "Circle"),
            react_1.default.createElement(material_1.ToggleButton, { value: "square" }, "Square"),
            react_1.default.createElement(material_1.ToggleButton, { value: "rounded" }, "Rounded")),
        react_1.default.createElement(TextInput_1.default, { label: "Image URL", defaultValue: imageUrl, onChange: (imageUrl) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { imageUrl }) }));
            } }),
        react_1.default.createElement(TextInput_1.default, { label: "Alt text", defaultValue: alt, onChange: (alt) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { alt }) }));
            } }),
        react_1.default.createElement(MultiStylePropertyPanel_1.default, { names: ['textAlign', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
exports.default = AvatarSidebarPanel;
//# sourceMappingURL=AvatarSidebarPanel.js.map