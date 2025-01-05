"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
const EditorContext_1 = require("../../documents/editor/EditorContext");
function ToggleInspectorPanelButton() {
    const inspectorDrawerOpen = (0, EditorContext_1.useInspectorDrawerOpen)();
    const handleClick = () => {
        (0, EditorContext_1.toggleInspectorDrawerOpen)();
    };
    if (inspectorDrawerOpen) {
        return (react_1.default.createElement(material_1.IconButton, { onClick: handleClick },
            react_1.default.createElement(icons_material_1.LastPageOutlined, { fontSize: "small" })));
    }
    return (react_1.default.createElement(material_1.IconButton, { onClick: handleClick },
        react_1.default.createElement(icons_material_1.AppRegistrationOutlined, { fontSize: "small" })));
}
exports.default = ToggleInspectorPanelButton;
//# sourceMappingURL=ToggleInspectorPanelButton.js.map