"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
function BaseSidebarPanel({ title, children }) {
    return (react_1.default.createElement(material_1.Box, { p: 2 },
        react_1.default.createElement(material_1.Typography, { variant: "overline", color: "text.secondary", sx: { display: 'block', mb: 2 } }, title),
        react_1.default.createElement(material_1.Stack, { spacing: 5, mb: 3 }, children)));
}
exports.default = BaseSidebarPanel;
//# sourceMappingURL=BaseSidebarPanel.js.map