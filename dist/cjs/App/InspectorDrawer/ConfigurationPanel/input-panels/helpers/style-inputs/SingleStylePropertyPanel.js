"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const icons_material_1 = require("@mui/icons-material");
const ColorInput_1 = require("../inputs/ColorInput");
const FontFamily_1 = require("../inputs/FontFamily");
const FontSizeInput_1 = __importDefault(require("../inputs/FontSizeInput"));
const FontWeightInput_1 = __importDefault(require("../inputs/FontWeightInput"));
const PaddingInput_1 = __importDefault(require("../inputs/PaddingInput"));
const SliderInput_1 = __importDefault(require("../inputs/SliderInput"));
const TextAlignInput_1 = __importDefault(require("../inputs/TextAlignInput"));
function SingleStylePropertyPanel({ name, value, onChange }) {
    var _a;
    const defaultValue = (_a = value[name]) !== null && _a !== void 0 ? _a : null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (v) => {
        onChange(Object.assign(Object.assign({}, value), { [name]: v }));
    };
    switch (name) {
        case 'backgroundColor':
            return react_1.default.createElement(ColorInput_1.NullableColorInput, { label: "Background color", defaultValue: defaultValue, onChange: handleChange });
        case 'borderColor':
            return react_1.default.createElement(ColorInput_1.NullableColorInput, { label: "Border color", defaultValue: defaultValue, onChange: handleChange });
        case 'borderRadius':
            return (react_1.default.createElement(SliderInput_1.default, { iconLabel: react_1.default.createElement(icons_material_1.RoundedCornerOutlined, null), units: "px", step: 4, marks: true, min: 0, max: 48, label: "Border radius", defaultValue: defaultValue, onChange: handleChange }));
        case 'color':
            return react_1.default.createElement(ColorInput_1.NullableColorInput, { label: "Text color", defaultValue: defaultValue, onChange: handleChange });
        case 'fontFamily':
            return react_1.default.createElement(FontFamily_1.NullableFontFamily, { label: "Font family", defaultValue: defaultValue, onChange: handleChange });
        case 'fontSize':
            return react_1.default.createElement(FontSizeInput_1.default, { label: "Font size", defaultValue: defaultValue, onChange: handleChange });
        case 'fontWeight':
            return react_1.default.createElement(FontWeightInput_1.default, { label: "Font weight", defaultValue: defaultValue, onChange: handleChange });
        case 'textAlign':
            return react_1.default.createElement(TextAlignInput_1.default, { label: "Alignment", defaultValue: defaultValue, onChange: handleChange });
        case 'padding':
            return react_1.default.createElement(PaddingInput_1.default, { label: "Padding", defaultValue: defaultValue, onChange: handleChange });
    }
}
exports.default = SingleStylePropertyPanel;
//# sourceMappingURL=SingleStylePropertyPanel.js.map