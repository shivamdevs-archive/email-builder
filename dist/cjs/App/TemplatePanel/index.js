"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
const email_builder_1 = require("@usewaypoint/email-builder");
const EditorBlock_1 = __importDefault(require("../../documents/editor/EditorBlock"));
const EditorContext_1 = require("../../documents/editor/EditorContext");
const ToggleInspectorPanelButton_1 = __importDefault(require("../InspectorDrawer/ToggleInspectorPanelButton"));
const HtmlPanel_1 = __importDefault(require("./HtmlPanel"));
const JsonPanel_1 = __importDefault(require("./JsonPanel"));
const MainTabsGroup_1 = __importDefault(require("./MainTabsGroup"));
function TemplatePanel() {
    const document = (0, EditorContext_1.useDocument)();
    const selectedMainTab = (0, EditorContext_1.useSelectedMainTab)();
    const selectedScreenSize = (0, EditorContext_1.useSelectedScreenSize)();
    let mainBoxSx = {
        height: "100%",
    };
    if (selectedScreenSize === "mobile") {
        mainBoxSx = Object.assign(Object.assign({}, mainBoxSx), { margin: "32px auto", width: 370, height: 800, boxShadow: "rgba(33, 36, 67, 0.04) 0px 10px 20px, rgba(33, 36, 67, 0.04) 0px 2px 6px, rgba(33, 36, 67, 0.04) 0px 0px 1px" });
    }
    const handleScreenSizeChange = (_, value) => {
        switch (value) {
            case "mobile":
            case "desktop":
                (0, EditorContext_1.setSelectedScreenSize)(value);
                return;
            default:
                (0, EditorContext_1.setSelectedScreenSize)("desktop");
        }
    };
    const renderMainPanel = () => {
        switch (selectedMainTab) {
            case "editor":
                return (react_1.default.createElement(material_1.Box, { sx: mainBoxSx },
                    react_1.default.createElement(EditorBlock_1.default, { id: "root" })));
            case "preview":
                return (react_1.default.createElement(material_1.Box, { sx: mainBoxSx },
                    react_1.default.createElement(email_builder_1.Reader, { document: document, rootBlockId: "root" })));
            case "html":
                return react_1.default.createElement(HtmlPanel_1.default, null);
            case "json":
                return react_1.default.createElement(JsonPanel_1.default, null);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Stack, { sx: {
                height: 49,
                borderBottom: 1,
                borderColor: "divider",
                backgroundColor: "white",
                position: "sticky",
                top: 0,
                zIndex: "appBar",
                px: 1,
            }, direction: "row", justifyContent: "space-between", alignItems: "center" },
            react_1.default.createElement(material_1.Stack, { px: 2, direction: "row", gap: 2, width: "100%", justifyContent: "space-between", alignItems: "center" },
                react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 2 },
                    react_1.default.createElement(MainTabsGroup_1.default, null)),
                react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 2 },
                    react_1.default.createElement(material_1.ToggleButtonGroup, { value: selectedScreenSize, exclusive: true, size: "small", onChange: handleScreenSizeChange },
                        react_1.default.createElement(material_1.ToggleButton, { value: "desktop" },
                            react_1.default.createElement(material_1.Tooltip, { title: "Desktop view" },
                                react_1.default.createElement(icons_material_1.MonitorOutlined, { fontSize: "small" }))),
                        react_1.default.createElement(material_1.ToggleButton, { value: "mobile" },
                            react_1.default.createElement(material_1.Tooltip, { title: "Mobile view" },
                                react_1.default.createElement(icons_material_1.PhoneIphoneOutlined, { fontSize: "small" })))))),
            react_1.default.createElement(ToggleInspectorPanelButton_1.default, null)),
        react_1.default.createElement(material_1.Box, { sx: {
                height: "calc(100vh - 49px)",
                overflow: "auto",
                minWidth: 370,
            } }, renderMainPanel())));
}
exports.default = TemplatePanel;
//# sourceMappingURL=index.js.map