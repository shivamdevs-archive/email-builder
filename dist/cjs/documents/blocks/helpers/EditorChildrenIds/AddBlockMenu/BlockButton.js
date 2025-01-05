"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const BUTTON_SX = { p: 1.5, display: 'flex', flexDirection: 'column' };
const ICON_SX = {
    mb: 0.75,
    width: '100%',
    bgcolor: 'cadet.200',
    display: 'flex',
    justifyContent: 'center',
    p: 1,
    border: '1px solid',
    borderColor: 'cadet.300',
};
function BlockTypeButton({ label, icon, onClick }) {
    return (react_1.default.createElement(material_1.Button, { sx: BUTTON_SX, onClick: (ev) => {
            ev.stopPropagation();
            onClick();
        } },
        react_1.default.createElement(material_1.Box, { sx: ICON_SX }, icon),
        react_1.default.createElement(material_1.Typography, { variant: "body2" }, label)));
}
exports.default = BlockTypeButton;
//# sourceMappingURL=BlockButton.js.map