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
const block_divider_1 = require("@usewaypoint/block-divider");
const BaseSidebarPanel_1 = __importDefault(require("./helpers/BaseSidebarPanel"));
const ColorInput_1 = __importDefault(require("./helpers/inputs/ColorInput"));
const SliderInput_1 = __importDefault(require("./helpers/inputs/SliderInput"));
const MultiStylePropertyPanel_1 = __importDefault(require("./helpers/style-inputs/MultiStylePropertyPanel"));
function DividerSidebarPanel({ data, setData }) {
    var _a, _b, _c, _d;
    const [, setErrors] = (0, react_1.useState)(null);
    const updateData = (d) => {
        const res = block_divider_1.DividerPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    const lineColor = (_b = (_a = data.props) === null || _a === void 0 ? void 0 : _a.lineColor) !== null && _b !== void 0 ? _b : block_divider_1.DividerPropsDefaults.lineColor;
    const lineHeight = (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.lineHeight) !== null && _d !== void 0 ? _d : block_divider_1.DividerPropsDefaults.lineHeight;
    return (react_1.default.createElement(BaseSidebarPanel_1.default, { title: "Divider block" },
        react_1.default.createElement(ColorInput_1.default, { label: "Color", defaultValue: lineColor, onChange: (lineColor) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { lineColor }) })) }),
        react_1.default.createElement(SliderInput_1.default, { label: "Height", iconLabel: react_1.default.createElement(icons_material_1.HeightOutlined, { sx: { color: 'text.secondary' } }), units: "px", step: 1, min: 1, max: 24, defaultValue: lineHeight, onChange: (lineHeight) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { lineHeight }) })) }),
        react_1.default.createElement(MultiStylePropertyPanel_1.default, { names: ['backgroundColor', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
exports.default = DividerSidebarPanel;
//# sourceMappingURL=DividerSidebarPanel.js.map