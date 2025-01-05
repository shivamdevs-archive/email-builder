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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
function DividerButton({ buttonElement, onClick }) {
    const [visible, setVisible] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        function listener({ clientX, clientY }) {
            if (!buttonElement) {
                return;
            }
            const rect = buttonElement.getBoundingClientRect();
            const rectY = rect.y;
            const bottomX = rect.x;
            const topX = bottomX + rect.width;
            if (Math.abs(clientY - rectY) < 20) {
                if (bottomX < clientX && clientX < topX) {
                    setVisible(true);
                    return;
                }
            }
            setVisible(false);
        }
        window.addEventListener('mousemove', listener);
        return () => {
            window.removeEventListener('mousemove', listener);
        };
    }, [buttonElement, setVisible]);
    return (react_1.default.createElement(material_1.Fade, { in: visible },
        react_1.default.createElement(material_1.IconButton, { size: "small", sx: {
                p: 0.12,
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-10px)',
                bgcolor: 'brand.blue',
                color: 'primary.contrastText',
                zIndex: 'fab',
                '&:hover, &:active, &:focus': {
                    bgcolor: 'brand.blue',
                    color: 'primary.contrastText',
                },
            }, onClick: (ev) => {
                ev.stopPropagation();
                onClick();
            } },
            react_1.default.createElement(icons_material_1.AddOutlined, { fontSize: "small" }))));
}
exports.default = DividerButton;
//# sourceMappingURL=DividerButton.js.map