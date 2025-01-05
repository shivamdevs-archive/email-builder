"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
const EditorContext_1 = require("../../documents/editor/EditorContext");
function MainTabsGroup() {
    const selectedMainTab = (0, EditorContext_1.useSelectedMainTab)();
    const handleChange = (_, v) => {
        switch (v) {
            case 'json':
            case 'preview':
            case 'editor':
            case 'html':
                (0, EditorContext_1.setSelectedMainTab)(v);
                return;
            default:
                (0, EditorContext_1.setSelectedMainTab)('editor');
        }
    };
    return (react_1.default.createElement(material_1.Tabs, { value: selectedMainTab, onChange: handleChange },
        react_1.default.createElement(material_1.Tab, { value: "editor", label: react_1.default.createElement(material_1.Tooltip, { title: "Edit" },
                react_1.default.createElement(icons_material_1.EditOutlined, { fontSize: "small" })) }),
        react_1.default.createElement(material_1.Tab, { value: "preview", label: react_1.default.createElement(material_1.Tooltip, { title: "Preview" },
                react_1.default.createElement(icons_material_1.PreviewOutlined, { fontSize: "small" })) }),
        react_1.default.createElement(material_1.Tab, { value: "html", label: react_1.default.createElement(material_1.Tooltip, { title: "HTML output" },
                react_1.default.createElement(icons_material_1.CodeOutlined, { fontSize: "small" })) }),
        react_1.default.createElement(material_1.Tab, { value: "json", label: react_1.default.createElement(material_1.Tooltip, { title: "JSON output" },
                react_1.default.createElement(icons_material_1.DataObjectOutlined, { fontSize: "small" })) })));
}
exports.default = MainTabsGroup;
//# sourceMappingURL=MainTabsGroup.js.map