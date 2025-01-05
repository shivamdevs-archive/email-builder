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
const EditorBlock_1 = __importDefault(require("../../../editor/EditorBlock"));
const AddBlockMenu_1 = __importDefault(require("./AddBlockMenu"));
function generateId() {
    return `block-${Date.now()}`;
}
function EditorChildrenIds({ childrenIds, onChange }) {
    const appendBlock = (block) => {
        const blockId = generateId();
        return onChange({
            blockId,
            block,
            childrenIds: [...(childrenIds || []), blockId],
        });
    };
    const insertBlock = (block, index) => {
        const blockId = generateId();
        const newChildrenIds = [...(childrenIds || [])];
        newChildrenIds.splice(index, 0, blockId);
        return onChange({
            blockId,
            block,
            childrenIds: newChildrenIds,
        });
    };
    if (!childrenIds || childrenIds.length === 0) {
        return react_1.default.createElement(AddBlockMenu_1.default, { placeholder: true, onSelect: appendBlock });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        childrenIds.map((childId, i) => (react_1.default.createElement(react_1.Fragment, { key: childId },
            react_1.default.createElement(AddBlockMenu_1.default, { onSelect: (block) => insertBlock(block, i) }),
            react_1.default.createElement(EditorBlock_1.default, { id: childId })))),
        react_1.default.createElement(AddBlockMenu_1.default, { onSelect: appendBlock })));
}
exports.default = EditorChildrenIds;
//# sourceMappingURL=index.js.map