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
const BlocksMenu_1 = __importDefault(require("./BlocksMenu"));
const DividerButton_1 = __importDefault(require("./DividerButton"));
const PlaceholderButton_1 = __importDefault(require("./PlaceholderButton"));
function AddBlockButton({ onSelect, placeholder }) {
    const [menuAnchorEl, setMenuAnchorEl] = (0, react_1.useState)(null);
    const [buttonElement, setButtonElement] = (0, react_1.useState)(null);
    const handleButtonClick = () => {
        setMenuAnchorEl(buttonElement);
    };
    const renderButton = () => {
        if (placeholder) {
            return react_1.default.createElement(PlaceholderButton_1.default, { onClick: handleButtonClick });
        }
        else {
            return react_1.default.createElement(DividerButton_1.default, { buttonElement: buttonElement, onClick: handleButtonClick });
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: setButtonElement, style: { position: 'relative' } }, renderButton()),
        react_1.default.createElement(BlocksMenu_1.default, { anchorEl: menuAnchorEl, setAnchorEl: setMenuAnchorEl, onSelect: onSelect })));
}
exports.default = AddBlockButton;
//# sourceMappingURL=index.js.map