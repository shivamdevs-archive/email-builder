"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
const EditorContext_1 = require("../../../editor/EditorContext");
const sx = {
    position: 'absolute',
    top: 0,
    left: -56,
    borderRadius: 64,
    paddingX: 0.5,
    paddingY: 1,
    zIndex: 'fab',
};
function TuneMenu({ blockId }) {
    const document = (0, EditorContext_1.useDocument)();
    const handleDeleteClick = () => {
        var _a, _b, _c;
        const filterChildrenIds = (childrenIds) => {
            if (!childrenIds) {
                return childrenIds;
            }
            return childrenIds.filter((f) => f !== blockId);
        };
        const nDocument = Object.assign({}, document);
        for (const [id, b] of Object.entries(nDocument)) {
            const block = b;
            if (id === blockId) {
                continue;
            }
            switch (block.type) {
                case 'EmailLayout':
                    nDocument[id] = Object.assign(Object.assign({}, block), { data: Object.assign(Object.assign({}, block.data), { childrenIds: filterChildrenIds(block.data.childrenIds) }) });
                    break;
                case 'Container':
                    nDocument[id] = Object.assign(Object.assign({}, block), { data: Object.assign(Object.assign({}, block.data), { props: Object.assign(Object.assign({}, block.data.props), { childrenIds: filterChildrenIds((_a = block.data.props) === null || _a === void 0 ? void 0 : _a.childrenIds) }) }) });
                    break;
                case 'ColumnsContainer':
                    nDocument[id] = {
                        type: 'ColumnsContainer',
                        data: {
                            style: block.data.style,
                            props: Object.assign(Object.assign({}, block.data.props), { columns: (_c = (_b = block.data.props) === null || _b === void 0 ? void 0 : _b.columns) === null || _c === void 0 ? void 0 : _c.map((c) => ({
                                    childrenIds: filterChildrenIds(c.childrenIds),
                                })) }),
                        },
                    };
                    break;
                default:
                    nDocument[id] = block;
            }
        }
        delete nDocument[blockId];
        (0, EditorContext_1.resetDocument)(nDocument);
    };
    const handleMoveClick = (direction) => {
        var _a, _b, _c;
        const moveChildrenIds = (ids) => {
            if (!ids) {
                return ids;
            }
            const index = ids.indexOf(blockId);
            if (index < 0) {
                return ids;
            }
            const childrenIds = [...ids];
            if (direction === 'up' && index > 0) {
                [childrenIds[index], childrenIds[index - 1]] = [childrenIds[index - 1], childrenIds[index]];
            }
            else if (direction === 'down' && index < childrenIds.length - 1) {
                [childrenIds[index], childrenIds[index + 1]] = [childrenIds[index + 1], childrenIds[index]];
            }
            return childrenIds;
        };
        const nDocument = Object.assign({}, document);
        for (const [id, b] of Object.entries(nDocument)) {
            const block = b;
            if (id === blockId) {
                continue;
            }
            switch (block.type) {
                case 'EmailLayout':
                    nDocument[id] = Object.assign(Object.assign({}, block), { data: Object.assign(Object.assign({}, block.data), { childrenIds: moveChildrenIds(block.data.childrenIds) }) });
                    break;
                case 'Container':
                    nDocument[id] = Object.assign(Object.assign({}, block), { data: Object.assign(Object.assign({}, block.data), { props: Object.assign(Object.assign({}, block.data.props), { childrenIds: moveChildrenIds((_a = block.data.props) === null || _a === void 0 ? void 0 : _a.childrenIds) }) }) });
                    break;
                case 'ColumnsContainer':
                    nDocument[id] = {
                        type: 'ColumnsContainer',
                        data: {
                            style: block.data.style,
                            props: Object.assign(Object.assign({}, block.data.props), { columns: (_c = (_b = block.data.props) === null || _b === void 0 ? void 0 : _b.columns) === null || _c === void 0 ? void 0 : _c.map((c) => ({
                                    childrenIds: moveChildrenIds(c.childrenIds),
                                })) }),
                        },
                    };
                    break;
                default:
                    nDocument[id] = block;
            }
        }
        (0, EditorContext_1.resetDocument)(nDocument);
        (0, EditorContext_1.setSelectedBlockId)(blockId);
    };
    return (react_1.default.createElement(material_1.Paper, { sx: sx, onClick: (ev) => ev.stopPropagation() },
        react_1.default.createElement(material_1.Stack, null,
            react_1.default.createElement(material_1.Tooltip, { title: "Move up", placement: "left-start" },
                react_1.default.createElement(material_1.IconButton, { onClick: () => handleMoveClick('up'), sx: { color: 'text.primary' } },
                    react_1.default.createElement(icons_material_1.ArrowUpwardOutlined, { fontSize: "small" }))),
            react_1.default.createElement(material_1.Tooltip, { title: "Move down", placement: "left-start" },
                react_1.default.createElement(material_1.IconButton, { onClick: () => handleMoveClick('down'), sx: { color: 'text.primary' } },
                    react_1.default.createElement(icons_material_1.ArrowDownwardOutlined, { fontSize: "small" }))),
            react_1.default.createElement(material_1.Tooltip, { title: "Delete", placement: "left-start" },
                react_1.default.createElement(material_1.IconButton, { onClick: handleDeleteClick, sx: { color: 'text.primary' } },
                    react_1.default.createElement(icons_material_1.DeleteOutlined, { fontSize: "small" }))))));
}
exports.default = TuneMenu;
//# sourceMappingURL=TuneMenu.js.map