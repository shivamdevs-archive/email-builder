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
const block_html_1 = require("@usewaypoint/block-html");
const BaseSidebarPanel_1 = __importDefault(require("./helpers/BaseSidebarPanel"));
const TextInput_1 = __importDefault(require("./helpers/inputs/TextInput"));
const MultiStylePropertyPanel_1 = __importDefault(require("./helpers/style-inputs/MultiStylePropertyPanel"));
function HtmlSidebarPanel({ data, setData }) {
    var _a, _b;
    const [, setErrors] = (0, react_1.useState)(null);
    const updateData = (d) => {
        const res = block_html_1.HtmlPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    return (react_1.default.createElement(BaseSidebarPanel_1.default, { title: "Html block" },
        react_1.default.createElement(TextInput_1.default, { label: "Content", rows: 5, defaultValue: (_b = (_a = data.props) === null || _a === void 0 ? void 0 : _a.contents) !== null && _b !== void 0 ? _b : '', onChange: (contents) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { contents }) })) }),
        react_1.default.createElement(MultiStylePropertyPanel_1.default, { names: ['color', 'backgroundColor', 'fontFamily', 'fontSize', 'textAlign', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
exports.default = HtmlSidebarPanel;
//# sourceMappingURL=HtmlSidebarPanel.js.map