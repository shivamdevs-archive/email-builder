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
const EditorContext_1 = require("../documents/editor/EditorContext");
const InspectorDrawer_1 = __importStar(require("./InspectorDrawer"));
const TemplatePanel_1 = __importDefault(require("./TemplatePanel"));
const email_builder_1 = require("@usewaypoint/email-builder");
function useDrawerTransition(cssProperty, open) {
    const { transitions } = (0, material_1.useTheme)();
    return transitions.create(cssProperty, {
        easing: !open ? transitions.easing.sharp : transitions.easing.easeOut,
        duration: !open
            ? transitions.duration.leavingScreen
            : transitions.duration.enteringScreen,
    });
}
function Editor({ articles, template, onChange }) {
    const inspectorDrawerOpen = (0, EditorContext_1.useInspectorDrawerOpen)();
    const document = (0, EditorContext_1.useDocument)();
    const marginRightTransition = useDrawerTransition("margin-right", inspectorDrawerOpen);
    (0, react_1.useEffect)(() => {
        if (template) {
            (0, EditorContext_1.resetDocument)(template);
        }
    }, [template]);
    (0, react_1.useEffect)(() => {
        if (onChange) {
            onChange({
                html: (0, email_builder_1.renderToStaticMarkup)(document, { rootBlockId: "root" }),
                design: document,
            });
        }
    }, [document]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(InspectorDrawer_1.default, { articles: articles }),
        react_1.default.createElement(material_1.Stack, { sx: {
                marginRight: inspectorDrawerOpen
                    ? `${InspectorDrawer_1.INSPECTOR_DRAWER_WIDTH}px`
                    : 0,
                transition: [marginRightTransition].join(", "),
            } },
            react_1.default.createElement(TemplatePanel_1.default, null))));
}
exports.default = Editor;
//# sourceMappingURL=index.js.map