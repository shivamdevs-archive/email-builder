"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const EditorContext_1 = require("../../../documents/editor/EditorContext");
const AvatarSidebarPanel_1 = __importDefault(require("./input-panels/AvatarSidebarPanel"));
const ButtonSidebarPanel_1 = __importDefault(require("./input-panels/ButtonSidebarPanel"));
const ColumnsContainerSidebarPanel_1 = __importDefault(require("./input-panels/ColumnsContainerSidebarPanel"));
const ContainerSidebarPanel_1 = __importDefault(require("./input-panels/ContainerSidebarPanel"));
const DividerSidebarPanel_1 = __importDefault(require("./input-panels/DividerSidebarPanel"));
const EmailLayoutSidebarPanel_1 = __importDefault(require("./input-panels/EmailLayoutSidebarPanel"));
const HeadingSidebarPanel_1 = __importDefault(require("./input-panels/HeadingSidebarPanel"));
const HtmlSidebarPanel_1 = __importDefault(require("./input-panels/HtmlSidebarPanel"));
const ImageSidebarPanel_1 = __importDefault(require("./input-panels/ImageSidebarPanel"));
const SpacerSidebarPanel_1 = __importDefault(require("./input-panels/SpacerSidebarPanel"));
const TextSidebarPanel_1 = __importDefault(require("./input-panels/TextSidebarPanel"));
function renderMessage(val) {
    return (react_1.default.createElement(material_1.Box, { sx: { m: 3, p: 1, border: '1px dashed', borderColor: 'divider' } },
        react_1.default.createElement(material_1.Typography, { color: "text.secondary" }, val)));
}
function ConfigurationPanel() {
    const document = (0, EditorContext_1.useDocument)();
    const selectedBlockId = (0, EditorContext_1.useSelectedBlockId)();
    if (!selectedBlockId) {
        return renderMessage('Click on a block to inspect.');
    }
    const block = document[selectedBlockId];
    if (!block) {
        return renderMessage(`Block with id ${selectedBlockId} was not found. Click on a block to reset.`);
    }
    const setBlock = (conf) => (0, EditorContext_1.setDocument)({ [selectedBlockId]: conf });
    const { data, type } = block;
    switch (type) {
        case 'Avatar':
            return react_1.default.createElement(AvatarSidebarPanel_1.default, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Button':
            return react_1.default.createElement(ButtonSidebarPanel_1.default, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'ColumnsContainer':
            return (react_1.default.createElement(ColumnsContainerSidebarPanel_1.default, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) }));
        case 'Container':
            return react_1.default.createElement(ContainerSidebarPanel_1.default, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Divider':
            return react_1.default.createElement(DividerSidebarPanel_1.default, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Heading':
            return react_1.default.createElement(HeadingSidebarPanel_1.default, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Html':
            return react_1.default.createElement(HtmlSidebarPanel_1.default, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Image':
            return react_1.default.createElement(ImageSidebarPanel_1.default, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'EmailLayout':
            return react_1.default.createElement(EmailLayoutSidebarPanel_1.default, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Spacer':
            return react_1.default.createElement(SpacerSidebarPanel_1.default, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Text':
            return react_1.default.createElement(TextSidebarPanel_1.default, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        default:
            return react_1.default.createElement("pre", null, JSON.stringify(block, null, '  '));
    }
}
exports.default = ConfigurationPanel;
//# sourceMappingURL=index.js.map