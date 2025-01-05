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
const Picker_1 = __importDefault(require("./Picker"));
const BUTTON_SX = {
    border: '1px solid',
    borderColor: 'cadet.400',
    width: 32,
    height: 32,
    borderRadius: '4px',
    bgcolor: '#FFFFFF',
};
function ColorInput({ label, defaultValue, onChange, nullable }) {
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    const handleClickOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const renderResetButton = () => {
        if (!nullable) {
            return null;
        }
        if (typeof value !== 'string' || value.trim().length === 0) {
            return null;
        }
        return (react_1.default.createElement(material_1.ButtonBase, { onClick: () => {
                setValue(null);
                onChange(null);
            } },
            react_1.default.createElement(icons_material_1.CloseOutlined, { fontSize: "small", sx: { color: 'grey.600' } })));
    };
    const renderOpenButton = () => {
        if (value) {
            return react_1.default.createElement(material_1.ButtonBase, { onClick: handleClickOpen, sx: Object.assign(Object.assign({}, BUTTON_SX), { bgcolor: value }) });
        }
        return (react_1.default.createElement(material_1.ButtonBase, { onClick: handleClickOpen, sx: Object.assign({}, BUTTON_SX) },
            react_1.default.createElement(icons_material_1.AddOutlined, { fontSize: "small" })));
    };
    return (react_1.default.createElement(material_1.Stack, { alignItems: "flex-start" },
        react_1.default.createElement(material_1.InputLabel, { sx: { mb: 0.5 } }, label),
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
            renderOpenButton(),
            renderResetButton()),
        react_1.default.createElement(material_1.Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: () => setAnchorEl(null), MenuListProps: {
                sx: { height: 'auto', padding: 0 },
            } },
            react_1.default.createElement(Picker_1.default, { value: value || '', onChange: (v) => {
                    setValue(v);
                    onChange(v);
                } }))));
}
exports.default = ColorInput;
//# sourceMappingURL=BaseColorInput.js.map