"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUTTONS = void 0;
const react_1 = __importDefault(require("react"));
const icons_material_1 = require("@mui/icons-material");
exports.BUTTONS = [
    {
        label: 'Heading',
        icon: react_1.default.createElement(icons_material_1.HMobiledataOutlined, null),
        block: () => ({
            type: 'Heading',
            data: {
                props: { text: 'Hello friend' },
                style: {
                    padding: { top: 16, bottom: 16, left: 24, right: 24 },
                },
            },
        }),
    },
    {
        label: 'Text',
        icon: react_1.default.createElement(icons_material_1.NotesOutlined, null),
        block: () => ({
            type: 'Text',
            data: {
                props: { text: 'My new text block' },
                style: {
                    padding: { top: 16, bottom: 16, left: 24, right: 24 },
                    fontWeight: 'normal',
                },
            },
        }),
    },
    {
        label: 'Button',
        icon: react_1.default.createElement(icons_material_1.SmartButtonOutlined, null),
        block: () => ({
            type: 'Button',
            data: {
                props: {
                    text: 'Button',
                    url: 'https://www.usewaypoint.com',
                },
                style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
            },
        }),
    },
    {
        label: 'Image',
        icon: react_1.default.createElement(icons_material_1.ImageOutlined, null),
        block: () => ({
            type: 'Image',
            data: {
                props: {
                    url: 'https://assets.usewaypoint.com/sample-image.jpg',
                    alt: 'Sample product',
                    contentAlignment: 'middle',
                    linkHref: null,
                },
                style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
            },
        }),
    },
    {
        label: 'Avatar',
        icon: react_1.default.createElement(icons_material_1.AccountCircleOutlined, null),
        block: () => ({
            type: 'Avatar',
            data: {
                props: {
                    imageUrl: 'https://ui-avatars.com/api/?size=128',
                    shape: 'circle',
                },
                style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
            },
        }),
    },
    {
        label: 'Divider',
        icon: react_1.default.createElement(icons_material_1.HorizontalRuleOutlined, null),
        block: () => ({
            type: 'Divider',
            data: {
                style: { padding: { top: 16, right: 0, bottom: 16, left: 0 } },
                props: {
                    lineColor: '#CCCCCC',
                },
            },
        }),
    },
    {
        label: 'Spacer',
        icon: react_1.default.createElement(icons_material_1.Crop32Outlined, null),
        block: () => ({
            type: 'Spacer',
            data: {},
        }),
    },
    {
        label: 'Html',
        icon: react_1.default.createElement(icons_material_1.HtmlOutlined, null),
        block: () => ({
            type: 'Html',
            data: {
                props: { contents: '<strong>Hello world</strong>' },
                style: {
                    fontSize: 16,
                    textAlign: null,
                    padding: { top: 16, bottom: 16, left: 24, right: 24 },
                },
            },
        }),
    },
    {
        label: 'Columns',
        icon: react_1.default.createElement(icons_material_1.ViewColumnOutlined, null),
        block: () => ({
            type: 'ColumnsContainer',
            data: {
                props: {
                    columnsGap: 16,
                    columnsCount: 3,
                    columns: [{ childrenIds: [] }, { childrenIds: [] }, { childrenIds: [] }],
                },
                style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
            },
        }),
    },
    {
        label: 'Container',
        icon: react_1.default.createElement(icons_material_1.LibraryAddOutlined, null),
        block: () => ({
            type: 'Container',
            data: {
                style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
            },
        }),
    },
    // { label: 'ProgressBar', icon: <ProgressBarOutlined />, block: () => ({}) },
    // { label: 'LoopContainer', icon: <ViewListOutlined />, block: () => ({}) },
];
//# sourceMappingURL=buttons.js.map