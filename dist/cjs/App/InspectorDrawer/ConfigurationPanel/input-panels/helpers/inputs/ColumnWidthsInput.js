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
exports.DEFAULT_3_COLUMNS = exports.DEFAULT_2_COLUMNS = void 0;
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const TextDimensionInput_1 = __importDefault(require("./TextDimensionInput"));
exports.DEFAULT_2_COLUMNS = [6];
exports.DEFAULT_3_COLUMNS = [4, 8];
function ColumnWidthsInput({ defaultValue, onChange }) {
    const [currentValue, setCurrentValue] = (0, react_1.useState)(() => {
        if (defaultValue) {
            return defaultValue;
        }
        return [null, null, null];
    });
    const setIndexValue = (index, value) => {
        const nValue = [...currentValue];
        nValue[index] = value;
        setCurrentValue(nValue);
        onChange(nValue);
    };
    const columnsCountValue = 3;
    let column3 = null;
    if (columnsCountValue === 3) {
        column3 = (react_1.default.createElement(TextDimensionInput_1.default, { label: "Column 3", defaultValue: currentValue === null || currentValue === void 0 ? void 0 : currentValue[2], onChange: (v) => {
                setIndexValue(2, v);
            } }));
    }
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
        react_1.default.createElement(TextDimensionInput_1.default, { label: "Column 1", defaultValue: currentValue === null || currentValue === void 0 ? void 0 : currentValue[0], onChange: (v) => {
                setIndexValue(0, v);
            } }),
        react_1.default.createElement(TextDimensionInput_1.default, { label: "Column 2", defaultValue: currentValue === null || currentValue === void 0 ? void 0 : currentValue[1], onChange: (v) => {
                setIndexValue(1, v);
            } }),
        column3));
}
exports.default = ColumnWidthsInput;
//# sourceMappingURL=ColumnWidthsInput.js.map