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
const material_1 = require("@mui/material");
const EditorBlock_1 = require("../../../editor/EditorBlock");
const EditorContext_1 = require("../../../editor/EditorContext");
const TuneMenu_1 = __importDefault(require("./TuneMenu"));
function EditorBlockWrapper({ children }) {
    const selectedBlockId = (0, EditorContext_1.useSelectedBlockId)();
    const [mouseInside, setMouseInside] = (0, react_1.useState)(false);
    const blockId = (0, EditorBlock_1.useCurrentBlockId)();
    let outline;
    if (selectedBlockId === blockId) {
        outline = '2px solid rgba(0,121,204, 1)';
    }
    else if (mouseInside) {
        outline = '2px solid rgba(0,121,204, 0.3)';
    }
    const renderMenu = () => {
        if (selectedBlockId !== blockId) {
            return null;
        }
        return react_1.default.createElement(TuneMenu_1.default, { blockId: blockId });
    };
    return (react_1.default.createElement(material_1.Box, { sx: {
            position: 'relative',
            maxWidth: '100%',
            outlineOffset: '-1px',
            outline,
        }, onMouseEnter: (ev) => {
            setMouseInside(true);
            ev.stopPropagation();
        }, onMouseLeave: () => {
            setMouseInside(false);
        }, onClick: (ev) => {
            (0, EditorContext_1.setSelectedBlockId)(blockId);
            ev.stopPropagation();
            ev.preventDefault();
        } },
        renderMenu(),
        children));
}
exports.default = EditorBlockWrapper;
//# sourceMappingURL=EditorBlockWrapper.js.map