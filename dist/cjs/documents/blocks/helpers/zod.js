"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zPadding = exports.zTextAlign = exports.zFontWeight = exports.zFontFamily = exports.zColor = void 0;
const zod_1 = require("zod");
const fontFamily_1 = require("./fontFamily");
function zColor() {
    return zod_1.z.string().regex(/^#[0-9a-fA-F]{6}$/);
}
exports.zColor = zColor;
function zFontFamily() {
    return zod_1.z.enum(fontFamily_1.FONT_FAMILY_NAMES);
}
exports.zFontFamily = zFontFamily;
function zFontWeight() {
    return zod_1.z.enum(['bold', 'normal']);
}
exports.zFontWeight = zFontWeight;
function zTextAlign() {
    return zod_1.z.enum(['left', 'center', 'right']);
}
exports.zTextAlign = zTextAlign;
function zPadding() {
    return zod_1.z.object({
        top: zod_1.z.number(),
        bottom: zod_1.z.number(),
        right: zod_1.z.number(),
        left: zod_1.z.number(),
    });
}
exports.zPadding = zPadding;
//# sourceMappingURL=zod.js.map