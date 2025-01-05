"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const EditorBlock_1 = require("../../editor/EditorBlock");
const EditorContext_1 = require("../../editor/EditorContext");
const EditorChildrenIds_1 = __importDefault(require("../helpers/EditorChildrenIds"));
function getFontFamily(fontFamily) {
    const f = fontFamily !== null && fontFamily !== void 0 ? fontFamily : 'MODERN_SANS';
    switch (f) {
        case 'MODERN_SANS':
            return '"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif';
        case 'BOOK_SANS':
            return 'Optima, Candara, "Noto Sans", source-sans-pro, sans-serif';
        case 'ORGANIC_SANS':
            return 'Seravek, "Gill Sans Nova", Ubuntu, Calibri, "DejaVu Sans", source-sans-pro, sans-serif';
        case 'GEOMETRIC_SANS':
            return 'Avenir, "Avenir Next LT Pro", Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif';
        case 'HEAVY_SANS':
            return 'Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif';
        case 'ROUNDED_SANS':
            return 'ui-rounded, "Hiragino Maru Gothic ProN", Quicksand, Comfortaa, Manjari, "Arial Rounded MT Bold", Calibri, source-sans-pro, sans-serif';
        case 'MODERN_SERIF':
            return 'Charter, "Bitstream Charter", "Sitka Text", Cambria, serif';
        case 'BOOK_SERIF':
            return '"Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, serif';
        case 'MONOSPACE':
            return '"Nimbus Mono PS", "Courier New", "Cutive Mono", monospace';
    }
}
function EmailLayoutEditor(props) {
    var _a, _b, _c, _d, _e;
    const childrenIds = (_a = props.childrenIds) !== null && _a !== void 0 ? _a : [];
    const document = (0, EditorContext_1.useDocument)();
    const currentBlockId = (0, EditorBlock_1.useCurrentBlockId)();
    return (react_1.default.createElement("div", { onClick: () => {
            (0, EditorContext_1.setSelectedBlockId)(null);
        }, style: {
            backgroundColor: (_b = props.backdropColor) !== null && _b !== void 0 ? _b : '#F5F5F5',
            color: (_c = props.textColor) !== null && _c !== void 0 ? _c : '#262626',
            fontFamily: getFontFamily(props.fontFamily),
            fontSize: '16px',
            fontWeight: '400',
            letterSpacing: '0.15008px',
            lineHeight: '1.5',
            margin: '0',
            padding: '32px 0',
            width: '100%',
            minHeight: '100%',
        } },
        react_1.default.createElement("table", { align: "center", width: "100%", style: {
                margin: '0 auto',
                maxWidth: '600px',
                backgroundColor: (_d = props.canvasColor) !== null && _d !== void 0 ? _d : '#FFFFFF',
                borderRadius: (_e = props.borderRadius) !== null && _e !== void 0 ? _e : undefined,
                border: (() => {
                    const v = props.borderColor;
                    if (!v) {
                        return undefined;
                    }
                    return `1px solid ${v}`;
                })(),
            }, role: "presentation", cellSpacing: "0", cellPadding: "0", border: 0 },
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", { style: { width: '100%' } },
                    react_1.default.createElement("td", null,
                        react_1.default.createElement(EditorChildrenIds_1.default, { childrenIds: childrenIds, onChange: ({ block, blockId, childrenIds }) => {
                                (0, EditorContext_1.setDocument)({
                                    [blockId]: block,
                                    [currentBlockId]: {
                                        type: 'EmailLayout',
                                        data: Object.assign(Object.assign({}, document[currentBlockId].data), { childrenIds: childrenIds }),
                                    },
                                });
                                (0, EditorContext_1.setSelectedBlockId)(blockId);
                            } })))))));
}
exports.default = EmailLayoutEditor;
//# sourceMappingURL=EmailLayoutEditor.js.map