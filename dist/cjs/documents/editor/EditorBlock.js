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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCurrentBlockId = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("./core");
const EditorContext_1 = require("./EditorContext");
const EditorBlockContext = (0, react_1.createContext)(null);
const useCurrentBlockId = () => (0, react_1.useContext)(EditorBlockContext);
exports.useCurrentBlockId = useCurrentBlockId;
/**
 *
 * @param id - Block id
 * @returns EditorBlock component that loads data from the EditorDocumentContext
 */
function EditorBlock({ id }) {
    const document = (0, EditorContext_1.useDocument)();
    const block = document[id];
    if (!block) {
        throw new Error('Could not find block');
    }
    return (react_1.default.createElement(EditorBlockContext.Provider, { value: id },
        react_1.default.createElement(core_1.EditorBlock, Object.assign({}, block))));
}
exports.default = EditorBlock;
//# sourceMappingURL=EditorBlock.js.map