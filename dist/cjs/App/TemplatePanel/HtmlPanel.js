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
const email_builder_1 = require("@usewaypoint/email-builder");
const EditorContext_1 = require("../../documents/editor/EditorContext");
const HighlightedCodePanel_1 = __importDefault(require("./helper/HighlightedCodePanel"));
function HtmlPanel() {
    const document = (0, EditorContext_1.useDocument)();
    const code = (0, react_1.useMemo)(() => (0, email_builder_1.renderToStaticMarkup)(document, { rootBlockId: 'root' }), [document]);
    return react_1.default.createElement(HighlightedCodePanel_1.default, { type: "html", value: code });
}
exports.default = HtmlPanel;
//# sourceMappingURL=HtmlPanel.js.map