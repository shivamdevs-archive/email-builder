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
const block_image_1 = require("@usewaypoint/block-image");
const BaseSidebarPanel_1 = __importDefault(require("./helpers/BaseSidebarPanel"));
const RadioGroupInput_1 = __importDefault(require("./helpers/inputs/RadioGroupInput"));
const TextDimensionInput_1 = __importDefault(require("./helpers/inputs/TextDimensionInput"));
const TextInput_1 = __importDefault(require("./helpers/inputs/TextInput"));
const MultiStylePropertyPanel_1 = __importDefault(require("./helpers/style-inputs/MultiStylePropertyPanel"));
function ImageSidebarPanel({ data, setData }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const [, setErrors] = (0, react_1.useState)(null);
    const updateData = (d) => {
        const res = block_image_1.ImagePropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    return (react_1.default.createElement(BaseSidebarPanel_1.default, { title: "Image block" },
        react_1.default.createElement(TextInput_1.default, { label: "Source URL", defaultValue: (_b = (_a = data.props) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : '', onChange: (v) => {
                const url = v.trim().length === 0 ? null : v.trim();
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { url }) }));
            } }),
        react_1.default.createElement(TextInput_1.default, { label: "Alt text", defaultValue: (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.alt) !== null && _d !== void 0 ? _d : '', onChange: (alt) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { alt }) })) }),
        react_1.default.createElement(TextInput_1.default, { label: "Click through URL", defaultValue: (_f = (_e = data.props) === null || _e === void 0 ? void 0 : _e.linkHref) !== null && _f !== void 0 ? _f : '', onChange: (v) => {
                const linkHref = v.trim().length === 0 ? null : v.trim();
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { linkHref }) }));
            } }),
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 2 },
            react_1.default.createElement(TextDimensionInput_1.default, { label: "Width", defaultValue: (_g = data.props) === null || _g === void 0 ? void 0 : _g.width, onChange: (width) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { width }) })) }),
            react_1.default.createElement(TextDimensionInput_1.default, { label: "Height", defaultValue: (_h = data.props) === null || _h === void 0 ? void 0 : _h.height, onChange: (height) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { height }) })) })),
        react_1.default.createElement(RadioGroupInput_1.default, { label: "Alignment", defaultValue: (_k = (_j = data.props) === null || _j === void 0 ? void 0 : _j.contentAlignment) !== null && _k !== void 0 ? _k : 'middle', onChange: (contentAlignment) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { contentAlignment }) })) },
            react_1.default.createElement(material_1.ToggleButton, { value: "top" },
                react_1.default.createElement(icons_material_1.VerticalAlignTopOutlined, { fontSize: "small" })),
            react_1.default.createElement(material_1.ToggleButton, { value: "middle" },
                react_1.default.createElement(icons_material_1.VerticalAlignCenterOutlined, { fontSize: "small" })),
            react_1.default.createElement(material_1.ToggleButton, { value: "bottom" },
                react_1.default.createElement(icons_material_1.VerticalAlignBottomOutlined, { fontSize: "small" }))),
        react_1.default.createElement(MultiStylePropertyPanel_1.default, { names: ['backgroundColor', 'textAlign', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
exports.default = ImageSidebarPanel;
//# sourceMappingURL=ImageSidebarPanel.js.map