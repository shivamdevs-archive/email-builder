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
const ColumnsContainerPropsSchema_1 = __importDefault(require("../../../../documents/blocks/ColumnsContainer/ColumnsContainerPropsSchema"));
const BaseSidebarPanel_1 = __importDefault(require("./helpers/BaseSidebarPanel"));
const ColumnWidthsInput_1 = __importDefault(require("./helpers/inputs/ColumnWidthsInput"));
const RadioGroupInput_1 = __importDefault(require("./helpers/inputs/RadioGroupInput"));
const SliderInput_1 = __importDefault(require("./helpers/inputs/SliderInput"));
const MultiStylePropertyPanel_1 = __importDefault(require("./helpers/style-inputs/MultiStylePropertyPanel"));
function ColumnsContainerPanel({ data, setData }) {
    var _a, _b, _c, _d, _e, _f;
    const [, setErrors] = (0, react_1.useState)(null);
    const updateData = (d) => {
        const res = ColumnsContainerPropsSchema_1.default.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    return (react_1.default.createElement(BaseSidebarPanel_1.default, { title: "Columns block" },
        react_1.default.createElement(RadioGroupInput_1.default, { label: "Number of columns", defaultValue: ((_a = data.props) === null || _a === void 0 ? void 0 : _a.columnsCount) === 2 ? '2' : '3', onChange: (v) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { columnsCount: v === '2' ? 2 : 3 }) }));
            } },
            react_1.default.createElement(material_1.ToggleButton, { value: "2" }, "2"),
            react_1.default.createElement(material_1.ToggleButton, { value: "3" }, "3")),
        react_1.default.createElement(ColumnWidthsInput_1.default, { defaultValue: (_b = data.props) === null || _b === void 0 ? void 0 : _b.fixedWidths, onChange: (fixedWidths) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { fixedWidths }) }));
            } }),
        react_1.default.createElement(SliderInput_1.default, { label: "Columns gap", iconLabel: react_1.default.createElement(icons_material_1.SpaceBarOutlined, { sx: { color: 'text.secondary' } }), units: "px", step: 4, marks: true, min: 0, max: 80, defaultValue: (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.columnsGap) !== null && _d !== void 0 ? _d : 0, onChange: (columnsGap) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { columnsGap }) })) }),
        react_1.default.createElement(RadioGroupInput_1.default, { label: "Alignment", defaultValue: (_f = (_e = data.props) === null || _e === void 0 ? void 0 : _e.contentAlignment) !== null && _f !== void 0 ? _f : 'middle', onChange: (contentAlignment) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { contentAlignment }) }));
            } },
            react_1.default.createElement(material_1.ToggleButton, { value: "top" },
                react_1.default.createElement(icons_material_1.VerticalAlignTopOutlined, { fontSize: "small" })),
            react_1.default.createElement(material_1.ToggleButton, { value: "middle" },
                react_1.default.createElement(icons_material_1.VerticalAlignCenterOutlined, { fontSize: "small" })),
            react_1.default.createElement(material_1.ToggleButton, { value: "bottom" },
                react_1.default.createElement(icons_material_1.VerticalAlignBottomOutlined, { fontSize: "small" }))),
        react_1.default.createElement(MultiStylePropertyPanel_1.default, { names: ['backgroundColor', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
exports.default = ColumnsContainerPanel;
//# sourceMappingURL=ColumnsContainerSidebarPanel.js.map