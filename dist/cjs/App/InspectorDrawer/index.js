"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INSPECTOR_DRAWER_WIDTH = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const EditorContext_1 = require("../../documents/editor/EditorContext");
const ConfigurationPanel_1 = __importDefault(require("./ConfigurationPanel"));
const StylesPanel_1 = __importDefault(require("./StylesPanel"));
const ArticlesPanel_1 = __importDefault(require("./ArticlesPanel"));
exports.INSPECTOR_DRAWER_WIDTH = 320;
function InspectorDrawer({ articles }) {
    const selectedSidebarTab = (0, EditorContext_1.useSelectedSidebarTab)();
    const inspectorDrawerOpen = (0, EditorContext_1.useInspectorDrawerOpen)();
    const renderCurrentSidebarPanel = () => {
        switch (selectedSidebarTab) {
            case "styles":
                return react_1.default.createElement(StylesPanel_1.default, null);
            case "articles":
                return react_1.default.createElement(ArticlesPanel_1.default, { articles: articles });
            default:
                return react_1.default.createElement(ConfigurationPanel_1.default, null);
        }
    };
    return (react_1.default.createElement(material_1.Drawer, { variant: "persistent", anchor: "right", open: inspectorDrawerOpen, sx: {
            width: inspectorDrawerOpen ? exports.INSPECTOR_DRAWER_WIDTH : 0,
        } },
        react_1.default.createElement(material_1.Box, { sx: {
                width: exports.INSPECTOR_DRAWER_WIDTH,
                height: 49,
                borderBottom: 1,
                borderColor: "divider",
            } },
            react_1.default.createElement(material_1.Box, { px: 2 },
                react_1.default.createElement(material_1.Tabs, { value: selectedSidebarTab, onChange: (_, v) => (0, EditorContext_1.setSidebarTab)(v) },
                    react_1.default.createElement(material_1.Tab, { value: "styles", label: "Styles" }),
                    react_1.default.createElement(material_1.Tab, { value: "block-configuration", label: "Inspect" }),
                    react_1.default.createElement(material_1.Tab, { value: "articles", label: "Articles" })))),
        react_1.default.createElement(material_1.Box, { sx: {
                width: exports.INSPECTOR_DRAWER_WIDTH,
                height: "calc(100% - 49px)",
                overflow: "auto",
            } }, renderCurrentSidebarPanel())));
}
exports.default = InspectorDrawer;
//# sourceMappingURL=index.js.map