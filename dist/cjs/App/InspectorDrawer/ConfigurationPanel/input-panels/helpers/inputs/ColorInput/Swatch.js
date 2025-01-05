"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const TILE_BUTTON = {
    width: 24,
    height: 24,
};
function Swatch({ paletteColors, value, onChange }) {
    const renderButton = (colorValue) => {
        return (react_1.default.createElement(material_1.Button, { key: colorValue, onClick: () => onChange(colorValue), sx: Object.assign(Object.assign({}, TILE_BUTTON), { backgroundColor: colorValue, border: '1px solid', borderColor: value === colorValue ? 'black' : 'grey.200', minWidth: 24, display: 'inline-flex', '&:hover': {
                    backgroundColor: colorValue,
                    borderColor: 'grey.500',
                } }) }));
    };
    return (react_1.default.createElement(material_1.Box, { width: "100%", sx: { display: 'grid', gap: 1, gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr' } }, paletteColors.map((c) => renderButton(c))));
}
exports.default = Swatch;
//# sourceMappingURL=Swatch.js.map