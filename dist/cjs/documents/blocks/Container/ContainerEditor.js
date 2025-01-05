"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const block_container_1 = require("@usewaypoint/block-container");
const EditorBlock_1 = require("../../editor/EditorBlock");
const EditorContext_1 = require("../../editor/EditorContext");
const EditorChildrenIds_1 = __importDefault(require("../helpers/EditorChildrenIds"));
function ContainerEditor({ style, props }) {
    var _a;
    const childrenIds = (_a = props === null || props === void 0 ? void 0 : props.childrenIds) !== null && _a !== void 0 ? _a : [];
    const document = (0, EditorContext_1.useDocument)();
    const currentBlockId = (0, EditorBlock_1.useCurrentBlockId)();
    return (react_1.default.createElement(block_container_1.Container, { style: style },
        react_1.default.createElement(EditorChildrenIds_1.default, { childrenIds: childrenIds, onChange: ({ block, blockId, childrenIds }) => {
                (0, EditorContext_1.setDocument)({
                    [blockId]: block,
                    [currentBlockId]: {
                        type: 'Container',
                        data: Object.assign(Object.assign({}, document[currentBlockId].data), { props: { childrenIds: childrenIds } }),
                    },
                });
                (0, EditorContext_1.setSelectedBlockId)(blockId);
            } })));
}
exports.default = ContainerEditor;
//# sourceMappingURL=ContainerEditor.js.map