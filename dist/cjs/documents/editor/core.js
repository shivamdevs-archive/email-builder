"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorConfigurationSchema = exports.EditorBlockSchema = exports.EditorBlock = void 0;
const react_1 = __importDefault(require("react"));
const zod_1 = require("zod");
const block_avatar_1 = require("@usewaypoint/block-avatar");
const block_button_1 = require("@usewaypoint/block-button");
const block_divider_1 = require("@usewaypoint/block-divider");
const block_heading_1 = require("@usewaypoint/block-heading");
const block_html_1 = require("@usewaypoint/block-html");
const block_image_1 = require("@usewaypoint/block-image");
const block_spacer_1 = require("@usewaypoint/block-spacer");
const block_text_1 = require("@usewaypoint/block-text");
const document_core_1 = require("@usewaypoint/document-core");
const ColumnsContainerEditor_1 = __importDefault(require("../blocks/ColumnsContainer/ColumnsContainerEditor"));
const ColumnsContainerPropsSchema_1 = __importDefault(require("../blocks/ColumnsContainer/ColumnsContainerPropsSchema"));
const ContainerEditor_1 = __importDefault(require("../blocks/Container/ContainerEditor"));
const ContainerPropsSchema_1 = __importDefault(require("../blocks/Container/ContainerPropsSchema"));
const EmailLayoutEditor_1 = __importDefault(require("../blocks/EmailLayout/EmailLayoutEditor"));
const EmailLayoutPropsSchema_1 = __importDefault(require("../blocks/EmailLayout/EmailLayoutPropsSchema"));
const EditorBlockWrapper_1 = __importDefault(require("../blocks/helpers/block-wrappers/EditorBlockWrapper"));
const EDITOR_DICTIONARY = (0, document_core_1.buildBlockConfigurationDictionary)({
    Avatar: {
        schema: block_avatar_1.AvatarPropsSchema,
        Component: (props) => (react_1.default.createElement(EditorBlockWrapper_1.default, null,
            react_1.default.createElement(block_avatar_1.Avatar, Object.assign({}, props)))),
    },
    Button: {
        schema: block_button_1.ButtonPropsSchema,
        Component: (props) => (react_1.default.createElement(EditorBlockWrapper_1.default, null,
            react_1.default.createElement(block_button_1.Button, Object.assign({}, props)))),
    },
    Container: {
        schema: ContainerPropsSchema_1.default,
        Component: (props) => (react_1.default.createElement(EditorBlockWrapper_1.default, null,
            react_1.default.createElement(ContainerEditor_1.default, Object.assign({}, props)))),
    },
    ColumnsContainer: {
        schema: ColumnsContainerPropsSchema_1.default,
        Component: (props) => (react_1.default.createElement(EditorBlockWrapper_1.default, null,
            react_1.default.createElement(ColumnsContainerEditor_1.default, Object.assign({}, props)))),
    },
    Heading: {
        schema: block_heading_1.HeadingPropsSchema,
        Component: (props) => (react_1.default.createElement(EditorBlockWrapper_1.default, null,
            react_1.default.createElement(block_heading_1.Heading, Object.assign({}, props)))),
    },
    Html: {
        schema: block_html_1.HtmlPropsSchema,
        Component: (props) => (react_1.default.createElement(EditorBlockWrapper_1.default, null,
            react_1.default.createElement(block_html_1.Html, Object.assign({}, props)))),
    },
    Image: {
        schema: block_image_1.ImagePropsSchema,
        Component: (data) => {
            var _a, _b;
            const props = Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { url: (_b = (_a = data.props) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : 'https://placehold.co/600x400@2x/F8F8F8/CCC?text=Your%20image' }) });
            return (react_1.default.createElement(EditorBlockWrapper_1.default, null,
                react_1.default.createElement(block_image_1.Image, Object.assign({}, props))));
        },
    },
    Text: {
        schema: block_text_1.TextPropsSchema,
        Component: (props) => (react_1.default.createElement(EditorBlockWrapper_1.default, null,
            react_1.default.createElement(block_text_1.Text, Object.assign({}, props)))),
    },
    EmailLayout: {
        schema: EmailLayoutPropsSchema_1.default,
        Component: (p) => react_1.default.createElement(EmailLayoutEditor_1.default, Object.assign({}, p)),
    },
    Spacer: {
        schema: block_spacer_1.SpacerPropsSchema,
        Component: (props) => (react_1.default.createElement(EditorBlockWrapper_1.default, null,
            react_1.default.createElement(block_spacer_1.Spacer, Object.assign({}, props)))),
    },
    Divider: {
        schema: block_divider_1.DividerPropsSchema,
        Component: (props) => (react_1.default.createElement(EditorBlockWrapper_1.default, null,
            react_1.default.createElement(block_divider_1.Divider, Object.assign({}, props)))),
    },
});
exports.EditorBlock = (0, document_core_1.buildBlockComponent)(EDITOR_DICTIONARY);
exports.EditorBlockSchema = (0, document_core_1.buildBlockConfigurationSchema)(EDITOR_DICTIONARY);
exports.EditorConfigurationSchema = zod_1.z.record(zod_1.z.string(), exports.EditorBlockSchema);
//# sourceMappingURL=core.js.map