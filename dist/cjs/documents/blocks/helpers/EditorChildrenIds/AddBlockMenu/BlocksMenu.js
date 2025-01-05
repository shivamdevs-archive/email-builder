"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const BlockButton_1 = __importDefault(require("./BlockButton"));
const buttons_1 = require("./buttons");
function BlocksMenu({ anchorEl, setAnchorEl, onSelect }) {
    const onClose = () => {
        setAnchorEl(null);
    };
    const onClick = (block) => {
        onSelect(block);
        setAnchorEl(null);
    };
    if (anchorEl === null) {
        return null;
    }
    return (react_1.default.createElement(material_1.Menu, { open: true, anchorEl: anchorEl, onClose: onClose, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center' } },
        react_1.default.createElement(material_1.Box, { sx: { p: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' } }, buttons_1.BUTTONS.map((k, i) => (react_1.default.createElement(BlockButton_1.default, { key: i, label: k.label, icon: k.icon, onClick: () => onClick(k.block()) }))))));
}
exports.default = BlocksMenu;
//# sourceMappingURL=BlocksMenu.js.map