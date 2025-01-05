"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const EditorContext_1 = require("../../documents/editor/EditorContext");
const EmailLayoutSidebarPanel_1 = __importDefault(require("./ConfigurationPanel/input-panels/EmailLayoutSidebarPanel"));
function StylesPanel() {
    const block = (0, EditorContext_1.useDocument)().root;
    if (!block) {
        return react_1.default.createElement("p", null, "Block not found");
    }
    const { data, type } = block;
    if (type !== 'EmailLayout') {
        throw new Error('Expected "root" element to be of type EmailLayout');
    }
    return react_1.default.createElement(EmailLayoutSidebarPanel_1.default, { key: "root", data: data, setData: (data) => (0, EditorContext_1.setDocument)({ root: { type, data } }) });
}
exports.default = StylesPanel;
//# sourceMappingURL=StylesPanel.js.map