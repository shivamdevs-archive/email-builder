"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_colorful_1 = require("react-colorful");
const material_1 = require("@mui/material");
const Swatch_1 = __importDefault(require("./Swatch"));
const DEFAULT_PRESET_COLORS = [
    '#E11D48',
    '#DB2777',
    '#C026D3',
    '#9333EA',
    '#7C3AED',
    '#4F46E5',
    '#2563EB',
    '#0284C7',
    '#0891B2',
    '#0D9488',
    '#059669',
    '#16A34A',
    '#65A30D',
    '#CA8A04',
    '#D97706',
    '#EA580C',
    '#DC2626',
    '#FFFFFF',
    '#FAFAFA',
    '#F5F5F5',
    '#E5E5E5',
    '#D4D4D4',
    '#A3A3A3',
    '#737373',
    '#525252',
    '#404040',
    '#262626',
    '#171717',
    '#0A0A0A',
    '#000000',
];
const SX = {
    p: 1,
    '.react-colorful__pointer ': {
        width: 16,
        height: 16,
    },
    '.react-colorful__saturation': {
        mb: 1,
        borderRadius: '4px',
    },
    '.react-colorful__last-control': {
        borderRadius: '4px',
    },
    '.react-colorful__hue-pointer': {
        width: '4px',
        borderRadius: '4px',
        height: 24,
        cursor: 'col-resize',
    },
    '.react-colorful__saturation-pointer': {
        cursor: 'all-scroll',
    },
    input: {
        padding: 1,
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: '4px',
        width: '100%',
    },
};
function Picker({ value, onChange }) {
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: SX },
        react_1.default.createElement(react_colorful_1.HexColorPicker, { color: value, onChange: onChange }),
        react_1.default.createElement(Swatch_1.default, { paletteColors: DEFAULT_PRESET_COLORS, value: value, onChange: onChange }),
        react_1.default.createElement(material_1.Box, { pt: 1 },
            react_1.default.createElement(react_colorful_1.HexColorInput, { prefixed: true, color: value, onChange: onChange }))));
}
exports.default = Picker;
//# sourceMappingURL=Picker.js.map