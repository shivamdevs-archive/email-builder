"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
function PlaceholderButton({ onClick }) {
    return (react_1.default.createElement(material_1.ButtonBase, { onClick: (ev) => {
            ev.stopPropagation();
            onClick();
        }, sx: {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            height: 48,
            width: '100%',
            bgcolor: 'rgba(0,0,0, 0.05)',
        } },
        react_1.default.createElement(icons_material_1.AddOutlined, { sx: {
                p: 0.12,
                bgcolor: 'brand.blue',
                borderRadius: 24,
                color: 'primary.contrastText',
            }, fontSize: "small" })));
}
exports.default = PlaceholderButton;
//# sourceMappingURL=PlaceholderButton.js.map